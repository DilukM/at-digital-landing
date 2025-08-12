# AT Digital - Landing Page

A modern, responsive landing page for AT Digital, a digital marketing and web development agency. This project demonstrates proficiency in React development, responsive design, and modern web development practices.

## 🚀 Live Demo

Visit the live application: [AT Digital Landing Page](https://atdigital-landingpage.netlify.app/) 


### Key Features

- ✅ **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✅ **Modern React Architecture** - Built with React 19 and functional components
- ✅ **Client-Side Routing** - Multi-page navigation using React Router
- ✅ **Mobile-First Approach** - Optimized for mobile devices with progressive enhancement
- ✅ **Component-Based Architecture** - Reusable and maintainable code structure
- ✅ **Custom Styling** - Tailwind CSS for rapid and consistent styling


## 🛠️ Technologies Used

### Frontend Framework & Libraries

- **React** (v19.1.1) - Modern JavaScript library for building user interfaces
- **React Router DOM** (v7.8.0) - Declarative routing for React applications
- **React DOM** (v19.1.1) - React package for DOM manipulation

### Styling & Design

- **Tailwind CSS** (v4.1.11) - Utility-first CSS framework
- **Custom CSS** - Additional styling for specific components
- **Responsive Design** - Mobile-first approach with breakpoint system

### Build Tools & Development

- **Vite** (v7.1.2) - Next-generation frontend build tool
- **Vite React Plugin** - Official Vite plugin for React
- **ESLint** (v9.33.0) - JavaScript linting utility
- **Hot Module Replacement** - Fast development with instant updates

### Development Environment

- **Node.js** - JavaScript runtime environment
- **npm** - Package manager
- **ES6+ JavaScript** - Modern JavaScript features
- **JSX** - JavaScript XML for React components

## 📁 Project Structure

```
landing-page/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                    # Images, icons, and static files
│   │   ├── computer.svg
│   │   ├── Footer.png
│   │   ├── hero-cover.png
│   │   ├── logo.svg
│   │   ├── magnifier.svg
│   │   └── react.svg
│   ├── features/                  # Feature-based organization
│   │   ├── about/
│   │   │   └── pages/
│   │   │       └── AboutPage.jsx
│   │   ├── careers/
│   │   │   └── pages/
│   │   │       └── CareersPage.jsx
│   │   ├── contact/
│   │   │   └── pages/
│   │   │       └── ContactPage.jsx
│   │   ├── landing/
│   │   │   ├── components/
│   │   │   │   ├── Banner.jsx
│   │   │   │   ├── FaqItem.jsx
│   │   │   │   └── ServiceCard.jsx
│   │   │   └── pages/
│   │   │       └── LandingPage.jsx
│   │   ├── privacy/
│   │   │   └── pages/
│   │   │       └── PrivacyPage.jsx
│   │   ├── services/
│   │   │   └── pages/
│   │   │       └── ServicesPage.jsx
│   │   └── terms/
│   │       └── pages/
│   │           └── TermsPage.jsx
│   ├── shared/                    # Shared/reusable components
│   │   └── components/
│   │       ├── Button.jsx
│   │       ├── Footer.jsx
│   │       ├── Navbar.jsx
│   │       └── ServiceCard.jsx
│   ├── App.jsx                    # Main application component
│   ├── index.css                  # Global styles and Tailwind imports
│   └── main.jsx                   # Application entry point
├── index.html                     # HTML template
├── package.json                   # Project dependencies and scripts
├── vite.config.js                 # Vite configuration
├── eslint.config.js              # ESLint configuration
└── README.md                      # Project documentation
```

## 🔧 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v20.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0.0 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/DilukM/at-digital-landing.git
   cd at-digital-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application will automatically reload when you make changes

## 📜 Available Scripts

- **`npm run dev`** - Starts the development server with hot reload
- **`npm run build`** - Creates an optimized production build
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 🎯 What I've Accomplished

### 1. **Responsive Design Implementation**

- Created a mobile-first responsive design that works flawlessly across all device sizes
- Implemented custom breakpoints for desktop (1440px), tablet (768px), and mobile (375px)
- Ensured horizontal scrolling issues are eliminated on mobile devices
- Optimized layouts for different screen orientations

### 2. **Component Architecture**

- Built reusable React components following best practices
- Implemented proper component composition and props handling
- Created a modular folder structure for better maintainability
- Separated concerns between shared and feature-specific components

### 3. **Navigation & Routing**

- Implemented client-side routing with React Router DOM
- Created a responsive navigation bar with mobile hamburger menu
- Added smooth transitions and hover effects
- Built dedicated pages for all major sections (Services, About, Contact, Careers, Privacy, Terms)


## 📱 Responsive Breakpoints

- **Mobile**: 375px and below
- **Tablet**: 768px
- **Desktop**: 1200px and above
- **Large Desktop**: 1440px and above

## 🌟 Key Highlights

1. **Professional Code Structure** - Well-organized, maintainable codebase
2. **Modern Development Practices** - Latest React patterns and hooks
3. **Performance Focused** - Optimized for speed and user experience
4. **Accessibility Compliant** - Proper ARIA labels and semantic HTML
5. **Mobile-First Design** - Optimized for mobile users first
6. **Scalable Architecture** - Easy to extend and maintain


_This project was developed as part of a technical assessment to demonstrate proficiency in modern React development, responsive design, and best practices in frontend development._
