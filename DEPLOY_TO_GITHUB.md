# Deploy Zyvo Website to GitHub

## Steps to Deploy

### 1. First, clean up the git repository

Run these commands in your terminal:

```bash
# Remove the git lock file if it exists
Remove-Item -Path ".git/index.lock" -Force -ErrorAction SilentlyContinue

# Reset the git index to clean state
git reset

# Add only the files we want (excluding node_modules)
git add .gitignore
git add package.json package-lock.json
git add next.config.js postcss.config.js tailwind.config.js tsconfig.json
git add README.md
git add src/
git add public/
git add .env.local

# Commit the changes
git commit -m "Initial commit: Zyvo study space booking platform"
```

### 2. Create a new GitHub repository

1. Go to https://github.com/new
2. Repository name: `zyvo-website` (or your preferred name)
3. Description: "Zyvo - Study Space & Tutor Booking Platform"
4. Choose Public or Private
5. DO NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 3. Add GitHub as a remote and push

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
# Add GitHub as a remote
git remote add origin https://github.com/YOUR_USERNAME/zyvo-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel (Optional)

Since you already have a `.vercel` folder, you can deploy to Vercel:

1. Go to https://vercel.com
2. Click "Import Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel --prod
```

## Troubleshooting

### If you get authentication errors:

You may need to use a Personal Access Token instead of password:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. Use the token as your password when pushing

### If node_modules are still being tracked:

```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules from git"
git push
```

## Environment Variables

Don't forget to add your environment variables to GitHub Secrets or Vercel:

- `NEXT_PUBLIC_GEO_API_KEY`
- Any other API keys from `.env.local`

---

Made with ❤️ by Manohar Bhukya
