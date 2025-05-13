project_id = "recapeps-test"

service_accounts = {

  #AUTH

  "save-user-to-firestore-run" = { 
    display_name = "Service Account for saveroletofirestore"
    roles = [
      "roles/firebase.admin",          # Modify Firebase Auth (custom claims)
      "roles/datastore.user",          # Write to Firestore
      "roles/cloudfunctions.invoker"   # Triggered by user create
    ]
  }

  "delete-user-document-run" = {
    display_name = "Service Account for deleteuserdocument"
    roles = [
      "roles/datastore.user",          # Access Firestore
      "roles/firebaseauth.admin",      # Delete auth users (if used)
      "roles/storage.admin",           # Access and delete from Cloud Storage
      "roles/cloudfunctions.invoker"   # Triggered by auth events
    ]
  }

  # EMAIL

  "send-contact-email-run" = {
    display_name = "Service Account for sendcontactemail"
    roles = [
      "roles/datastore.viewer",        # Read contact documents
      "roles/cloudfunctions.invoker",   # Triggered by Firestore events
      "roles/eventarc.eventReceiver"
    ]
  }

  "export-user-data-run" = {
    display_name = "Service Account for exportuserdata"
    roles = [
      "roles/datastore.user",          # Read Firestore data
      "roles/cloudfunctions.invoker"   # Callable function execution
    ]
  }

  "send-welcome-email-run" = {
    display_name = "Service Account for sendwelcomeemail"
    roles = [
      "roles/cloudfunctions.invoker"   # Triggered by user create
    ]
  }


  "stripe-webhook-test-run" = {
    display_name = "Service Account for stripewebhooktest"
    roles = [
      "roles/datastore.user",          # Update subscriptions subcollection
      "roles/cloudfunctions.invoker"
    ]
  }

  "create-portal-session-run" = {
    display_name = "Service Account for createportalsession"
    roles = [
      "roles/datastore.viewer",        # Read stripeCustomerId from Firestore
      "roles/cloudfunctions.invoker"
    ]
  }

    "transcribe-upload-document-run" = {
    display_name = "Service Account for transcribeuploadeddocument"
    roles = [
      "roles/storage.objectViewer",    # Read uploaded files from GCS
      "roles/datastore.user",          # Write transcription to Firestore
      "roles/cloudfunctions.invoker",  # Required by event trigger
      "roles/speech.admin",             # Use Speech-to-Text API
      "roles/eventarc.eventReceiver"
    ]
  }
}
