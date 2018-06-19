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

resource "aws_subnet" "sample_app_public_a" {
  vpc_id = "${aws_vpc.sample_app.id}"
  cidr_block = "${var.CIDR_SAMPLE_APP_BLOCKS["public_a"]}"
  availability_zone = "${var.AWS_DEFAULT_REGION}a"

  tags {
    Name = "sample-app/public-a"
  }
}

resource "aws_subnet" "sample_app_public_c" {
  vpc_id = "${aws_vpc.sample_app.id}"
  cidr_block = "${var.CIDR_SAMPLE_APP_BLOCKS["public_c"]}"
  availability_zone = "${var.AWS_DEFAULT_REGION}c"

  tags {
    Name = "sample-app/public-c"
  }
}