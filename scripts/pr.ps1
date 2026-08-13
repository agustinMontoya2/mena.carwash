<#
.SYNOPSIS
Crea el PR a main desde la rama actual con gh.

.DESCRIPTION
Usa la rama actual como head y main como base. Ejecutar despues de ship.

.EXAMPLE
.\scripts\pr.ps1 -Id 5 -Title "define design tokens and migrate styles to tailwind"
#>
param(
  [Parameter(Mandatory = $true)]
  [ValidateRange(1, 999)]
  [int]$Id,
  [Parameter(Mandatory = $true)]
  [string]$Title
)

$ErrorActionPreference = "Stop"

function Get-GhExe {
  $candidates = @(
    "C:\Program Files\GitHub CLI\gh.exe",
    "$env:LOCALAPPDATA\Programs\GitHub CLI\gh.exe",
    "$env:ProgramFiles(x86)\GitHub CLI\gh.exe"
  )
  foreach ($c in $candidates) {
    if (Test-Path $c) { return $c }
  }
  return "gh"
}

$branch = git branch --show-current
if (-not $branch) { throw "No se pudo leer la rama actual" }
$title = "MCS-{0:D3}: {1}" -f $Id, $Title

& (Get-GhExe) pr create --base main --head $branch --title $title --body ("Ticket MCS-{0:D3} resuelto." -f $Id)
if ($LASTEXITCODE -ne 0) { throw "gh pr create fallo" }

Write-Host "PR de $branch hacia main creado." -ForegroundColor Green