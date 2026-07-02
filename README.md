# Godayana Business - Premium Consulting Website

A modern, professional consulting website designed for Godayana Business—a business growth partner for Sri Lankan MSMEs.

## 📁 Project Structure

```
GB Web/
├── index.html                 # Home page
├── services.html              # Services overview page
├── knowledge-hub.html         # Blog/articles page
├── our-work.html              # Portfolio/case studies page
├── about-us.html              # About us page
├── book-strategy-call.html    # Booking form page
├── css/
│   └── styles.css             # Main stylesheet with design system
├── js/
│   └── main.js                # JavaScript functionality
└── assets/                    # Placeholder for images and icons
```

## 🎨 Design System

### Colors
- **Primary**: #0F172B (Dark Navy Blue)
- **Secondary**: #0B6BA2 (Professional Blue)
- **Accent**: #FFC72C (Golden Yellow)
- **White**: #FFFFFF
- **Background**: #F8FAFC (Light Gray)
- **Border**: #E2E8F0 (Subtle Gray)
- **Text**: #475569 (Professional Gray)

### Typography
- **Headings**: Manrope (Bold, modern)
- **Body**: Inter (Clean, readable)
- **Sizing**: Responsive with 8px design system

## 🚀 Features

### Navigation
- Sticky header that transitions from transparent to solid white on scroll
- Responsive mobile menu
- Clear CTA buttons throughout
- Active link highlighting

### Pages Included

#### 1. **Home (index.html)**
- Hero section with value proposition
- "Who We Help" section (5 business types)
- Services overview (4 core services)
- "Why Godayana Business" differentiators
- Growth framework timeline
- Portfolio preview
- Knowledge hub preview
- Call-to-action banner
- Contact section with map placeholder

#### 2. **Services (services.html)**
- Detailed service breakdowns:
  - Marketing Solutions (6 services)
  - Business Development (6 services)
  - Digital Solutions (6 services)
  - Global Opportunities & Export Preparation (6 services)
- Service packages (Starter, Growth, Enterprise)
- CTA section

#### 3. **Knowledge Hub (knowledge-hub.html)**
- Featured article highlight
- Search and filter functionality
- 9 sample blog articles with categories
- Newsletter subscription
- Professional blog layout

#### 4. **Our Work (our-work.html)**
- Portfolio grid (6 case studies)
- Business statistics (50+ clients, 250% avg growth)
- Client testimonials (4 quotes with ratings)
- CTA for strategy calls

#### 5. **About Us (about-us.html)**
- Company story
- Mission & Vision statements
- Core values (Growth, Integrity, Innovation, Partnership, Continuous Learning)
- Founder section with professional portrait placeholder
- "Why Choose Us" differentiators

#### 6. **Book Strategy Call (book-strategy-call.html)**
- Premium booking form with validation
- Form fields:
  - Full Name
  - Business Name
  - Email
  - Phone
  - Industry
  - Area of Assistance (dropdown)
  - Business Description
  - Meeting Preference
- Contact information cards
- Google Map placeholder
- FAQ section
- Session details overview

## 💻 Functionality

### Responsive Design
- Mobile-first approach
- 12-column responsive grid
- Adaptive layouts for all screen sizes
- Tested breakpoints: Mobile (0-768px), Tablet (768-1024px), Desktop (1024px+)

### Interactions
- Smooth scrolling
- Hover effects on buttons and cards
- Sticky navigation
- Mobile menu toggle
- Form validation (client-side)
- Intersection observer animations

### Forms
- Email validation
- Phone number validation (10-digit format)
- Required field validation
- Error messages
- Success feedback
- Clean, accessible form design

### Accessibility
- Semantic HTML structure
- WCAG-compliant color contrast
- Proper heading hierarchy
- Form labels and error states
- Keyboard navigation
- Screen reader friendly

## 🎯 Design Principles Applied

✅ **Premium Quality**: High-end consulting firm aesthetic  
✅ **Minimal & Clean**: No flashy animations or unnecessary elements  
✅ **Professional**: Corporate layout with premium feel  
✅ **Modern**: Contemporary design that feels current  
✅ **Bright & Clean**: Light backgrounds, generous whitespace  
✅ **Trustworthy**: Professional imagery placeholders and authoritative tone  
✅ **Conversion Optimized**: Prominent CTAs throughout  
✅ **Fast Loading**: Optimized CSS and minimal dependencies  

## 📱 Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization Guide

### Colors
Edit CSS variables in `css/styles.css` (top of file):
```css
:root {
  --primary: #0F172B;
  --secondary: #0B6BA2;
  --accent: #FFC72C;
  /* ... other colors */
}
```

### Fonts
Google Fonts are imported automatically:
- Manrope for headings
- Inter for body text

### Images
Replace placeholders:
- `.image-placeholder` divs with actual `<img>` tags
- Update paths in `src` attributes

### Content
All content is editable directly in HTML files. No backend required.

## 🚀 Getting Started

1. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No server or build process required

2. **Local Testing**
   - Use a local server (Python: `python -m http.server` or VS Code Live Server)
   - Or open HTML files directly (some features like forms may be limited)

3. **Deployment**
   - Upload all files to your web hosting
   - Maintain folder structure
   - Ensure all paths are correct (relative paths used)

## 📋 Next Steps

1. **Replace Placeholders**
   - Add real business images
   - Update team member names and details
   - Add actual client testimonials

2. **Connect Backend**
   - Form submissions (currently console logs)
   - Blog articles (currently static)
   - Contact form integration

3. **SEO Optimization**
   - Add meta descriptions for each page
   - Implement Open Graph tags
   - Add structured data
   - Create sitemap.xml

4. **Analytics**
   - Add Google Analytics
   - Track form submissions
   - Monitor page performance

5. **Additional Pages**
   - Individual blog post templates
   - Individual case study pages
   - Privacy Policy & Terms of Service
   - Contact page with map

## 🎓 Code Quality

- **Semantic HTML5** for accessibility
- **CSS Grid & Flexbox** for modern layouts
- **CSS Variables** for easy theming
- **Vanilla JavaScript** (no dependencies)
- **Mobile-first** responsive design
- **Progressive Enhancement** approach

## 📞 Support & Contact

For support and inquiries:
- Phone: 071 303 0123
- Email: info@godayanabusiness.lk
- Address: 136/3 Piliyandala Road, Maharagama, Sri Lanka

---

**Created**: 2026 | **Version**: 1.0 | **Status**: Production Ready
