import ProjectCard from "./ProjectCard";
import netflixHome from "@/assets/netflix-clone/Home.png";
import projectNaturalHair from "@/assets/project-natural-hair.jpg";
import projectWhatsapp from "@/assets/project-whatsapp.jpg";
import projectBabyShoes from "@/assets/project-baby-shoes.jpg";
import projectDonation from "@/assets/project-donation.jpg";
import agencyThumbnail from "@/assets/agency/thumbnail.png";
import airportThumbnail from "@/assets/airport-restaurant/restauranthome.jpeg";
import cookieThumbnail from "@/assets/cookie website/thumbnail.png";
import iceCreamThumbnail from "@/assets/ice cream/thumbnail.png";

const projects = [
  {
    tag: "Frontend Development",
    title: "Netflix Clone: Modern Streaming Platform Interface",
    description: "A fully responsive Netflix UI clone built with React and Vite, featuring dynamic movie browsing, advanced filtering, search functionality, and smooth navigation with modern layouts.",
    image: netflixHome,
    slug: "netflix-clone",
  },
  {
    tag: "Frontend Development",
    title: "Modern Digital Agency: High-Performance Corporate Identity",
    description: "A premium, pixel-perfect agency website featuring advanced animations, modern layout patterns, and a comprehensive responsive design that communicates professional excellence.",
    image: agencyThumbnail,
    slug: "agency-website",
  },
  {
    tag: "UX/UI Design",
    title: "CrumbleMagic: Delightful Digital E-Commerce Experience",
    description: "A whimsical and engaging user interface design for a premium cookie brand, focusing on sensory appeal, playful interactions, and a seamless checkout journey.",
    image: cookieThumbnail,
    slug: "crumble-magic",
  },
  {
    tag: "UX/UI Design",
    title: "FrostyScoops: Vibrant Ice Cream Brand Experience",
    description: "A fun, colorful, and sensory-driven digital experience for a premium ice cream brand, designed to evoke joy and summer vibes.",
    image: iceCreamThumbnail,
    slug: "ice-cream",
  },
  {
    tag: "MERN Stack Application",
    title: "AeroX: Airport Restaurant Reservation & Pre-order System",
    description: "Designed and implemented the restaurant reservation module for AeroX, an integrated airport services platform, enabling real-time booking and meal pre-ordering for travelers.",
    image: airportThumbnail,
    slug: "airport-platform",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 space-y-32 md:space-y-40">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            {...project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
