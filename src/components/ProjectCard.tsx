import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  reverse?: boolean;
}

const ProjectCard = ({ tag, title, description, image, slug, reverse = false }: ProjectCardProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-up`}>
      {/* Image */}
      <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <Link to={`/project/${slug}`} className="block group">
          <div className="relative overflow-hidden h-64 md:h-80 lg:h-96 w-full flex items-center justify-center transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105 relative z-0"
            />
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className={`${reverse ? 'lg:order-1 lg:text-right' : 'lg:order-2'} space-y-6`}>
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 border border-primary/20 rounded-full px-4 py-2 bg-primary/5">
          {tag}
        </span>

        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
          <Link to={`/project/${slug}`} className="hover:text-primary transition-colors duration-300">
            {title}
          </Link>
        </h2>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">{description}</p>

        <Link
          to={`/project/${slug}`}
          className={`inline-flex items-center gap-3 text-sm font-medium tracking-wider uppercase group/link hover:text-primary transition-colors ${reverse ? 'lg:flex-row-reverse' : ''}`}
        >
          <span>View Project</span>
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 ${reverse ? 'lg:rotate-180 lg:group-hover/link:-translate-x-1' : ''}`} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
