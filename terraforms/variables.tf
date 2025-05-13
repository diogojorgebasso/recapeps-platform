variable "project_id" {
  type        = string
  description = "GCP project ID"
}

variable "region" {
  type        = string
  default     = "us-central1"
  description = "Default region"
}

variable "service_accounts" {
  description = "Map of service account names to display names and roles"
  type = map(object({
    display_name = string
    roles        = list(string)
  }))
}
