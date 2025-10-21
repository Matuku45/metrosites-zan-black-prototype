# metrosites-zan-black-prototype


Zan Black Wedding & Matric Dance Styling – Website Prototype
Project Overview

The Zan Black Dance Styling Website Prototype is a front-end web project designed to showcase professional styling services for weddings and matric dances. The goal is to create a modern, elegant, and user-friendly website that allows visitors to:

Explore styling packages.

View a portfolio/gallery of past work.

Book appointments through an easy-to-use booking form.

Learn about the brand’s story and mission.

The prototype is fully responsive, designed for desktop, tablet, and mobile, and serves as a front-end presentation before backend integration.

Key Objectives

Showcase styling packages for weddings and matric dances.

Provide an interactive portfolio/gallery of past work.

Offer an easy-to-use booking form with clear call-to-actions (CTAs).

Present the story and mission behind Zan Black Dance Styling.

Ensure a fully responsive layout for all devices.

Tech Stack
Category	Tools / Libraries
Frontend Framework	React JS (Vite + TypeScript)
Styling	Tailwind CSS, Daisy UI, CSS Variables (OKLCH Colors)
UI Components	shadcn/ui, Daisy UI, Lucide Icons
Animations	Framer Motion
Routing	React Router DOM
Version Control	Git & GitHub
Design Mockups	Figma / Adobe XD
Hosting / Deployment	Vercel, Netlify
Utilities	Helper functions, constants, reusable hooks

Primary Colors:

Main: oklch(88.2% 0.059 254.128)

Secondary: oklch(80.9% 0.105 251.813)

Accent: from-pink-400 to-purple-500 (for buttons and CTAs)

Languages Used:

TypeScript / JavaScript

HTML5

CSS3 / Tailwind CSS

Repository Information
Field	Details
Project Name	Zan Black Wedding & Matric Dance Styling – Website Prototype
Repository Name	metrosites-zan-black-prototype
Repository Status	Active / In Development
Version Control	Git & GitHub
Branching Strategy	main for stable, dev for development
Demo / Hosting	Vercel / Netlify
Project Folder Structure
metrosites-zan-black-prototype/
│
├── public/                       # Static files (logos, images, favicon)
│   └── images/
│
├── src/
│   ├── assets/                    # Custom visuals, portfolio images
│   │   └── portfolio/
│   ├── components/                # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PortfolioCard.tsx
│   │   ├── BookingForm.tsx
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   │
│   ├── pages/                     # Main pages
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Booking.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   │
│   ├── routes/                    # React Router configuration
│   │   └── AppRoutes.tsx
│   │
│   ├── styles/                    # Tailwind overrides / global CSS
│   │   └── globals.css
│   │
│   ├── utils/                     # Helper functions/constants
│   │   └── colors.ts
│   │
│   ├── App.tsx                    # Main App component
│   └── main.tsx                   # Root render
│
├── package.json                   # Project dependencies
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite build configuration
└── README.md                      # Project documentation

Component Architecture
Component	Description
Navbar	Top navigation linking Home, Services, Portfolio, Booking, About. Fully responsive with hamburger menu for mobile.
Hero	Intro section with tagline, hero image/video, and CTA button.
ServiceCard	Modular card displaying wedding/matric styling packages and prices.
PortfolioCard	Image gallery blocks with hover animations.
BookingForm	Form for online bookings: name, contact info, service selection, date/time.
About	Brand story, mission, stylist team details.
Footer	Contact info, social links, copyright.
Button	Reusable animated button with gradient and Daisy UI styling.
Page Flow

Home – Hero section + services overview + portfolio preview + CTA.

Services / Packages – Detailed package listings for weddings & matric dances.

Portfolio – Image gallery with hover effects and modal preview.

Booking – Booking form with validation and submission CTA.

About – Story and stylist team.

Contact – Contact form and location map.


![Uploading image.png…]()



