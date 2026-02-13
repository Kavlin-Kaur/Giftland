# TriJas - Premium Fashion E-commerce Homepage

A luxury shawl and scarf e-commerce homepage built with React and Tailwind CSS.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar with mobile menu
│   ├── Hero.jsx             # Full-width hero section with CTA
│   ├── FeaturedCategories.jsx  # 3-column category grid
│   ├── BestSellers.jsx       # 4-column product grid
│   ├── WhyChooseTriJas.jsx   # 3-feature benefits section
│   └── Footer.jsx            # Footer with links and social media
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
├── index.css                # Tailwind CSS + custom styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## Brand Identity

**TriJas** stands for Tradition, Texture, and Timeless Elegance

- **Color Palette**: Soft beige (#F5EFE6), muted brown (#A67B5B), dark text (#2C2C2C)
- **Typography**: Serif headers (Playfair Display), sans-serif body (Poppins)
- **Aesthetic**: Premium, minimal, elegant, with ample white space

## Features

✨ **Fully Responsive Design** - Mobile-first approach with breakpoints for all devices

🎨 **Premium UI/UX** - Clean layouts, smooth animations, subtle shadows

📱 **Mobile-Optimized** - Hamburger menu, touch-friendly buttons

🎭 **Component-Based** - Modular, reusable React components

🎪 **No External UI Libraries** - Built entirely with Tailwind CSS

🖼️ **Beautiful Imagery** - Placeholder images from Unsplash

## Getting Started

### Prerequisites
- Node.js 14+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will run on `http://localhost:5173`

## Components Overview

### Navbar
- Sticky navigation bar with logo
- Desktop and mobile menu options
- Shopping cart icon with badge
- Smooth transitions and hover effects

### Hero Section
- Full-width background image with overlay
- Large, bold heading
- Supporting subtext and CTA button
- Smooth scroll indicator animation

### Featured Categories
- 3-column responsive grid
- Overlay hover effects
- Zoom animation on hover
- Category cards with consistent styling

### Best Sellers
- 4-column responsive product grid
- Product image, name, price
- Add to Cart button
- Hover lift effect with shadow

### Why Choose TriJas
- 3-feature benefits section
- Icon + title + description layout
- Centered, minimal design
- Perfect for highlighting value proposition

### Footer
- 4-column information layout
- Company, shop, and support links
- Social media icons
- Copyright and legal links

## Customization

### Colors
Edit `tailwind.config.js` to change the color palette:
```javascript
colors: {
  primary: '#A67B5B',
  'bg-light': '#F5EFE6',
  'text-dark': '#2C2C2C',
}
```

### Images
Replace Unsplash URLs in components with your own product images:
```javascript
backgroundImage: 'url(your-image-url)'
```

### Content
Update text, headings, and descriptions directly in each component file.

## Typography

- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)
- Google Fonts automatically imported in `index.html`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images using Unsplash CDN
- Minimal CSS with Tailwind's PurgeCSS
- Smooth animations using CSS transforms
- Fast build times with Vite

## Future Enhancements

- Add shopping cart functionality
- Implement product filtering
- Connect to backend API
- Add user authentication
- Implement wishlist feature
- Add product reviews and ratings
- Integrate payment gateway

## License

ISC License

## Author

Created with ❤️ for TriJas
