variable "aws_region" {
  description = "Région AWS de déploiement"
  type        = string
  default     = "eu-west-3"
}

variable "project_name" {
  description = "Nom du projet (utilisé dans les noms de ressources)"
  type        = string
  default     = "arcana"
}

variable "environment" {
  description = "Environnement (production, staging, ...)"
  type        = string
  default     = "production"
}

variable "domain_name" {
  description = "Nom de domaine custom (ex: arcana.example.com)"
  type        = string
}

variable "cloudfront_price_class" {
  description = "Classe de prix CloudFront (PriceClass_100 = US + Europe)"
  type        = string
  default     = "PriceClass_100"

  validation {
    condition     = contains(["PriceClass_100", "PriceClass_200", "PriceClass_All"], var.cloudfront_price_class)
    error_message = "Valeurs acceptées : PriceClass_100, PriceClass_200, PriceClass_All."
  }
}

variable "tags" {
  description = "Tags appliqués à toutes les ressources AWS"
  type        = map(string)
  default = {
    Project     = "arcana"
    Module      = "spa"
    Environment = "production"
    ManagedBy   = "terraform"
  }
}
