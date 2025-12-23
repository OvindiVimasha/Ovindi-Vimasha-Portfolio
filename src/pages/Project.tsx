import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import netflixHome from "@/assets/netflix-clone/Home.png";
import netflixMovieCards from "@/assets/netflix-clone/Movie cards.png";
import netflixTvShows from "@/assets/netflix-clone/tvshow.png";
import netflixTvShowsList from "@/assets/netflix-clone/tvshoes list.png";
import projectNaturalHair from "@/assets/project-natural-hair.jpg";
import projectWhatsapp from "@/assets/project-whatsapp.jpg";
import projectBabyShoes from "@/assets/project-baby-shoes.jpg";
import projectDonation from "@/assets/project-donation.jpg";
import agencyThumbnail from "@/assets/agency/thumbnail.png";
import agencyFullpage from "@/assets/agency/fullpage.png";
import airportHome from "@/assets/airport-restaurant/restauranthome.jpeg";
import airportList from "@/assets/airport-restaurant/restaurant list.jpeg";
import airportMenu from "@/assets/airport-restaurant/menu.jpeg";
import airportReservation from "@/assets/airport-restaurant/reservation form.jpeg";
import airportCart from "@/assets/airport-restaurant/Shopping cart.jpeg";
import cookieThumbnail from "@/assets/cookie website/thumbnail.png";
import cookieLanding from "@/assets/cookie website/Landing Page.png";
import cookieMockup from "@/assets/cookie website/Presently  MacBook.png";
import cookiePalette from "@/assets/cookie website/color palette.png";
import cookieStyled from "@/assets/cookie website/styled pages.png";
import cookieViewMore from "@/assets/cookie website/Cookie View More.png";
import cookieCheckout from "@/assets/cookie website/Checkout.png";
import iceCreamThumbnail from "@/assets/ice cream/thumbnail.png";
import iceCreamLanding from "@/assets/ice cream/landing page.png";
import iceCreamMacbook from "@/assets/ice cream/MacBook.png";
import iceCreamPalette from "@/assets/ice cream/Color palette.png";
import iceCreamStyled from "@/assets/ice cream/styled.png";
import { IconType } from "react-icons";
import { SiReact, SiVite, SiJavascript, SiCss3, SiHtml5, SiThemoviedatabase, SiGit, SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiGooglemaps, SiFigma, SiAdobeillustrator, SiStripe, SiMongodb as SiDatabase } from "react-icons/si";
import { FaMobileAlt, FaPuzzlePiece } from "react-icons/fa";

