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

resource "aws_s3_bucket" "website" {
  bucket        = "math.buysse.link"
}

resource "aws_s3_bucket_acl" "website" {
  bucket = aws_s3_bucket.website.id
  acl    = "public-read"
}

data "aws_iam_policy_document" "website" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }

    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.website.arn}/*"]
  }
}

resource "aws_s3_bucket_policy" "website" {
  bucket = aws_s3_bucket.website.id
  policy = data.aws_iam_policy_document.website.json
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

data "aws_route53_zone" "dns_zone" {
  name         = "buysse.link."
  private_zone = false
}

resource "aws_route53_record" "dns" {
  zone_id = data.aws_route53_zone.dns_zone.zone_id
  name    = "math.buysse.link"
  type    = "CNAME"
  ttl     = 5
  records = [aws_s3_bucket_website_configuration.website.website_endpoint]
}
