# Math Game

Math Games for Mya.

## Prerequisites

* Download [terraform 1.2.3](https://releases.hashicorp.com/terraform/1.2.3/terraform_1.2.3_windows_amd64.zip) and alias to terraform_1.2.3
* `choco install nodejs` (min version 16.0.0)
* `choco install yarn` (min version 1.22.5)

## AWS Bootstrapping

* Create an AWS free tier account.
* Create an IAM User `deployment` with AdministratorAccess.
	* Store credentials in BitWarden.
	* Set up local AWS CLI configuration to use account.
* Create an S3 Bucket `jmfb-terraform` with versioning enabled.
* Create a DynamoDB table `tfstate-lock` with primary key `LockID` of type string.
* Register the `buysse.link` domain in Route 53.

## Deployment

When you update the terraform infrastructure you can deploy using the following:

```PowerShell
. .\ApplyTerraform.ps1
```

If you want to delete the infrastructure, you can run the following:

```PowerShell
. .\DestroyTerraform.ps1
```

Otherwise, publishing a new version of the website can be done via:

```PowerShell
. .\Publish.ps1
```
