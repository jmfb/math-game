terraform {
  required_version = "1.2.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.19.0"
    }
  }

  backend "s3" {
    bucket         = "jmfb-terraform"
    key            = "math-game"
    region         = "us-east-1"
    dynamodb_table = "tfstate-lock"
  }
}

provider "aws" {
  region = "us-east-1"
}
