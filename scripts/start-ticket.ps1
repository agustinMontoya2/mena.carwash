<#
.SYNOPSIS
Crea la rama de un ticket a partir de main actualizado.

.DESCRIPTION
Cambia a main, hace pull y crea la rama MCS-<ID>-<slug> derivada del titulo.

.EXAMPLE
.\scripts\start-ticket.ps1 -Id 4 -Title "extract site content"
#>
param(
  [Parameter(Mandatory = $true)]
  [ValidateRange(1, 999)]
  [int]$Id,
  [Parameter(Mandatory = $true)]
  [string]$Title
)

$ErrorActionPreference = "Stop"

$slug = ($Title.ToLower() -replace "[^a-z0-9]+", "-") -replace "(^-|-$)", ""
$branch = "MCS-{0:D3}-{1}" -f $Id, $slug

git checkout main
if ($LASTEXITCODE -ne 0) { throw "No se pudo cambiar a main" }
git pull
if ($LASTEXITCODE -ne 0) { throw "No se pudo hacer pull de main" }
git checkout -b $branch
if ($LASTEXITCODE -ne 0) { throw "No se pudo crear la rama $branch" }

Write-Host "Rama $branch lista, sobre main actualizado." -ForegroundColor Green