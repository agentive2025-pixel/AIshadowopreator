# Hostinger Quick Start Guide

## 🚀 Quick Deployment Steps

### 1. Build Your Website
```bash
npm run build
```

### 2. Upload to Hostinger

All files you need are in the `dist` folder. Upload everything to your `public_html` folder:

```
dist/
├── index.html          ← Upload to public_html/
├── .htaccess          ← Upload to public_html/ (important!)
└── assets/            ← Upload entire folder to public_html/
    ├── *.css
    └── *.js
```

### 3. Access Your Website

Visit your domain: `https://yourdomain.com`

---

## 📁 What's in the dist folder?

- **index.html** - Your website's main HTML file
- **.htaccess** - Server configuration for routing and performance
- **assets/** - All CSS, JavaScript, and optimized files

## ✅ Deployment Checklist

- [ ] Run `npm run build`
- [ ] Log in to Hostinger File Manager
- [ ] Navigate to `public_html` folder
- [ ] Delete default Hostinger files
- [ ] Upload all files from `dist` folder
- [ ] Verify `.htaccess` is uploaded (enable "Show hidden files")
- [ ] Visit your domain to confirm it works
- [ ] Enable SSL certificate (Free Let's Encrypt)

## 🔧 Performance Features Included

✅ **GZIP Compression** - Faster page loads
✅ **Browser Caching** - Better performance for returning visitors
✅ **Code Splitting** - Optimized JavaScript bundles
✅ **Minification** - Smaller file sizes
✅ **Security Headers** - Enhanced security

## 📱 Hostinger File Manager Access

1. Log in to Hostinger
2. Go to **Hosting** → **File Manager**
3. Open `public_html` folder
4. Upload your files

## 🌐 Using FTP (Alternative)

**Host:** ftp.yourdomain.com
**Port:** 21
**Protocol:** FTP or SFTP

Get your credentials from: Hostinger → Hosting → FTP Accounts

## 🆘 Common Issues

**Problem:** Page shows directory listing
**Solution:** Ensure `index.html` is in the root of `public_html`

**Problem:** 404 errors on navigation
**Solution:** Make sure `.htaccess` is uploaded (enable hidden files view)

**Problem:** Assets not loading
**Solution:** Verify the `assets` folder is uploaded completely

## 📞 Need Help?

- Hostinger Support: 24/7 Live Chat
- Full Guide: See `DEPLOYMENT.md` for detailed instructions

---

**Your website is now ready for Hostinger!** 🎉
