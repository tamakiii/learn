resource "aws_default_security_group" "sample_app" {
  vpc_id = "${aws_vpc.sample_app.id}"

  ingress {
    protocol    = "-1"
    from_port   = 0
    to_port     = 0
    self        = true
  }

  ingress {
    protocol    = "tcp"
    from_port   = 22
    to_port     = 22
  }

  egress {
    protocol    = "-1"
    from_port   = "0"
    to_port     = "0"
    cidr_blocks = [
      "0.0.0.0/0"
    ]
  }

  tags {
    Name = "sample-app/default"
  }
}