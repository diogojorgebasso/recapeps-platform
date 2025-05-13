import { onObjectFinalized } from "firebase-functions/v2/storage";
import { info, warn, error as logError } from "firebase-functions/logger";
import * as admin from "firebase-admin";
import { v2 as speech } from '@google-cloud/speech';
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore();

// TODO : Essa função é local, ou seja, não precisa de acesso à internet!
export const transcribeUploadedDocument = onObjectFinalized(async (event) => {
    const filePath = event.data.name;
    const pathMatch = filePath.match(/^user\/(.*?)\/transcripts\/(.*?)$/);
    const speechClient = new speech.SpeechClient();

    if (!pathMatch) {
        info(`File ${filePath} does not match the target path pattern. Skipping.`);
        return;
    }

    const userId = pathMatch[1];
    const documentId = pathMatch[2].split(".")[0];
    const bucketName = event.data.bucket;
    const gcsUri = `gs://${bucketName}/${filePath}`;

    info(`Processing transcription for user ${userId}, document ${documentId}`);

    try {
        const bucket = admin.storage().bucket(bucketName);
        const file = bucket.file(filePath);
        const [metadata] = await file.getMetadata();
        const contentType = metadata.contentType || "";

        let transcriptionText = "";

        if (contentType.startsWith('audio/') || contentType.startsWith('video/')) {
            const request = {
                recognizer: `projects/recapeps-platform/locations/global/recognizers/_`,
                config: {
                    languageCodes: ["fr-FR"],
                    model: "latest_long",
                    profanityFilter: true,
                    enableAutomaticPunctuation: true, // Enable punctuation
                    enableWordConfidence: true,       // Get confidence scores
                    enableSpokenPunctuation: true,    // Detect spoken punctuation
                    enableSpokenEmojis: true,         // Detect spoken emojis if any
                    maxAlternatives: 1,
                    useEnhanced: true,                // Use enhanced model for better formatting
                    autoDecodingConfig: {}
                },
                uri: gcsUri,
            };

            info(`Sending recognition request for ${gcsUri}`);
            const [response] = await speechClient.recognize(request);

            info(response);

            if (response.results && response.results.length > 0) {
                // Improve formatting by preserving paragraph-like structures
                transcriptionText = response.results
                    .map(result => {
                        const transcript = result.alternatives && result.alternatives[0]?.transcript || "";
                        return transcript.trim();
                    })
                    .join(" ")
                    .replace(/\.\s+/g, ".\n\n") // Add paragraph breaks after periods
                    .replace(/\?\s+/g, "?\n\n") // Add paragraph breaks after question marks
                    .replace(/!\s+/g, "!\n\n")  // Add paragraph breaks after exclamation marks
                    .trim();
            }
            info("Audio transcription completed successfully");
        } else {
            warn(`Unsupported file type for transcription: ${contentType}`);
            transcriptionText = "Unsupported file type";
        }

        // Save to Firestore
        const docRef = db.collection("users").doc(userId).collection("oral-3").doc(documentId);
        await docRef.set({
            transcription: transcriptionText,
            originalFile: filePath,
            contentType: contentType,
            fileSize: metadata.size,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        info(`Transcription saved successfully for user ${userId}, document ${documentId}`);
    } catch (err) {
        const e = err as Error;
        logError(`Error transcribing document ${filePath}:`, e);
    }
});
