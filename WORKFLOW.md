# Development Workflow - Branch Strategy

## 📁 Branch Overview

```
main (template)          personal (your portfolio)
     |                         |
     |                         |
  [template]              [real data]
  [placeholder]           [deployed]
```

## 🔄 Daily Workflow

### Making Template Improvements (Features, Fixes, UI)

```bash
# 1. Switch to main
git checkout main

# 2. Make your changes (e.g., improve PDF generation)
# ... edit files ...

# 3. Commit with descriptive message
git commit -m "feat: improve PDF section spacing"

# 4. Push to main
git push origin main

# 5. Merge to personal
git checkout personal
git merge main
git push origin personal
```

### Updating Personal Data (Resume, Content)

```bash
# 1. Switch to personal
git checkout personal

# 2. Edit your resume data
# Edit src/data/resume.ts

# 3. Commit with generic message
git commit -m "chore: update resume"

# 4. Push to personal only
git push origin personal
```

## 📝 Commit Message Guidelines

### For Template Changes (main branch)
Use detailed, descriptive messages:
- `feat: add new skill visualization component`
- `fix: resolve PDF page break issue`
- `refactor: improve GitHub API integration`
- `docs: update README with deployment instructions`
- `style: adjust terminal color scheme`

### For Personal Data (personal branch)
Use generic messages:
- `chore: update resume`
- `chore: update resume content`
- `chore: add new experience`
- `chore: update skills`

## 🚀 Deployment

- **GitHub Pages** deploys from `personal` branch
- Configured in `.github/workflows/deploy.yml`
- Automatic deployment on push to `personal`

## 🔀 Merge Strategy

Always merge `main` → `personal`, never the reverse:

```bash
# ✅ Correct
git checkout personal
git merge main

# ❌ Wrong - don't do this
git checkout main
git merge personal  # This would pollute main with personal data
```

## 🛡️ Protecting Your Data

The `main` branch should NEVER contain:
- Your real name, email, or contact info
- Your actual work experiences
- Your real education details
- Your personal GitHub stats
- Any identifying information

Keep all personal data in `personal` branch only.

## 🎯 Quick Commands

```bash
# Check which branch you're on
git branch

# See differences between branches
git diff main personal

# View branch structure
git log --oneline --all --graph -10

# Switch branches
git checkout main       # Template work
git checkout personal   # Personal updates
```

## 📦 If You Make a Mistake

### Committed personal data to main?

```bash
# Option 1: Revert the commit
git checkout main
git revert <commit-hash>
git push origin main

# Option 2: Interactive rebase (if not pushed)
git rebase -i HEAD~N
# Mark commit as "drop" or "edit"
```

### Merged wrong direction (personal → main)?

```bash
# Reset main to before the merge
git checkout main
git reset --hard origin/main  # Reset to remote state
git push origin main --force  # ⚠️ Use with caution
```

## 🎨 Template Development Flow

1. Identify improvement needed
2. Create feature in `main`
3. Test locally
4. Commit with clear message
5. Push to `main`
6. Merge to `personal`
7. Verify deployment

## 📊 Current Branch State

- `main`: Clean template, ready for forking
- `personal`: Your live portfolio with real data
- GitHub Pages: Deploys from `personal`

## 🤝 Contributing

If someone wants to improve the template:
1. Fork the `main` branch
2. Create feature branch from `main`
3. Submit PR to `main`
4. You review and merge
5. You merge `main` to your `personal`

## 💡 Pro Tips

- Always pull before making changes
- Keep commits atomic (one logical change per commit)
- Use `git status` frequently
- Test locally before pushing
- Keep `main` as clean template for future users
