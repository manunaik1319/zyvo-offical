# Zyvo Website - GitHub Upload Script
# Run this script in PowerShell to upload your project to GitHub

Write-Host "=== Zyvo Website - GitHub Upload ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Remove git lock file
Write-Host "Step 1: Removing git lock file..." -ForegroundColor Yellow
$lockFile = ".git/index.lock"
if (Test-Path $lockFile) {
    Remove-Item $lockFile -Force
    Write-Host "✓ Lock file removed" -ForegroundColor Green
} else {
    Write-Host "✓ No lock file found" -ForegroundColor Green
}
Start-Sleep -Seconds 1

# Step 2: Reset git index
Write-Host ""
Write-Host "Step 2: Resetting git index..." -ForegroundColor Yellow
git reset
Write-Host "✓ Git index reset" -ForegroundColor Green

# Step 3: Add all files
Write-Host ""
Write-Host "Step 3: Adding files to git..." -ForegroundColor Yellow
git add .gitignore
git add package.json package-lock.json
git add next.config.js postcss.config.js tailwind.config.js tsconfig.json
git add README.md DEPLOY_TO_GITHUB.md
git add src/
git add public/
git add .env.local
Write-Host "✓ Files added" -ForegroundColor Green

# Step 4: Commit changes
Write-Host ""
Write-Host "Step 4: Committing changes..." -ForegroundColor Yellow
git commit -m "Initial commit: Zyvo study space booking platform with hero images and trending spaces"
Write-Host "✓ Changes committed" -ForegroundColor Green

# Step 5: Instructions for GitHub
Write-Host ""
Write-Host "=== Next Steps ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create a new repository on GitHub:" -ForegroundColor White
Write-Host "   - Go to: https://github.com/new" -ForegroundColor Gray
Write-Host "   - Repository name: zyvo-website" -ForegroundColor Gray
Write-Host "   - Description: Zyvo - Study Space & Tutor Booking Platform" -ForegroundColor Gray
Write-Host "   - Choose Public or Private" -ForegroundColor Gray
Write-Host "   - DO NOT initialize with README" -ForegroundColor Red
Write-Host ""

Write-Host "2. After creating the repository, run these commands:" -ForegroundColor White
Write-Host "   (Replace YOUR_USERNAME with your GitHub username)" -ForegroundColor Gray
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/zyvo-website.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host ""

Write-Host "3. If you get authentication errors:" -ForegroundColor White
Write-Host "   - Use a Personal Access Token instead of password" -ForegroundColor Gray
Write-Host "   - Generate at: https://github.com/settings/tokens" -ForegroundColor Gray
Write-Host ""

Write-Host "=== Ready to Push! ===" -ForegroundColor Green
Write-Host ""
