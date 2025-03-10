# The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
from firebase_functions import storage_fn

# The Firebase Admin SDK to access Cloud Firestore.
from firebase_admin import initialize_app, firestore, storage
import os
import tempfile
import whisper  

app = initialize_app()

@storage_fn.on_object_finalized()
def transcribe_audio(event: storage_fn.CloudEvent) -> None:
    """Triggered when a file is uploaded to Firebase Storage.
    This function will transcribe audio files using the local Whisper model.
    """
    # Get file details from the event
    file_path = event.data.get("name")
    
    # Check if this is an audio file in the user recordings directory
    if not file_path or not file_path.startswith("user/") or not file_path.endswith((".webm", ".mp3", ".wav", ".m4a")):
        print(f"Skipping non-audio or non-user file: {file_path}")
        return
    
    try:
        # Get the bucket and file reference
        bucket = storage.bucket()
        blob = bucket.blob(file_path)
        
        # Download the file to a temporary location
        _, temp_local_filename = tempfile.mkstemp()
        blob.download_to_filename(temp_local_filename)
        
        print(f"Downloaded file {file_path} to {temp_local_filename}")
        
        # Get user ID from the path
        path_parts = file_path.split('/')
        user_id = path_parts[1] if len(path_parts) > 1 else "unknown"
        
        # Load the Whisper model locally
        # You can choose from different model sizes: "tiny", "base", "small", "medium", "large"
        model = whisper.load_model("base")
        
        # Transcribe the audio file using the local model
        result = model.transcribe(temp_local_filename)
        transcript_text = result["text"]
        
        # Clean up the temporary file
        os.remove(temp_local_filename)
        
        # Save the transcription to Firestore
        firestore_client = firestore.client()
        
        # Generate a document reference for the transcription
        file_name = os.path.basename(file_path)
        file_name_without_ext = os.path.splitext(file_name)[0]
        transcription_path = f"users/{user_id}/transcriptions/{file_name_without_ext}"
        
        # Store transcription data
        firestore_client.document(transcription_path).set({
            "text": transcript_text,
            "source_file": file_path,
            "created_at": firestore.SERVER_TIMESTAMP
        })
        
        print(f"Successfully transcribed {file_path} and saved to {transcription_path}")
        
    except Exception as e:
        print(f"Error transcribing {file_path}: {str(e)}")
        raise e