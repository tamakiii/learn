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

resource "aws_internet_gateway" "sample_app_public" {
  vpc_id = "${aws_vpc.sample_app.id}"

  tags {
    Name = "sample-app/public"
  }
}

resource "aws_route_table" "sample_app_public" {
  vpc_id = "${aws_vpc.sample_app.id}"

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = "${aws_internet_gateway.sample_app_public.id}"
  }

  tags {
    Name = "sample-app/public"
  }
}

resource "aws_route_table_association" "sample_app_public_a" {
  route_table_id = "${aws_route_table.sample_app_public.id}"
  subnet_id = "${aws_subnet.sample_app_public_a.id}"
}

resource "aws_route_table_association" "sample_app_public_c" {
  route_table_id = "${aws_route_table.sample_app_public.id}"
  subnet_id = "${aws_subnet.sample_app_public_c.id}"
}