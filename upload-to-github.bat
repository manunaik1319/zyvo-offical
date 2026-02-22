@echo off
echo === Zyvo Website - GitHub Upload ===
echo.

echo Step 1: Removing git lock file...
if exist .git\index.lock del /f .git\index.lock
echo Done!
echo.

echo Step 2: Resetting git...
git reset
echo.

echo Step 3: Adding files...
git add .gitignore
git add package.json package-lock.json
git add next.config.js postcss.config.js tailwind.config.js tsconfig.json
git add README.md DEPLOY_TO_GITHUB.md
git add src/
git add public/
git add .env.local
echo Done!
echo.

echo Step 4: Committing changes...
git commit -m "Initial commit: Zyvo study space booking platform with hero images and trending spaces"
echo.

echo === Next Steps ===
echo.
echo 1. Create a new repository on GitHub:
echo    - Go to: https://github.com/new
echo    - Repository name: zyvo-website
echo    - Description: Zyvo - Study Space and Tutor Booking Platform
echo    - Choose Public or Private
echo    - DO NOT initialize with README
echo.
echo 2. After creating the repository, run:
echo    (Replace YOUR_USERNAME with your GitHub username)
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/zyvo-website.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo === Ready to Push! ===
echo.
pause
