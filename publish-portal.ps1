<#
.SYNOPSIS
  Aktualisiert das GitHub-Repository für das Lernportal Viyan und pusht zu GitHub Pages.

.PARAMETER Push
  Pusht den Commit direkt zum Remote-Repository auf GitHub.

.PARAMETER Message
  Individuelle Commit-Nachricht.

.EXAMPLE
  .\publish-portal.ps1
  .\publish-portal.ps1 -Push
  .\publish-portal.ps1 -Push -Message "Neues Mathe-Kapitel hinzugefügt"
#>

param(
    [switch]$Push,
    [string]$Message = "Update Lernportal Viyan"
)

$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $baseDir

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Lernportal Viyan - GitHub Veroeffentlichung" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Pruefen, ob Git initialisiert ist
if (-not (Test-Path (Join-Path $baseDir ".git"))) {
    Write-Host "[FEHLER] Dieser Ordner ist noch kein Git-Repository!" -ForegroundColor Red
    Write-Host "Bitte erstelle zuerst ein GitHub-Repository (siehe README.md) und fuehre aus:" -ForegroundColor Yellow
    Write-Host "  git init" -ForegroundColor Yellow
    Write-Host "  git remote add origin https://github.com/<DEIN-NUTZERNAME>/<REPO-NAME>.git" -ForegroundColor Yellow
    exit 1
}

# Status abfragen
git add .
$status = git status --porcelain

if ($status) {
    git commit -m $Message
    Write-Host "[OK] Commit erfolgreich erstellt: '$Message'" -ForegroundColor Green

    if ($Push) {
        Write-Host "Pushe Aenderungen zu GitHub..." -ForegroundColor Cyan
        git push origin main
        Write-Host "[ERFOLG] Das Lernportal wurde erfolgreich zu GitHub gepusht!" -ForegroundColor Green
    } else {
        Write-Host "[INFO] Commit lokal gespeichert. Zum Hochladen Skript mit -Push ausfuehren." -ForegroundColor Yellow
    }
} else {
    Write-Host "[INFO] Keine ungespeicherten Aenderungen vorhanden." -ForegroundColor Gray
    if ($Push) {
        Write-Host "Pushe verbleibende Commits..." -ForegroundColor Cyan
        git push origin main
    }
}

Write-Host "`nFertig!" -ForegroundColor Cyan
