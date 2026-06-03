# Deployment Guide for VirtualInstruments.ai

## Static Export Configuration

This site is now configured as a **fully static export** and can be deployed anywhere!

## 🚀 Deployment Options

### Option 1: GoDaddy Static Hosting (Recommended for your setup)

#### Step 1: Build the static site locally
```bash
npm install
npm run build
```
This creates an `out/` folder with all static HTML/CSS/JS files.

#### Step 2: Upload to GoDaddy
1. **Via FTP/SFTP:**
   - Connect to your GoDaddy server using FTP credentials
   - Navigate to your public_html folder
   - Delete existing files (if any)
   - Upload ALL files from the `out/` folder
   - Your site will be live at virtualinstruments.ai ✅

2. **Via cPanel File Manager:**
   - Log into cPanel
   - Go to File Manager
   - Navigate to public_html
   - Upload `out` folder contents
   - Done!

#### Step 3: Point GoDaddy Domain (if needed)
- GoDaddy Dashboard → Domain Settings
- A record should point to your GoDaddy server IP
- DNS propagation: 24 hours

---

### Option 2: GitHub Pages (Free)

#### Step 1: Build and deploy
```bash
git add .
git commit -m "Deploy site"
git push
```

The included GitHub Actions workflow builds the static site and deploys the generated `out/` folder.

#### Step 2: Enable GitHub Pages
- GitHub → Settings → Pages
- Source: GitHub Actions
- Site: https://virtualinstruments.ai

#### Step 3: Connect Custom Domain
- GoDaddy DNS settings
- Point CNAME to: acobeatscodes.github.io
- GitHub → Settings → Pages → Custom domain: virtualinstruments.ai

---

### Option 3: Netlify (Free)

1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. Connect custom domain in Netlify settings
5. Update GoDaddy nameservers to Netlify's

---

### Option 4: AWS S3 + CloudFront

1. Create S3 bucket
2. Upload `out/` folder
3. Enable static website hosting
4. Use CloudFront for CDN
5. Update DNS records

---

## 📋 What's Static Now?

✅ **All HTML pages pre-generated** - No server needed
✅ **CSS & JS bundled** - Fast loading
✅ **Dark mode works** - Via JavaScript
✅ **Animations work** - Framer Motion included
✅ **Forms functional** - Submit to Formspree/Getform (see below)
✅ **Mobile responsive** - All breakpoints included

---

## 📧 Form Submission Setup

Since this is static, forms need an external service:

### Option A: Formspree (Easiest)
1. Go to https://formspree.io
2. Sign up free
3. Create a form, get your form ID
4. Update `components/sections/CapabilityForm.tsx` line 33:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
5. Replace `YOUR_FORM_ID` with your actual ID
6. Rebuild and deploy

### Option B: Getform
1. Go to https://getform.io
2. Create account and form
3. Get endpoint URL
4. Update form action in CapabilityForm.tsx

### Option C: EmailJS
1. Go to https://www.emailjs.com
2. Set up free account
3. Get API key
4. Update form to use EmailJS SDK

---

## 🔍 Build Checklist

- [ ] Run `npm run build` successfully
- [ ] `out/` folder created with HTML files
- [ ] No errors in build log
- [ ] Test locally: `npx http-server out`
- [ ] All links working
- [ ] Dark mode toggle works
- [ ] Forms submit successfully
- [ ] Images load correctly
- [ ] Responsive on mobile

---

## 📱 Testing Locally

```bash
# Build
npm run build

# Start local server
npx http-server out

# Visit http://localhost:8080
```

---

## ⚡ Performance Tips

- Use CloudFront/CDN for faster global delivery
- Enable GZIP compression on GoDaddy
- Cache headers configured for static files
- Site will be lightning fast ⚡

---

## 🛠️ Troubleshooting

### 404 Errors After Deploy
- Ensure all `out/` folder contents uploaded
- Check index.html exists
- Verify trailingSlash: true in next.config.js

### Styles not loading
- Check CSS is in `_next/static/` folder
- Clear browser cache
- Verify file permissions on server

### Dark mode not working
- Dark mode JS is in bundled files
- Check browser console for errors
- Test in incognito mode

---

## 📞 Support

For questions:
- Email: acobeatspublishing@gmail.com
- Phone: +1 (347) 982-4354

Happy deploying! 🚀
