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

Internet Gateway:
  ${aws_internet_gateway.sample_app_public.tags.Name}
    id: ${aws_internet_gateway.sample_app_public.id}

Route Table:
  ${aws_route_table.sample_app_public.tags.Name}:
    id: ${aws_route_table.sample_app_public.id}
    association:
      - ${aws_route_table_association.sample_app_public_a.id}
      - ${aws_route_table_association.sample_app_public_c.id}

Security Group:
  ${aws_default_security_group.sample_app.tags.Name}:
    id: ${aws_default_security_group.sample_app.id}

EOT
}
