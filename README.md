# AI Researcher Portfolio Website

A modern, responsive portfolio website for **Akshaan Bandara** - AI Researcher & Machine Learning Specialist.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Mobile hamburger menu
  - Scroll-triggered animations
  - Contact form with validation
  - Social media links
- **Sections Included**:
  - Hero section with call-to-action buttons
  - About section with expertise areas
  - Research interests showcase
  - Publications list
  - Featured projects portfolio
  - Contact form and information

## File Structure

```
AkshaanB/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript interactivity
└── README.md           # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit `index.html` to update personal information
3. **Modify styling**: Edit `styles.css` to change colors, fonts, or layout
4. **Add functionality**: Modify `script.js` for additional interactive features

## Customization Guide

### Update Personal Information

In `index.html`, update the following sections:

- **Name and Title**: Lines 31-32 (hero section)
- **About Text**: Lines 55-56
- **Research Interests**: Lines 96-127
- **Publications**: Lines 138-176
- **Projects**: Lines 187-230
- **Contact Info**: Lines 245-261

### Change Color Scheme

In `styles.css`, modify the CSS variables at the top:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Secondary brand color */
    --accent-color: #3b82f6;       /* Accent color */
    /* ... other colors */
}
```

### Add Social Media Links

Update the social media links in `index.html`:

- Hero section (lines 37-42)
- Footer section (lines 273-276)

Replace `#` with your actual profile URLs:
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Google Scholar: `https://scholar.google.com/citations?user=YOUR_ID`
- GitHub: `https://github.com/yourusername`
- ResearchGate: `https://researchgate.net/profile/Your_Profile`

### Configure Contact Form

The contact form currently uses JavaScript to handle submissions locally. To connect it to a backend:

1. Edit `script.js` (line 68-87)
2. Replace the console.log with an API call to your backend
3. Or integrate with services like Formspree, EmailJS, or Netlify Forms

Example with EmailJS:
```javascript
emailjs.send("service_id", "template_id", formData)
    .then(() => alert("Message sent successfully!"));
```

## Deployment Options

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify
1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. Instant deployment with custom domain support

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome**: Icon library

## Performance Features

- Optimized CSS animations
- Lazy loading for scroll animations
- Minimal dependencies
- Fast load times

## Accessibility

- Semantic HTML elements
- ARIA labels for icons
- Keyboard navigation support
- Color contrast compliance

## Future Enhancements

Consider adding:
- Blog section for research articles
- Dark mode toggle
- Multi-language support
- Backend integration for contact form
- Google Analytics or privacy-friendly analytics
- PDF CV download button
- Research timeline visualization

## Contact

**Akshaan Bandara**
- Email: akshaanbandara@gmail.com
- Phone: +94 77 050 2135

## License

This portfolio website is free to use and modify for personal use.

---

Built with attention to detail and modern web standards.
