terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 5.0.0"
    }
  }
  required_version = ">= 1.3.0"
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Create service accounts
resource "google_service_account" "accounts" {
  for_each     = var.service_accounts
  account_id   = each.key
  display_name = each.value.display_name
  project      = var.project_id
}

# Flatten all roles into a list of bindings
locals {
  iam_bindings = flatten([
    for sa_key, sa in var.service_accounts : [
      for role in sa.roles : {
        sa_email = "${sa_key}@${var.project_id}.iam.gserviceaccount.com"
        role     = role
        key      = "${sa_key}-${replace(role, "/", "_")}"
      }
    ]
  ])
}

# Assign IAM roles
resource "google_project_iam_member" "bindings" {
  for_each = {
    for binding in local.iam_bindings : binding.key => binding
  }

  project = var.project_id
  role    = each.value.role
  member  = "serviceAccount:${each.value.sa_email}"
}
