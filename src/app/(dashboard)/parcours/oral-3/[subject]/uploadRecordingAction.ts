import { ref, uploadBytes } from "firebase/storage";
import { storage, auth } from "@/lib/firebase/clientApp";

export async function uploadRecordingAction(formData: FormData, subjectId: string): Promise<{ success: boolean; filePath?: string; error?: string }> {
    const file = formData.get('audioBlob') as File | null;
    const userId = auth.currentUser?.uid; // Get the current user's ID from Firebase Auth

    if (!file) {
        return { success: false, error: "No audio file received." };
    }

    if (!userId) {
        return { success: false, error: "User is not authenticated." };
    }

    try {
        const blob = new Blob([file], { type: 'audio/webm' }); // Reconstruct blob if needed, or handle File directly
        const fileName = `oral_${subjectId}_${Date.now()}.webm`;
        const storageRef = ref(storage, `user/${userId}/transcripts/${fileName}`);

        await uploadBytes(storageRef, blob);

        const filePath = `/oral-3/${subjectId}/transcripts/${fileName.split('.')[0]}`;

        return { success: true, filePath: filePath };
    } catch (error: any) {
        console.error("Error uploading recording in server action:", error);
        return { success: false, error: error.message || "Failed to upload recording." };
    }
}