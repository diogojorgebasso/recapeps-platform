output "service_account_emails" {
  value = {
    for sa in google_service_account.accounts :
    sa.account_id => sa.email
  }
}