const projectsData = {
  "netflix-clone": {
    tag: "Frontend Development",
    title: "Netflix Clone: Modern Streaming Platform Interface",
    description: "A fully responsive Netflix UI clone built with React and Vite, featuring dynamic movie browsing, advanced filtering, search functionality, and smooth navigation with modern layouts.",
    image: netflixHome,
    overview: "A comprehensive frontend implementation of Netflix's streaming platform interface, replicating the core user experience of browsing, searching, and discovering movies and TV shows with modern web technologies.",
    isSimplified: true,
    technologies: ["React", "Vite", "JavaScript", "TMDB API", "Git"],
    features: [
      "Responsive Netflix UI clone with pixel-perfect design",
      "Dynamic movie and TV show browsing with TMDB API integration",
      "Advanced filtering system by genre, rating, and release date",
      "Real-time search functionality with debouncing",
      "Component-based architecture for modularity",
      "Smooth animations and interactive hover effects",
      "Mobile-first responsive design",
      "Custom hooks for state management",
      "Lazy loading and code splitting for performance",
      "Modern layouts with CSS Grid and Flexbox"
    ],
    screenshots: [
      { image: netflixHome, caption: "Home page with hero banner and trending content" },
      { image: netflixMovieCards, caption: "Movie cards with hover effects and details" },
      { image: netflixTvShows, caption: "TV shows section with category organization" },
      { image: netflixTvShowsList, caption: "TV shows list view with filtering options" }
    ],
    githubLink: "https://github.com/OvindiVimasha/netflix-clone-project",
    liveLink: ""
  },
  "natural-hair-app": {
    tag: "End-to-End Application",
    title: "Empowering Natural Hair Journeys with a Personalised Diary App",
    description: "Creating a Natural Hair app that helps users document, manage, track, and celebrate their natural hair journey.",
    image: projectNaturalHair,
    overview: "This project addresses the challenges faced by individuals with natural hair in tracking their hair care routines, products, and growth progress. The app provides a personalized diary experience that celebrates the natural hair journey.",
    role: "UX/UI Designer",
    duration: "8 weeks",
    tools: ["Figma", "Adobe Illustrator", "Maze"],
    challenge: "Many people with natural hair struggle to keep track of their hair care routines, the products they use, and how their hair responds to different treatments. There was a need for a dedicated platform that combines journaling, product tracking, and community support.",
    solution: "I designed a comprehensive mobile application that allows users to document their daily hair routines, track product usage and effectiveness, monitor hair growth with photo comparisons, and connect with a community of like-minded individuals.",
    process: [
      {
        title: "Research",
        content: "Conducted user interviews and surveys to understand the pain points and needs of people with natural hair. Analyzed competitor apps and identified gaps in the market."
      },
      {
        title: "Define",
        content: "Created user personas and journey maps based on research findings. Defined key features and prioritized them based on user needs and business goals."
      },
      {
        title: "Ideate & Design",
        content: "Developed wireframes and interactive prototypes. Created a warm, inviting visual design that celebrates natural hair diversity."
      },
      {
        title: "Test & Iterate",
        content: "Conducted usability testing with target users and iterated on the design based on feedback. Refined the user flow and interface elements."
      }
    ]
  },
  "whatsapp-scheduling": {
    tag: "Adding a Feature to an Application",
    title: "Adding a Message Scheduling Feature to WhatsApp Messenger",
    description: "This feature will enable users to schedule messages to be sent at a later time or date, providing more flexibility and convenience in communication.",
    image: projectWhatsapp,
    overview: "This conceptual project explores how WhatsApp could implement a message scheduling feature to enhance user communication flexibility.",
    role: "UX/UI Designer",
    duration: "4 weeks",
    tools: ["Figma", "Principle"],
    challenge: "WhatsApp users often need to send messages at specific times but the current interface doesn't support this functionality. Users resort to third-party apps or setting personal reminders.",
    solution: "Designed a seamless integration of scheduling functionality within the existing WhatsApp interface, maintaining the familiar user experience while adding powerful new capabilities.",
    process: [
      {
        title: "Research",
        content: "Analyzed existing scheduling features in other messaging apps and identified best practices. Surveyed WhatsApp users to understand their scheduling needs."
      },
      {
        title: "Design",
        content: "Created multiple design concepts that integrate naturally with WhatsApp's existing UI. Focused on discoverability and ease of use."
      },
      {
        title: "Prototype",
        content: "Built interactive prototypes to demonstrate the scheduling flow. Tested different interaction patterns for setting date and time."
      },
      {
        title: "Validate",
        content: "Conducted usability tests to ensure the feature was intuitive and didn't disrupt the core messaging experience."
      }
    ]
  },
  "oratile-kids": {
    tag: "Frontend Development",
    title: "Building an Online Presence for a Local Baby Shoe Brand",
    description: "Developing a responsive eCommerce website with Next.js and Stripe integration that enables Oratile Kids to reach customers directly and manage their online store.",
    image: projectBabyShoes,
    overview: "Oratile Kids is a local baby shoe brand that needed an online presence to expand their reach beyond local markets. I built a full-featured eCommerce website using modern web technologies to provide customers with a seamless shopping experience.",
    role: "Frontend Developer",
    duration: "6 weeks",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Figma"],
    challenge: "The brand was only selling through local markets and social media, limiting their reach and making inventory management difficult. They needed a professional online store with secure payment processing, responsive design, and optimal performance.",
    solution: "Built a performant, SEO-optimized eCommerce platform using Next.js with server-side rendering, integrated Stripe for secure payments, and implemented a responsive design system that works seamlessly across all devices.",
    process: [
      {
        title: "Planning & Architecture",
        content: "Analyzed requirements and planned the component architecture. Set up Next.js project with TypeScript, configured Tailwind CSS, and established the folder structure for scalability."
      },
      {
        title: "Component Development",
        content: "Built reusable React components including product cards, shopping cart, checkout flow, and admin dashboard. Implemented responsive layouts using Tailwind CSS and ensured cross-browser compatibility."
      },
      {
        title: "API Integration",
        content: "Integrated Stripe payment gateway for secure transactions. Implemented product filtering, search functionality, and image optimization using Next.js Image component for fast loading times."
      },
      {
        title: "Testing & Deployment",
        content: "Conducted thorough testing across devices and browsers. Optimized performance achieving 95+ Lighthouse scores. Deployed to Vercel with automatic CI/CD pipeline."
      }
    ],
    technicalImplementation: {
      title: "Technical Implementation",
      features: [
        "Server-side rendering with Next.js for optimal SEO and performance",
        "Product catalog with filtering, sorting, and search functionality",
        "Shopping cart with local storage persistence",
        "Stripe checkout integration for secure payment processing",
        "Responsive image optimization with Next.js Image component",
        "Mobile-first responsive design using Tailwind CSS",
        "Form validation and error handling",
        "Loading states and skeleton screens for better UX"
      ]
    },
    githubLink: "https://github.com/yourusername/oratile-kids",
    liveLink: "https://oratile-kids.vercel.app"
  },
  "donation-platform": {
    tag: "Frontend Development",
    title: "Declutter with Purpose: Sustainable Giving Through a Responsive Donation Platform",
    description: "A full-stack web application built with React and Firebase enabling community sharing of pre-loved goods for a more sustainable, connected society.",
    image: projectDonation,
    overview: "This platform connects people who want to donate pre-loved items with individuals and organizations who need them. I developed the entire frontend using React and integrated Firebase for real-time data synchronization, authentication, and cloud storage.",
    role: "Frontend Developer",
    duration: "10 weeks",
    tools: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Google Maps API", "Figma"],
    challenge: "Building a trustworthy platform that handles real-time listings, user authentication, image uploads, and location-based search while maintaining excellent performance and user experience across all devices.",
    solution: "Developed a responsive React application with Firebase backend integration, implementing real-time updates, secure authentication, cloud storage for images, and geolocation-based search to connect donors with recipients efficiently.",
    process: [
      {
        title: "Setup & Architecture",
        content: "Initialized React project with TypeScript and Tailwind CSS. Configured Firebase for authentication, Firestore database, and Storage. Designed the component hierarchy and state management strategy."
      },
      {
        title: "Core Features Development",
        content: "Built authentication flows (Google, Email/Password), listing creation with image upload, real-time feed of available items, and user profiles. Implemented responsive layouts and dark mode support."
      },
      {
        title: "Advanced Features",
        content: "Integrated Google Maps API for location-based search and filtering. Added real-time notifications, favorites system, and messaging between donors and recipients. Implemented form validation and error handling."
      },
      {
        title: "Optimization & Launch",
        content: "Optimized bundle size with code splitting and lazy loading. Implemented image compression and lazy loading. Added accessibility features (ARIA labels, keyboard navigation). Deployed to Firebase Hosting."
      }
    ],
    technicalImplementation: {
      title: "Technical Implementation",
      features: [
        "Firebase Authentication with Google and Email/Password providers",
        "Real-time database updates using Firestore listeners",
        "Image upload and compression with Firebase Storage",
        "Geolocation-based search and filtering with Google Maps API",
        "Responsive grid layouts with Tailwind CSS",
        "Form validation using React Hook Form and Zod",
        "Real-time notifications and messaging system",
        "Optimistic UI updates for better perceived performance",
        "Code splitting and lazy loading for optimal bundle size",
        "WCAG 2.1 AA accessibility compliance"
      ]
    },
    githubLink: "https://github.com/yourusername/donation-platform",
    liveLink: "https://donation-platform.web.app"
  },
  "agency-website": {
    tag: "Frontend Development",
    title: "Modern Digital Agency: High-Performance Corporate Identity",
    description: "A premium, pixel-perfect agency website featuring advanced animations, modern layout patterns, and a comprehensive responsive design that communicates professional excellence.",
    image: agencyThumbnail,
    overview: "This project represents the pinnacle of modern frontend development for corporate identities. It translates a sophisticated design into a high-performance, responsive website that serves as a powerful digital storefront for a creative agency. The focus is on user engagement through subtle animations, clean typography, and a seamless navigational flow.",
    isSimplified: true,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Figma"],
    features: [
      "Immersive hero section with dynamic visual impact",
      "Responsive grid layouts for service showcases",
      "Interactive portfolio gallery with hover states",
      "Smooth scroll navigation and transition effects",
      "Mobile-optimized performance and layout",
      "Semantic HTML5 structure for SEO",
      "Custom component library for consistent branding",
      "Integration of modern typography and iconography"
    ],
    showFullPageScroll: true,
    screenshots: [
      { image: agencyFullpage, caption: "Full landing page design showcasing the cohesive visual identity and section layouts" }
    ],
    githubLink: "https://github.com/OvindiVimasha/agency-website",
    liveLink: ""
  },
  "airport-platform": {
    tag: "MERN Stack Application",
    title: "AeroX: Airport Restaurant Reservation & Pre-order System",
    description: "Designed and implemented the restaurant reservation module for AeroX, an integrated airport services platform, enabling real-time booking and meal pre-ordering for travelers.",
    image: airportHome,
    overview: "AeroX is a comprehensive integrated Smart Airport Platform designed to centralize traveler services. As a key backend and frontend developer, I architected and implemented the Restaurant Reservation & Pre-order Module. This critical component allows travelers to browse airport dining options, book tables in real-time, and pre-order meals to minimize wait times, contributing to a seamless airport experience.",
    isSimplified: true,
    technologies: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    features: [
      "Advanced restaurant reservation system with real-time availability",
      "Digital menu browsing with detailed ingredient information",
      "Pre-order functionality to schedule meals for specific times",
      "Secure payment processing for reservations and orders",
      "User profile management for dining history and preferences",
      "Admin dashboard for restaurant staff to manage orders and bookings",
      "Respondent design optimized for travelers on mobile devices",
      "Authentication for secure user access"
    ],
    screenshots: [
      { image: airportHome, caption: "Main dashboard providing quick access to all airport services" },
      { image: airportList, caption: "Browsing available airport restaurants and dining options" },
      { image: airportMenu, caption: "Detailed menu view with pre-order capabilities" },
      { image: airportReservation, caption: "Table reservation interface for airport dining" },
      { image: airportCart, caption: "Shopping cart for pre-orders and duty-free items" }
    ],
    githubLink: "https://github.com/", // Placeholder
    liveLink: ""
  },
  "crumble-magic": {
    tag: "UX/UI Design",
    title: "CrumbleMagic: Delightful Digital E-Commerce Experience",
    description: "A whimsical and engaging user interface design for a premium cookie brand, focusing on sensory appeal, playful interactions, and a seamless checkout journey.",
    image: cookieThumbnail,
    overview: [
      "The challenge was simple yet profound: how do you digitize the smell of fresh-baked cookies? CrumbleMagic isn't just a website; it's a sensory exploration designed to trigger the same dopamine response as walking into a warm bakery. My goal was to move beyond standard e-commerce patterns and create a digital environment that feels sticky, sweet, and impossible to resist.",
      "I anchored the visual identity in 'Sensory Design'. Using a palette of warm caramels, deep chocolates, and buttery creams, I successfully evoked taste and texture through color alone. The typography is playful and rounded, mimicking the soft edges of a perfectly baked treat, while high-fidelity macro photography serves as the hero, allowing users to almost taste the chocolate chips through the screen.",
      "The user journey was crafted as a seamless narrative. From the 'Build Your Box' feature—which gamifies the purchasing process—to the frictionless checkout, every interaction is designed to be delightful. Micro-interactions play a huge role here; buttons that squish like dough when clicked and smooth, syrupy transitions keep the user engaged and smiling throughout their shopping trip.",
      "Ultimately, CrumbleMagic stands as a testament to the power of UI/UX in brand storytelling. It proves that a website shouldn't just be a place to buy things—it should be a place to feel things."
    ],
    isSimplified: true,
    displayStyle: "mixed",
    technologies: ["Figma", "Adobe Illustrator", "Prototyping", "Wireframing", "User Research"],
    features: [
      "Immersive visual storytelling with high-quality product photography",
      "Sensory-focused color palette evoking warmth and sweetness",
      "Playful and interactive user interface elements",
      "Seamless 'Build Your Box' custom ordering flow",
      "Clean and intuitive checkout process",
      "Custom iconography and typography selection",
      "Emphasis on micro-interactions to delight users"
    ],
    screenshots: [
      { image: cookieMockup, caption: "High-fidelity MacBook mockup showcasing the immersive hero section" },
      { image: cookieCheckout, caption: "Streamlined checkout flow designed for conversion and user ease" },
      { image: cookieLanding, caption: "Full landing page design featuring dynamic scroll interactions" },
      { image: cookieViewMore, caption: "Detailed product view with interactive ingredient highlights" }
    ],
    blogContent: [
      {
        image: cookieStyled,
        title: "A Design System Built for Delight",
        text: "Consistency is satisfied appetite. I created a comprehensive design system where every page—from the 404 error to the user profile—adheres to a strict, whimsical visual language. Soft shadows, rounded corners, and generous whitespace ensure the content breathes, making the browsing experience feel as light and airy as a soufflé.",
        reverse: false
      },
      {
        image: cookiePalette,
        title: "Warmth in Every Pixel",
        text: "A warm color palette, aesthetic illustrations, smooth spacing, and responsive layouts bring the design to life across desktop and mobile. The overall goal is to make cookie shopping feel as joyful and satisfying as eating them. We moved away from clinical whites to warm creams and rich chocolates to trigger sensory engagement.",
        reverse: true
      }
    ],
    figmaLink: "https://www.figma.com/design/EcQF3APhxuUot0RTaaZDnG/Cookie-Website?node-id=0-1&t=IwC9CYm1mbummdbh-1",
    githubLink: "",
    liveLink: ""
  },
  "ice-cream": {
    tag: "UX/UI Design",
    title: "FrostyScoops: Vibrant Ice Cream Brand Experience",
    description: "A fun, colorful, and sensory-driven digital experience for a premium ice cream brand, designed to evoke joy and summer vibes. The interface prioritizes visual appetite appeal with a responsive, mobile-first design system.",
    image: iceCreamThumbnail,
    overview: [
      "For this project, I aimed to capture the pure joy of summer. The design language focuses on high-energy visuals, fluid shapes, and a palette that screams 'refreshment'.",
      "Functionally, the goal was to create a landing page that converts visitors into customers through storytelling. The layout uses large, appetizing imagery paired with punchy, playful typography to guide the user down the page.",
      "The site is fully responsive, ensuring that the visual impact remains consistent whether viewed on a desktop monitor or a mobile device—solving a key user pain point found in competitor analysis."
    ],
    isSimplified: true,
    displayStyle: "mixed",
    technologies: ["Figma", "Adobe Illustrator", "Prototyping", "Wireframing"],
    features: [
      "Vibrant, appetite-appealing visual design",
      "Mobile-responsive grid system",
      "Custom illustration and iconography",
      "Playful typography hierarchy",
      "Engagement-driven user flow"
    ],
    screenshots: [
      { image: iceCreamLanding, caption: "Full vertical landing page design with vibrant sections" }
    ],
    blogContent: [
      {
        image: iceCreamMacbook,
        title: "Refreshing Visual Identity",
        text: "The visual style combines modern, clean layouts with playful elements. The interactions are designed to feel light and airy, mirroring the product itself. Every component, from buttons to cards, was crafted to contribute to a cohesive, joyful brand story.",
        reverse: false
      },
      {
        image: iceCreamPalette,
        title: "Summer-Inspired Palette",
        text: "The color strategy was derived from natural fruit tones and creamy textures. Bright accents draw attention to call-to-action buttons, while softer pastel backgrounds ensure the content remains readable and accessible across all devices.",
        reverse: true
      }
    ],
    figmaLink: "https://www.figma.com/design/NQf8Omysx9koOCjm8OdE8p/Ice-Cream-Website?node-id=0-1&t=muAxlBDUAlRfUjY2-1"
  },
  "ux-case-study": {
    tag: "UX Case Study",
    title: "Reimagining User Experience: A Comprehensive Case Study",
    description: "A deep dive into user-centric design, featuring empathy maps, user journeys, and code implementation.",
    image: projectNaturalHair, // Placeholder image, using an existing one for now
    overview: "This project specifically focuses on the UX research and design process, highlighting the use of empathy maps and user journeys to inform design decisions.",
    role: "UX/UI Designer & Developer",
    duration: "4 weeks",
    tools: ["Figma", "React", "Tailwind CSS"],
    challenge: "To create a user experience that not only looks good but is deeply rooted in user needs and behaviors, verified through extensive research.",
    solution: "We implemented a rigorous design process starting with empathy mapping and user journey creation, leading to a code-based prototype.",
    process: [
      {
        title: "Discovery",
        content: "Understanding the user base through initial surveys and interviews."
      },
      {
        title: "Definition",
        content: "Creating empathy maps and user journeys to define the problem space."
      },
      {
        title: "Design",
        content: "Iterative design process using Figma."
      },
      {
        title: "Development",
        content: "Translating designs into code."
      }
    ],
    empathyMaps: {
      title: "Empathy Maps",
      description: "Understanding what users say, think, do, and feel.",
      content: "We created detailed empathy maps to visualize user attitudes and behaviors. This helped us align our design strategy with user needs."
    },
    personas: {
      title: "User Personas",
      description: "Representing our target audience.",
      content: "Based on our research, we defined two primary user personas to guide our design decisions and ensure we meet specific user needs."
    },
    userJourneys: {
      title: "User Journeys",
      description: "Mapping out the user's path to achieve their goals.",
      content: "User journeys were mapped to identify pain points and opportunities for improvement throughout the application flow."
    },
    wireframes: {
      title: "Wireframes",
      description: "Low-fidelity structural design.",
      content: "We started with low-fidelity wireframes to establish the information architecture and layout without getting distracted by visual details."
    },
    visualDesign: {
      title: "Visual Design",
      description: "Creating a cohesive and engaging visual identity.",
      typography: ["Playfair Display", "Inter"],
      colors: [
        { name: "Primary", value: "#1a1a1a" },
        { name: "Secondary", value: "#f4a261" },
        { name: "Accent", value: "#e76f51" },
        { name: "Background", value: "#fafafa" }
      ]
    },
    finalScreens: {
      title: "Final Screens",
      description: "The polished user interface.",
      content: "The final high-fidelity screens bring the design system to life, focusing on usability and aesthetic appeal."
    },
    learnings: {
      title: "Learnings & Takeaways",
      content: "This project highlighted the importance of early user testing. We learned that assumptions about navigation needed to be validated, leading to a more intuitive final product."
    },
    codeLink: "https://github.com/yourusername/your-repo"
  }
};

