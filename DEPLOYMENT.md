# Deploying AI Operator Website to Hostinger Student Plan

This guide will help you deploy your AI Operator website to Hostinger's student plan.

## Prerequisites

- Hostinger student plan account
- FTP/SFTP credentials from Hostinger
- FileZilla or any FTP client (or use Hostinger's File Manager)

## Step-by-Step Deployment Guide

### 1. Build the Project

Run the build command to create production-ready files:

```bash
npm run build
```

This will generate a `dist` folder with all your optimized static files.

### 2. Prepare Files for Upload

The `dist` folder contains:
- `index.html` - Main HTML file
- `assets/` - All CSS, JavaScript, and image files
- `.htaccess` - Apache server configuration (automatically included)

### 3. Upload to Hostinger

#### Option A: Using Hostinger File Manager (Easiest)

1. Log in to your Hostinger account
2. Go to **Hosting** → **File Manager**
3. Navigate to `public_html` folder (this is your website's root directory)
4. Delete any existing files in `public_html` (like default index.html)
5. Upload all contents from the `dist` folder:
   - Upload `index.html`
   - Upload the `assets` folder
   - Upload `.htaccess` file
6. Make sure the `.htaccess` file is visible (enable "Show hidden files" if needed)

#### Option B: Using FTP/SFTP (FileZilla)

1. Download and install [FileZilla](https://filezilla-project.org/)
2. Get your FTP credentials from Hostinger:
   - Go to **Hosting** → **FTP Accounts**
   - Note your hostname, username, and password
3. Connect to your Hostinger account via FTP:
   - Host: Your FTP hostname (e.g., ftp.yourdomain.com)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)
4. Navigate to the `public_html` folder
5. Upload all contents from the `dist` folder
6. Ensure `.htaccess` is uploaded (it may be hidden)

### 4. Configure Domain (Optional)

If you want to use a custom domain:

1. Go to **Domains** in your Hostinger panel
2. Click **Add Domain** or **Point Domain**
3. Follow the instructions to point your domain to Hostinger
4. Update DNS records if needed (usually takes 24-48 hours to propagate)

### 5. Verify Deployment

1. Visit your domain (e.g., yourdomain.com or yoursubdomain.hostinger-site.com)
2. Check that:
   - The website loads correctly
   - All animations work smoothly
   - Navigation functions properly
   - All sections are visible
   - Contact form displays correctly

### 6. Enable HTTPS/SSL (Recommended)

1. Go to your Hostinger panel
2. Navigate to **SSL** section
3. Click **Install SSL**
4. Choose **Free SSL** (Let's Encrypt)
5. Wait a few minutes for SSL to activate
6. Your site will now be accessible via `https://`

## Post-Deployment Checklist

- [ ] Website loads without errors
- [ ] All images and assets display correctly
- [ ] Animations are smooth
- [ ] Navigation works (all sections accessible)
- [ ] Contact form is functional
- [ ] Mobile responsive design works
- [ ] HTTPS is enabled
- [ ] Page load speed is acceptable

## Troubleshooting

### Issue: 404 errors when navigating

**Solution:** Make sure the `.htaccess` file is uploaded and located in the root directory (`public_html`).

### Issue: Website shows "Index of /" or directory listing

**Solution:** Ensure `index.html` is in the root of `public_html`, not in a subfolder.

### Issue: Assets not loading (broken images/styles)

**Solution:**
1. Check that the `assets` folder is uploaded
2. Clear your browser cache
3. Verify file permissions (should be 644 for files, 755 for folders)

### Issue: Slow loading

**Solution:**
1. Enable GZIP compression (already in `.htaccess`)
2. Enable browser caching (already in `.htaccess`)
3. Use Hostinger's CDN if available
4. Enable Cloudflare (free plan available)

### Issue: Changes not appearing

**Solution:**
1. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Clear Hostinger cache if enabled
3. Wait a few minutes for changes to propagate

## Performance Optimization

### Enable Caching

The `.htaccess` file includes caching rules. To verify:
1. Use [GTmetrix](https://gtmetrix.com) or [PageSpeed Insights](https://pagespeed.web.dev)
2. Check if browser caching is enabled

### Enable Cloudflare (Optional but Recommended)

1. Sign up for [Cloudflare](https://www.cloudflare.com) (free plan)
2. Add your domain to Cloudflare
3. Update your nameservers at Hostinger to Cloudflare's nameservers
4. Enable caching and minification in Cloudflare

## Updating Your Website

When you make changes to your website:

1. Make changes to your source code locally
2. Run `npm run build` to create new production files
3. Upload the new contents of the `dist` folder to `public_html`
4. Overwrite existing files
5. Clear browser cache to see changes

## Important Notes

- **Backup:** Always keep a backup of your `dist` folder before uploading
- **Testing:** Test changes locally before deploying
- **Version Control:** Consider using Git to track changes
- **Environment Variables:** This project doesn't use environment variables, but if you add them later, don't commit `.env` files to version control

## File Structure on Hostinger

```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-[hash].css
    ├── index-[hash].js
    ├── react-vendor-[hash].js
    └── animation-vendor-[hash].js
```

## Support

- **Hostinger Support:** Available 24/7 via live chat
- **Documentation:** [Hostinger Knowledge Base](https://support.hostinger.com)
- **Community:** [Hostinger Community Forum](https://www.hostinger.com/community)

## Additional Resources

- [How to Upload a Website to Hostinger](https://support.hostinger.com/en/articles/1583355-how-to-upload-a-website-to-hostinger)
- [How to Use File Manager](https://support.hostinger.com/en/articles/1583278-how-to-use-file-manager)
- [How to Install SSL Certificate](https://support.hostinger.com/en/articles/1583487-how-to-install-ssl-certificate)

---

**Congratulations!** Your AI Operator website should now be live on Hostinger. 🚀
