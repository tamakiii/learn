output "overview" {
  value = <<EOT

VPC:
  ${aws_vpc.sample_app.tags.Name}:
    id: ${aws_vpc.sample_app.id}
    cidr_block: ${aws_vpc.sample_app.cidr_block}

EOT
}
