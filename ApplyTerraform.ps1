$ErrorActionPreference = "Stop"

try {
	Write-Host "[$(Get-Date)] Applying Terraform"
	Push-Location terraform
	& terraform_1.2.3.exe init -get=true
	if ($lastexitcode -ne 0) {
		exit $lastexitcode
	}

	& terraform_1.2.3.exe apply
	if ($lastexitcode -ne 0) {
		exit $lastexitcode
	}

	Write-Host "[$(Get-Date)] Success"
	exit 0
} catch {
	Write-Host "[$(Get-Date)] Error"
	Write-Host $_ -ForegroundColor red
	exit 1
} finally {
	Pop-Location
}