const techIcons: Record<string, IconType> = {
  "React": SiReact,
  "Vite": SiVite,
  "JavaScript": SiJavascript,
  "CSS3": SiCss3,
  "HTML5": SiHtml5,
  "TMDB API": SiThemoviedatabase,
  "Git": SiGit,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Firebase": SiFirebase,
  "Google Maps API": SiGooglemaps,
  "Figma": SiFigma,
  "Adobe Illustrator": SiAdobeillustrator,
  "Stripe API": SiStripe,
  "Maze": FaPuzzlePiece, // SiMaze not available, using generic puzzle icon
  "Principle": FaMobileAlt, // Fallback/Approximate
  "Express.js": SiJavascript, // Express often grouped with generic JS or Node icon if specific one missing relative
  "Node.js": SiJavascript, // Using JS icon as proxy or add specific if available
  "MongoDB": SiDatabase, // Fallback or import SiMongodb
};

const techColors: Record<string, string> = {
  "React": "#61DAFB",
  "Vite": "#646CFF",
  "JavaScript": "#F7DF1E",
  "CSS3": "#1572B6",
  "HTML5": "#E34F26",
  "TMDB API": "#01B4E4",
  "Git": "#F05032",
  "TypeScript": "#3178C6",
  "Tailwind CSS": "#06B6D4",
  "Firebase": "#FFCA28",
  "Google Maps API": "#4285F4",
  "Figma": "#F24E1E",
  "Adobe Illustrator": "#FF9A00",
  "Stripe API": "#008CDD",
  "Prototyping": "#F24E1E", // Using Figma color
  "Wireframing": "#333333",
  "User Research": "#9C27B0",
  "Principle": "#5D2F8F",
  "Express.js": "#000000",
  "Node.js": "#339933",
  "MongoDB": "#47A248",
};

