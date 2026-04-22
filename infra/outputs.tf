output "cloudfront_url" {
  description = "URL publique de la distribution CloudFront"
  value       = "https://${aws_cloudfront_distribution.spa.domain_name}"
  sensitive = true
}

output "domain_url" {
  description = "URL sur le domaine custom"
  value       = "https://${var.domain_name}"
  sensitive = true
}

output "acm_validation_records" {
  description = "Enregistrements CNAME à ajouter chez ton registrar pour valider le certificat SSL"
  value = {
    for dvo in aws_acm_certificate.spa.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  }
  sensitive = true
}

output "cloudfront_distribution_id" {
  description = "ID de la distribution CloudFront (pour l'invalidation de cache en CI)"
  value       = aws_cloudfront_distribution.spa.id
  sensitive   = true
}

output "s3_bucket_name" {
  description = "Nom du bucket S3"
  value       = aws_s3_bucket.spa.id
  sensitive   = true
}

output "s3_bucket_arn" {
  description = "ARN du bucket S3 (contient l'account ID AWS)"
  value       = aws_s3_bucket.spa.arn
  sensitive   = true
}
