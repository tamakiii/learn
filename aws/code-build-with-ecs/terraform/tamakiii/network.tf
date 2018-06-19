resource "aws_vpc" "sample_app" {
  cidr_block = "${var.CIDR_SAMPLE_APP}"
  instance_tenancy = "default"

  enable_dns_support   = true
  enable_dns_hostnames = true
  enable_classiclink   = false

  tags {
    Name = "sample-app"
  }
}