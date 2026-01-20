# AI Operator - Premium Shadow Operator Agency Website

A modern, high-performance website built for AI Operator, designed to be deployed on Hostinger's student plan.

## 🌟 Features

- **Dark Theme** with animated star particles background
- **Typing Animation** hero section with glowing CTAs
- **Interactive Sections** with scroll-triggered animations
- **Glassmorphism Design** with modern UI elements
- **Testimonials Carousel** with auto-rotation
- **Contact Form** with success animations
- **Mobile Responsive** design across all devices
- **Performance Optimized** for fast loading
- **SEO Ready** with proper semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build with Hostinger reminder
npm run build:hostinger
```

## 🚀 Deployment to Hostinger

### Quick Start

1. **Build the project:**
   ```bash
   npm run build:hostinger
   ```

2. **Upload to Hostinger:**
   - Log in to Hostinger File Manager
   - Navigate to `public_html` folder
   - Upload all contents from the `dist` folder
   - Make sure `.htaccess` is uploaded (enable hidden files)

3. **Visit your website:**
   - Go to your domain (e.g., yourdomain.com)
   - Enable SSL certificate for HTTPS

### Detailed Guides

- **Quick Start:** See `HOSTINGER-QUICK-START.md`
- **Full Guide:** See `DEPLOYMENT.md`

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.tsx  # Particle animation
│   ├── Navigation.tsx          # Header navigation
│   ├── Hero.tsx                # Hero section with typing effect
│   ├── WhoWeAre.tsx           # Stats and company info
│   ├── Process.tsx            # How we work section
│   ├── Services.tsx           # Service offerings
│   ├── Benefits.tsx           # Key benefits
│   ├── Testimonials.tsx       # Client testimonials
│   ├── CTA.tsx                # Contact form
│   ├── Footer.tsx             # Footer section
│   └── ScrollToTop.tsx        # Scroll to top button
├── App.tsx                     # Main app component
├── index.css                   # Global styles
└── main.tsx                    # App entry point
```

## 🎨 Design System

### Colors
- **Primary:** #7C3AED (Purple)
- **Secondary:** #00D4FF (Cyan)
- **Background:** #0A0B1E to #000000 (Dark gradient)
- **Text:** #FFFFFF (White)
- **Secondary Text:** #A0AEC0 (Light gray)

### Typography
- **Font Family:** Inter
- **Headings:** 48-72px, Bold
- **Body:** 16-18px, Regular
- **Buttons:** 14-16px, SemiBold

## ⚡ Performance

- **Code Splitting** - Separate vendor chunks for React and animations
- **Minification** - Terser for JavaScript compression
- **GZIP Compression** - Enabled via .htaccess
- **Browser Caching** - Optimized cache headers
- **Lazy Loading** - Components load on demand
- **Optimized Assets** - Compressed CSS and JS

### Build Output

```
dist/assets/
├── index.css (21 KB → 4.5 KB gzipped)
├── react-vendor.js (139 KB → 45 KB gzipped)
├── animation-vendor.js (131 KB → 42 KB gzipped)
└── index.js (40 KB → 11 KB gzipped)
```

## 🔧 Configuration

### Vite Config (`vite.config.ts`)
- Terser minification for smaller bundles
- Code splitting for vendor libraries
- Production optimizations

### Apache Config (`.htaccess`)
- URL rewriting for SPA routing
- GZIP compression
- Browser caching
- Security headers

### Tailwind Config (`tailwind.config.js`)
- Custom color palette
- Custom animations
- Extended utility classes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔒 Security

- XSS protection headers
- Content type sniffing prevention
- Clickjacking protection
- Referrer policy
- Directory browsing disabled

## 📊 SEO

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags ready
- Fast page load times
- Mobile-friendly design

## 🐛 Troubleshooting

### Build fails with terser error
```bash
npm install -D terser
```

### Changes not appearing
- Clear browser cache (Ctrl+F5)
- Check if files are uploaded correctly
- Verify .htaccess is present

### 404 errors on navigation
- Ensure .htaccess is in the root directory
- Check file permissions (644 for files, 755 for folders)

## 📞 Support

For deployment issues:
- Hostinger Support: 24/7 live chat
- Documentation: See deployment guides

For code issues:
- Check console for errors
- Verify all dependencies are installed

## 📝 License

Private project for AI Operator

## 🎯 Contact

- **Website:** www.aiopreator.com
- **Email:** hello@aiopreator.com

---

Built with ❤️ using modern web technologies
