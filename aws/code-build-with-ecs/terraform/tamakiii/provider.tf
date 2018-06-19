terraform {
  backend "s3" {
    bucket = "terraform.tamakiii.com"
    key    = "try/aws/code-build-with-ecs/tamakiii/terraform.tfstate"
    region = "ap-northeast-1"
  }
}

provider "aws" {
  version = "~> 1.23"
  region = "${var.AWS_DEFAULT_REGION}"
  profile = "${var.AWS_PROFILE}"
}
