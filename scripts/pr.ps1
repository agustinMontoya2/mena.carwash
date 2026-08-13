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

function Get-TicketBody {
  param([int]$TicketId)
  $ticketPath = Join-Path $PSScriptRoot ("..\planning\tickets\MCS-{0:D3}.md" -f $TicketId)
  if (-not (Test-Path $ticketPath)) { return $null }
  $lines = Get-Content $ticketPath -Encoding UTF8
  $title = ""
  $desc = ""
  $ac = @()
  $section = ""
  foreach ($line in $lines) {
    if ($line -match "^# ") { $title = ($line -replace "^# ", "").Trim() }
    elseif ($line -match "^## (.*)$") {
      $section = ($matches[1]).Trim()
    }
    elseif ($section -like "Descripci*") { $desc += "`n$line" }
    elseif ($section -like "Criterios*") {
      if ($line -match "^\s*-\s+(.*)$") { $ac += $matches[1] }
    }
  }
  $desc = ($desc -replace "\n{2,}", "`n`n").Trim()
  $body = @"
## $title

$desc

## Criterios de aceptación

$(if ($ac.Count -gt 0) { ($ac | ForEach-Object { "- $_" }) -join "`n" } else { "- Sin criterios documentados." })
"@
  return $body
}

$branch = git branch --show-current
if (-not $branch) { throw "No se pudo leer la rama actual" }
$title = "MCS-{0:D3}: {1}" -f $Id, $Title

$body = Get-TicketBody -TicketId $Id
if (-not $body) {
  $body = "## MCS-{0:D3}: {1}`n`nTicket resuelto. Agregar descripción en el ticket MCS-{0:D3} para más detalle." -f $Id, $Title, $Id
}

$bodyFile = Join-Path $env:TEMP ("mena-pr-{0:D3}-body.md" -f $Id)
[System.IO.File]::WriteAllText($bodyFile, $body, [System.Text.UTF8Encoding]::new($false))

& (Get-GhExe) pr create --base main --head $branch --title $title --body-file $bodyFile
if ($LASTEXITCODE -ne 0) { throw "gh pr create fallo" }
Remove-Item $bodyFile -ErrorAction SilentlyContinue

Write-Host "PR de $branch hacia main creado." -ForegroundColor Green