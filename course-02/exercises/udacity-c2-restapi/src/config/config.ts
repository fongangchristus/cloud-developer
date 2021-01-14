export const config = {
  "dev": {
    "username": "postgres",
    "password": "postgres",
    "database": "udagram-dev",
    "host": "udagram-dev.cck1coxz47xe.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
