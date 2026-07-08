# Deployment Instructions for Precision Podiatry Group Website

## Quick Start (5 minutes)

### Step 1: Prepare Your Repository

1. Initialize a new Git repository (if not already done):
```bash
cd precision-podiatry-website
git init
git add .
git commit -m "Initial commit: Precision Podiatry Group website"
```

2. Create a new repository on GitHub:
   - Go to github.com/new
   - Name it: `precision-podiatry-website` (or your choice)
   - Click "Create repository"

3. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/precision-podiatry-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

1. **Sign up at [netlify.com](https://netlify.com)** (free account)

2. **Click "New site from Git"**

3. **Select GitHub** and authorize Netlify

4. **Choose your repository** (`precision-podiatry-website`)

5. **Verify build settings** (should auto-fill):
   - Build command: (leave empty - no build needed)
   - Publish directory: `.` (root)

6. **Click "Deploy site"**

Your site will be live at: `https://YOUR-SITE-NAME.netlify.app`

---

## Step 3: Connect Custom Domain

Once the site is live, add your custom domain:

1. In Netlify dashboard, go to **Domain settings**
2. Click **Add custom domain**
3. Enter: `precisionpodiatrygroup.com`
4. Netlify will provide DNS settings
5. Update your domain registrar with the provided nameservers or DNS records
6. Wait for propagation (24-48 hours typically)

---

## Step 4: Enable HTTPS (Automatic)

Netlify automatically provides free HTTPS via Let's Encrypt. No action needed.

---

## Making Updates

### Edit content and redeploy:

1. Edit files locally (index.html, styles.css, etc.)
2. Commit and push:
```bash
git add .
git commit -m "Update mission statement and FAQ"
git push
```
3. Netlify automatically redeploys (30 seconds)

---

## File-by-File Changes

### To update text content:
Edit `index.html` and modify the content directly.

### To update styling:
Edit `styles.css` for colors, fonts, spacing, etc.

### To add interactivity:
Edit or extend `script.js`

---

## Customization Checklist

- [ ] Replace SVG placeholders with real images (Hero, Approach, Mission sections)
- [ ] Update phone number in "Call Us" button
- [ ] Update email in "Email Us" button
- [ ] Update social media links (Instagram, Facebook URLs)
- [ ] Add actual insurance provider logos to insurance section
- [ ] Replace placeholder contact info with actual phone/email
- [ ] Test on mobile (use Chrome DevTools)
- [ ] Test all links and buttons
- [ ] Check all copy matches your latest branding

---

## Troubleshooting

### Site not deploying?
- Check Netlify deploy logs (Dashboard → Deploys)
- Ensure netlify.toml is in root directory
- Verify all HTML/CSS syntax is correct

### Domain not working?
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Wait up to 48 hours for full propagation
- Verify nameservers match Netlify settings

### Styling looks broken?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for CSS errors (F12)
- Verify all paths in CSS are correct

---

## Performance Tips

1. **Optimize images**:
   - Use tools like TinyPNG or ImageOptim
   - Keep file sizes under 500KB per image
   - Use WebP format when possible

2. **Monitor performance**:
   - Use Lighthouse (DevTools → Lighthouse)
   - Check Netlify Analytics dashboard

3. **Keep it fast**:
   - No external frameworks (pure HTML/CSS/JS)
   - Minimal dependencies = fast loads

---

## Security Features (Already Enabled)

✅ HTTPS encryption
✅ Security headers in netlify.toml
✅ Content Security Policy headers
✅ XSS protection headers
✅ Regular automatic backups via Git

---

## Support & Help

- **Netlify Support**: [netlify.com/support](https://netlify.com/support)
- **GitHub Help**: [help.github.com](https://help.github.com)
- **HTML/CSS Questions**: [mdn.mozilla.org](https://mdn.mozilla.org)

---

## What's Next?

Once deployed:

1. ✅ Share the link with stakeholders
2. ✅ Test all forms and CTAs
3. ✅ Monitor analytics (Netlify dashboard)
4. ✅ Gather feedback and iterate
5. ✅ Plan next features/updates

---

**Estimated deployment time: 10-15 minutes**

Questions? Check the README.md or contact Netlify support.
