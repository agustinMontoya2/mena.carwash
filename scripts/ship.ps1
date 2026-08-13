<#
.SYNOPSIS
Commit + push de la rama actual. No crea PR.

.DESCRIPTION
Agrega todos los cambios, commitea con el mensaje MCS-<ID>: <summary> y
pushea la rama. El PR se crea por separado con scripts\pr.ps1.

.EXAMPLE
.\scripts\ship.ps1 -Id 4 -Summary "extract site content into typed data files"
#>
param(
  [Parameter(Mandatory = $true)]
  [ValidateRange(1, 999)]
  [int]$Id,
  [Parameter(Mandatory = $true)]
  [string]$Summary
)

$ErrorActionPreference = "Stop"

$branch = git branch --show-current
if (-not $branch) { throw "No se pudo leer la rama actual" }
$message = "MCS-{0:D3}: {1}" -f $Id, $Summary

git add -A
if ($LASTEXITCODE -ne 0) { throw "git add fallo" }
git commit -m $message
if ($LASTEXITCODE -ne 0) { throw "git commit fallo" }
git push -u origin $branch
if ($LASTEXITCODE -ne 0) { throw "git push fallo" }

Write-Host "Commit y push de $branch completados. Para el PR: .\scripts\pr.ps1 -Id $Id -Title `"$Summary`"" -ForegroundColor Green