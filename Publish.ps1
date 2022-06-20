$ErrorActionPreference = "Stop"

try {
	Write-Host "[$(Get-Date)] Publishing Website"
	Push-Location client
	& yarn install
	if ($lastexitcode -ne 0) {
		exit $lastexitcode
	}

	& yarn build
	if ($lastexitcode -ne 0) {
		exit $lastexitcode
	}

	& yarn prettier-ci
	if ($lastexitcode -ne 0) {
		exit $lastexitcode
	}

	$version = (Get-Date).ToString("y.Mdd.Hmm.s")
	Write-Host "[$(Get-Date)] New version: $version"
	echo $version | Set-Content ./build/version.json

	& aws s3 sync --delete ./build s3://math.buysse.link
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
