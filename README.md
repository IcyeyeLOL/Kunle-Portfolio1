# Kunle Ajani - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer. Built with Next.js 14, featuring smooth animations, clean design, and a professional layout optimized for both desktop and mobile devices.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Smooth Animations**: Interactive elements powered by Motion library
- **Contact Form**: Integrated Web3Forms for seamless communication
- **Project Showcase**: Interactive portfolio section with hover effects
- **Performance Optimized**: Built with Next.js for fast loading and SEO
- **Dark Mode Ready**: Theme toggle button (UI ready for implementation)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Fonts**: Google Fonts (Outfit, Ovo)
- **Deployment**: Netlify (configured)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/IcyeyeLOL/Kunle-Portfolio1.git
   cd Kunle-Portfolio1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Kunle-Portfolio1/
├── app/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   └── Work.jsx
│   ├── globals.css     # Global styles
│   ├── layout.js       # Root layout
│   └── page.js         # Main page
├── assets/             # Images and assets
├── public/             # Static files
│   ├── images/        # Project images
│   └── main-resume.pdf
└── package.json
```

## 🎨 Sections

- **Header**: Hero section with introduction and CTA buttons
- **About**: Personal information, skills, and tools
- **Services**: Services offered (Frontend, Backend, Cloud & DevOps, ML)
- **Portfolio**: Featured projects with interactive cards
- **Contact**: Contact form with Web3Forms integration
- **Footer**: Social links and copyright information

## 🚢 Deployment

The project is configured for static export and can be deployed to:

- **Netlify**: Already configured with `netlify.toml`
- **Vercel**: Compatible with Next.js deployment
- **GitHub Pages**: After running `npm run export`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## 📝 Configuration

### Contact Form

The contact form uses Web3Forms. To configure:
1. Get your access key from [Web3Forms](https://web3forms.com)
2. Update the access key in `app/components/Contact.jsx`

### Customization

- **Colors**: Modify gradient colors in component files
- **Content**: Update data in `assets/assets.js`
- **Images**: Replace images in `assets/` and `public/images/`
- **Resume**: Replace `public/main-resume.pdf` with your resume

## 🎯 Key Features

- ✨ Smooth scroll animations
- 🎭 Interactive hover effects
- 📱 Mobile-responsive design
- ⚡ Fast page loads
- 🎨 Modern gradient design
- 🔄 Auto-reload on code changes

## 📧 Contact

- **Email**: lime17451@gmail.com
- **GitHub**: [@IcyeyeLOL](https://github.com/IcyeyeLOL)
- **LinkedIn**: [Olakunle Ajani](https://www.linkedin.com/in/olakunleajani/)
- **LeetCode**: [Olakunle-Ajani](https://leetcode.com/u/Olakunle-Ajani/)

## 📄 License

© 2025 Kunle Ajani. All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animations by [Motion](https://motion.dev)
- Icons and assets from various sources

---

**Note**: This is a personal portfolio project. Feel free to fork and customize for your own use!
