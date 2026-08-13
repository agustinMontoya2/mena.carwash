<#
.SYNOPSIS
Commit + push + PR de la rama actual hacia main usando gh.

.DESCRIPTION
Agrega todos los cambios, commitea con el mensaje MCS-<ID>: <summary>,
pushea la rama y crea el PR a main con gh.

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
$message = "MCS-{0:D3}: {1}" -f $Id, $Summary
$title = $message

git add -A
if ($LASTEXITCODE -ne 0) { throw "git add fallo" }
git commit -m $message
if ($LASTEXITCODE -ne 0) { throw "git commit fallo" }
git push -u origin $branch
if ($LASTEXITCODE -ne 0) { throw "git push fallo" }

& (Get-GhExe) pr create --base main --head $branch --title $title --body ("Ticket MCS-{0:D3} resuelto." -f $Id)
if ($LASTEXITCODE -ne 0) { throw "gh pr create fallo" }

Write-Host "Commit, push y PR de $branch completados." -ForegroundColor Green