const Project = () => {
  const { slug } = useParams();
  const project = projectsData[slug as keyof typeof projectsData];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (project && 'screenshots' in project && project.screenshots) {
      setCurrentSlide((prev) => (prev + 1) % project.screenshots.length);
    }
  };

  const prevSlide = () => {
    if (project && 'screenshots' in project && project.screenshots) {
      setCurrentSlide((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated Gradient Blob Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div
            className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] animate-blob -top-40 -left-20 opacity-50"
            style={{
              background: `
                radial-gradient(ellipse at 30% 20%, hsl(30, 100%, 70%) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 30%, hsl(340, 80%, 65%) 0%, transparent 45%),
                radial-gradient(ellipse at 50% 60%, hsl(280, 70%, 55%) 0%, transparent 50%)
              `,
              filter: "blur(60px)",
            }}
          />
        </div>

        <Header />
        <main className="pt-32 pb-24 relative z-10">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="section-title mb-4">Project Not Found</h1>
            <Link to="/" className="btn-outline">
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Gradient Blob Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] animate-blob -top-40 -left-20 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, hsl(30, 100%, 70%) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 30%, hsl(340, 80%, 65%) 0%, transparent 45%),
              radial-gradient(ellipse at 50% 60%, hsl(280, 70%, 55%) 0%, transparent 50%)
            `,
            filter: "blur(60px)",
          }}
        />
      </div>

      <Header />
      <main className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          {/* Back Link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Hero */}
          <div className="mb-16 animate-fade-up">
            <span className="project-tag mb-6 inline-block">{project.tag}</span>
            <h1 className="section-title max-w-4xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                {project.title}
              </span>
            </h1>
            <p className="body-text max-w-2xl">{project.description}</p>
          </div>

          {/* Featured Image - Don't crop for simplified projects */}
          <div className="rounded-2xl overflow-hidden mb-16">
            <img
              src={project.image}
              alt={project.title}
              className={'isSimplified' in project && project.isSimplified
                ? "w-full h-auto object-contain"
                : "w-full aspect-video object-cover"}
            />
          </div>

          {/* Simplified Layout for Netflix Clone */}
          {'isSimplified' in project && project.isSimplified ? (
            <>
              {/* Overview */}
              <div className="mb-16">
                <h2 className="font-display text-3xl mb-6">Overview</h2>
                <p className="body-text text-lg">{project.overview}</p>
              </div>

              {/* Technologies - Hidden for CrumbleMagic (Mixed Layout) */}
              {'technologies' in project && project.technologies && !('displayStyle' in project && project.displayStyle === 'mixed') && (
                <div className="mb-16">
                  <h2 className="font-display text-3xl mb-6">Technologies Used</h2>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech) => {
                      const Icon = techIcons[tech];
                      const color = techColors[tech];
                      return (
                        <div key={tech} className="flex flex-col items-center gap-2 group">
                          <div className="p-4 bg-card border border-border rounded-xl group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                            {Icon ? (
                              <Icon className="w-8 h-8 transition-colors" style={{ color: color || 'currentColor' }} />
                            ) : (
                              <span className="text-sm font-medium">{tech}</span>
                            )}
                          </div>
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                            {tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Features */}
              {'features' in project && project.features && (
                <div className="mb-16">
                  <h2 className="font-display text-3xl mb-6">Key Features</h2>
                  <div className="bg-card p-8 rounded-2xl border border-border">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="body-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Standard Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 animate-fade-up">
                <div
                  className="lg:col-span-3 p-8 rounded-2xl border border-white/10"
                  style={{
                    backdropFilter: "blur(12px)",
                    background: "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  <h2 className="font-display text-2xl mb-4">Overview</h2>
                  <p className="body-text">{project.overview}</p>
                </div>
                <div
                  className="space-y-6 h-fit p-6 rounded-2xl border border-white/10"
                  style={{
                    backdropFilter: "blur(12px)",
                    background: "rgba(255, 255, 255, 0.03)",
                  }}
                >
                  {'role' in project && (
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Role</h3>
                      <p>{project.role}</p>
                    </div>
                  )}
                  {'duration' in project && (
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Duration</h3>
                      <p>{project.duration}</p>
                    </div>
                  )}
                  {'tools' in project && (
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-2">Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => {
                          const Icon = techIcons[tool];
                          const color = techColors[tool];
                          return (
                            <span key={tool} className="text-sm bg-muted px-3 py-1 rounded-full flex items-center gap-2">
                              {Icon && <Icon className="w-4 h-4" style={{ color }} />}
                              {tool}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Challenge & Solution */}
              {'challenge' in project && 'solution' in project && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 animate-fade-up animation-delay-200">
                  <div
                    className="p-8 rounded-2xl border border-white/10"
                    style={{
                      backdropFilter: "blur(12px)",
                      background: "rgba(255, 255, 255, 0.03)",
                    }}
                  >
                    <h2 className="font-display text-2xl mb-4">The Challenge</h2>
                    <p className="body-text">{project.challenge}</p>
                  </div>
                  <div
                    className="p-8 rounded-2xl border border-white/10"
                    style={{
                      backdropFilter: "blur(12px)",
                      background: "rgba(255, 255, 255, 0.03)",
                    }}
                  >
                    <h2 className="font-display text-2xl mb-4">The Solution</h2>
                    <p className="body-text">{project.solution}</p>
                  </div>
                </div>
              )}

              {/* Process */}
              {'process' in project && (
                <div className="mb-16">
                  <h2 className="font-display text-3xl mb-8">Design Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {project.process.map((step, index) => (
                      <div key={step.title} className="relative">
                        <div className="text-6xl font-display text-muted/50 mb-4">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="font-display text-xl mb-3">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Technical Implementation Section - For Frontend Projects */}
          {'technicalImplementation' in project && project.technicalImplementation && (
            <div className="mb-16 animate-fade-up">
              <h2 className="font-display text-3xl mb-6">{project.technicalImplementation.title}</h2>
              <div
                className="p-8 rounded-2xl border border-white/10"
                style={{
                  backdropFilter: "blur(12px)",
                  background: "rgba(255, 255, 255, 0.03)",
                }}
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.technicalImplementation.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="body-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Screenshots Section - For Projects with Screenshots */}
          {'screenshots' in project && project.screenshots && (
            <div className="mb-16">
              <h2 className="font-display text-3xl mb-8">
                {'isSimplified' in project && project.isSimplified ? 'Project Gallery' : 'Project Screenshots'}
              </h2>

              {/* Full Window Scroll for Agency Website */}
              {'showFullPageScroll' in project && project.showFullPageScroll ? (
                <div className="mb-16">
                  <div className="rounded-2xl overflow-hidden border border-border">
                    <img
                      src={project.screenshots[0].image}
                      alt={project.screenshots[0].caption}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center mt-4 text-base text-muted-foreground">
                    {project.screenshots[0].caption}
                  </p>
                </div>
              ) : (
                /* Mixed Blog/Grid Layout for CrumbleMagic */
                'displayStyle' in project && project.displayStyle === 'mixed' ? (
                  <div className="space-y-16">

                    {/* 1. Blog Sections (Split View) */}
                    {'blogContent' in project && (project.blogContent as any[]).map((section, index) => (
                      <div key={index} className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
                        <div className="lg:w-1/2 space-y-4">
                          <h3 className="text-2xl md:text-3xl font-display text-foreground">{section.title}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">{section.text}</p>
                        </div>
                        <div className="lg:w-1/2">
                          <div className="rounded-xl overflow-hidden shadow-lg border border-border/50">
                            <img src={section.image} alt={section.title} className="w-full h-auto" />
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* 2. Gallery Section */}
                    <div className="space-y-8">
                      <h3 className="text-2xl md:text-3xl font-display text-center mb-8">Interface Gallery</h3>

                      {project.screenshots.length === 1 ? (
                        /* Single Large Scrollable Image (e.g., Ice Cream Landing) */
                        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border shadow-lg">
                          <img
                            src={project.screenshots[0].image}
                            alt={project.screenshots[0].caption}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        /* Masonry Layout for multiple images */
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                          {project.screenshots.map((screenshot, index) => (
                            <div key={index} className="break-inside-avoid">
                              <div className="rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300">
                                <img
                                  src={screenshot.image}
                                  alt={screenshot.caption}
                                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Single Image Carousel for Simplified Projects */
                  'isSimplified' in project && project.isSimplified ? (
                    <div className="relative group max-w-5xl mx-auto">
                      <div className="relative flex items-center justify-center min-h-[400px]">
                        <img
                          src={project.screenshots[currentSlide].image}
                          alt={project.screenshots[currentSlide].caption}
                          className="w-full h-auto max-h-[70vh] object-contain"
                        />

                        {/* Navigation Arrows */}
                        <button
                          onClick={prevSlide}
                          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all backdrop-blur-sm"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                          onClick={nextSlide}
                          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-all backdrop-blur-sm"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-10 h-10" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                          {currentSlide + 1} / {project.screenshots.length}
                        </div>
                      </div>

                      {/* Caption */}
                      <p className="text-center mt-4 text-lg text-muted-foreground font-medium">
                        {project.screenshots[currentSlide].caption}
                      </p>
                    </div>
                  ) : (
                    /* Grid layout for standard projects */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="space-y-3">
                          <div className="rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow">
                            <img
                              src={screenshot.image}
                              alt={screenshot.caption}
                              className="w-full h-auto object-contain bg-muted/10"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground text-center">{screenshot.caption}</p>
                        </div>
                      ))}
                    </div>
                  )
                )
              )}
            </div>
          )}


          {/* GitHub & Live Links - For Frontend Projects */}


          {/* Empathy Maps Section */}
          {'empathyMaps' in project && project.empathyMaps && (
            <div className="mb-16">
              <h2 className="font-display text-3xl mb-6">{project.empathyMaps.title || "Empathy Maps"}</h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                {project.empathyMaps.description && <h3 className="text-xl font-medium mb-4">{project.empathyMaps.description}</h3>}
                <p className="body-text mb-4">{project.empathyMaps.content}</p>
                {/* Placeholder for Empathy Map Image */}
                <div className="w-full h-64 bg-muted/30 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <span className="text-muted-foreground">Empathy Map Visualization Placeholder</span>
                </div>
              </div>
            </div>
          )}

          {/* User Journeys Section */}
          {'userJourneys' in project && project.userJourneys && (
            <div className="mb-16">
              <h2 className="font-display text-3xl mb-6">{project.userJourneys.title || "User Journeys"}</h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                {project.userJourneys.description && <h3 className="text-xl font-medium mb-4">{project.userJourneys.description}</h3>}
                <p className="body-text mb-4">{project.userJourneys.content}</p>
                {/* Placeholder for User Journey Image */}
                <div className="w-full h-64 bg-muted/30 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                  <span className="text-muted-foreground">User Journey Visualization Placeholder</span>
                </div>
              </div>
            </div>
          )}

          {/* Personas Section */}
          {'personas' in project && project.personas && (
            <div className="mb-16">
              <h2 className="font-display text-3xl mb-6">{project.personas.title || "User Personas"}</h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                {project.personas.description && <h3 className="text-xl font-medium mb-4">{project.personas.description}</h3>}
                <p className="body-text mb-4">{project.personas.content}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="h-48 bg-muted/30 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                    <span className="text-muted-foreground">Persona 1 Placeholder</span>
                  </div>
                  <div className="h-48 bg-muted/30 rounded-xl flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                    <span className="text-muted-foreground">Persona 2 Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wireframes Section */}
          {'wireframes' in project && project.wireframes && (
            <div className="mb-16">
              <h2 className="font-display text-3xl mb-6">{project.wireframes.title || "Wireframes"}</h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                {project.wireframes.description && <h3 className="text-xl font-medium mb-4">{project.wireframes.description}</h3>}
                <p className="body-text mb-4">{project.wireframes.content}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-[9/16] bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Wireframe {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Visual Design Section */}
          {'visualDesign' in project && project.visualDesign && (
            <div className="mb-16">
              <h2 className="font-display text-3xl mb-6">{project.visualDesign.title || "Visual Design"}</h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="body-text mb-8">{project.visualDesign.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Typography */}
                  <div>
                    <h3 className="text-xl font-medium mb-6">Typography</h3>
                    <div className="space-y-6">
                      {project.visualDesign.typography.map((font) => (
                        <div key={font} className="p-6 border border-border rounded-xl">
                          <p className="text-sm text-muted-foreground mb-2">Font Family</p>
                          <p className="text-2xl" style={{ fontFamily: font }}>{font}</p>
                          <p className="mt-2 text-3xl" style={{ fontFamily: font }}>Aa Bb Cc Dd 123</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h3 className="text-xl font-medium mb-6">Color Palette</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {project.visualDesign.colors.map((color) => (
                        <div key={color.name} className="space-y-2">
                          <div
                            className="w-full aspect-square rounded-full border border-border shadow-sm"
                            style={{ backgroundColor: color.value }}
                          />
                          <div className="text-center">
                            <p className="font-medium text-sm">{color.name}</p>
                            <p className="text-xs text-muted-foreground">{color.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Final Screens Section */}
          {'finalScreens' in project && project.finalScreens && (
            <div className="mb-16">
              <h2 className="font-display text-3xl mb-6">{project.finalScreens.title || "Final Screens"}</h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                {project.finalScreens.description && <h3 className="text-xl font-medium mb-4">{project.finalScreens.description}</h3>}
                <p className="body-text mb-8">{project.finalScreens.content}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="group relative aspect-[9/19] bg-muted/30 rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center bg-muted/10 group-hover:bg-muted/20 transition-colors">
                        <span className="text-muted-foreground font-medium">Screen {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Learnings Section */}
          {'learnings' in project && project.learnings && (
            <div className="mb-16">
              <h2 className="font-display text-3xl mb-6">{project.learnings.title || "Learnings"}</h2>
              <div className="bg-card p-8 rounded-2xl border border-border">
                <p className="body-text">{project.learnings.content}</p>
              </div>
            </div>
          )}

          {/* Code Link Section */}
          {'codeLink' in project && project.codeLink && (
            <div className="mb-16 text-center">
              <h2 className="font-display text-2xl mb-6">Development</h2>
              <p className="body-text mb-6">I also implemented the code for this project. You can view the source code on GitHub.</p>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-foreground text-background px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                View Code on GitHub
              </a>
            </div>
          )}

          {/* Navigation */}
          {/* Project Actions & Navigation */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {/* GitHub & Live Links */}
            {'githubLink' in project && project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View Code on GitHub
              </a>
            )}
            {'figmaLink' in project && project.figmaLink && (
              <a
                href={project.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View on Figma
              </a>
            )}
            {'liveLink' in project && project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Live Demo
              </a>
            )}

            <Link to="/#projects" className="btn-outline">
              View More Projects
            </Link>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
};

export default Project;
