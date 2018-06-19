output "overview" {
  value = <<EOT

VPC:
  ${aws_vpc.sample_app.tags.Name}:
    id: ${aws_vpc.sample_app.id}
    cidr_block: ${aws_vpc.sample_app.cidr_block}

Subnet:
  ${aws_subnet.sample_app_public_a.tags.Name}:
    id: ${aws_subnet.sample_app_public_a.id}:
    cidr_block: ${aws_subnet.sample_app_public_a.cidr_block}

  ${aws_subnet.sample_app_public_c.tags.Name}:
    id: ${aws_subnet.sample_app_public_c.id}:
    cidr_block: ${aws_subnet.sample_app_public_a.cidr_block}

EOT
}
