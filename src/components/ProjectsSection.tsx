import React from "react";
import ProjectCard from "./ProjectCard";
import handyThumbnail from "@/assets/Handyman_Project/Thumbnail.png";
import cookieThumbnail from "@/assets/cookie website/thumbnail.png";
import iceCreamThumbnail from "@/assets/ice cream/thumbnail.png";
import netflixHome from "@/assets/netflix-clone/Home.png";

interface ProjectGroup {
  id: string;
  num: string;
  label: string;
  subtitle: string;
  projects: {
    tag: string;
    title: string;
    description: string;
    image: string;
    slug: string;
  }[];
}

// Divided as: UX Research > UI Design > Frontend Development (only Netflix kept)
const projectGroups: ProjectGroup[] = [
  {
    id: "ux-research",
    num: "01",
    label: "UX Research",
    subtitle: "Contextual Inquiry, Two-Sided Marketplace Dynamics & Reliability Systems",
    projects: [
      {
        tag: "UX Research / Two-Sided Marketplace",
        title: "HANDY: Reliability System for Two-Sided Home Services",
        description: "An exploratory qualitative UX research case study exploring how a two-sided home-services marketplace reduces transaction uncertainty through transparent diagnostics, layered trust, and synchronized workflows.",
        image: handyThumbnail,
        slug: "handy",
      },
    ],
  },
  {
    id: "ui-design",
    num: "02",
    label: "UI Design",
    subtitle: "High-Craft Digital Interfaces, E-Commerce Systems & Sensory Brand Experiences",
    projects: [
      {
        tag: "UI Design / E-Commerce Experience",
        title: "CrumbleMagic: Delightful Digital E-Commerce Experience",
        description: "A whimsical and engaging user interface design for a premium cookie brand, focusing on sensory appeal, playful interactions, and a seamless checkout journey.",
        image: cookieThumbnail,
        slug: "crumble-magic",
      },
      {
        tag: "UI Design / Brand Experience",
        title: "FrostyScoops: Vibrant Ice Cream Brand Experience",
        description: "A fun, colorful, and sensory-driven digital experience for a premium ice cream brand, designed to evoke joy and summer vibes.",
        image: iceCreamThumbnail,
        slug: "ice-cream",
      },
    ],
  },
  {
    id: "frontend-development",
    num: "03",
    label: "Frontend Development",
    subtitle: "Modern React Architectures & Responsive Web Platforms",
    projects: [
      {
        tag: "Frontend Development / React & TMDB API",
        title: "Netflix Clone: Modern Streaming Platform Interface",
        description: "A fully responsive Netflix UI clone built with React and Vite, featuring dynamic movie browsing, advanced filtering, search functionality, and smooth navigation with modern layouts.",
        image: netflixHome,
        slug: "netflix-clone",
      },
    ],
  },
];

const ProjectsSection: React.FC = () => {
  let globalIndex = 0;

  return (
    <section id="projects" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 space-y-24 md:space-y-36">
        {projectGroups.map((group) => (
          <div key={group.id} className="space-y-16">
            {/* Category Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b-2 border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#FF7300]">
                  {group.num}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-normal">
                  {group.label}
                </h3>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                {group.subtitle}
              </span>
            </div>

            {/* Projects in this discipline */}
            <div className="space-y-24 md:space-y-32">
              {group.projects.map((project) => {
                const isReverse = globalIndex % 2 === 1;
                globalIndex += 1;
                return (
                  <ProjectCard
                    key={project.slug}
                    {...project}
                    reverse={isReverse}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
