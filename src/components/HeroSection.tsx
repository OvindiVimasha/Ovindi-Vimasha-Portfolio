import { ArrowDownRight, Download } from "lucide-react";
import { useState, useEffect } from "react";
import homeBannerText from "@/assets/home-banner-text.png";
import homeBannerText2 from "@/assets/home-banner-text2.png";

const HeroSection = () => {
  const [isDesigner, setIsDesigner] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDesigner((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Gradient Blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] animate-blob"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, hsl(30, 100%, 70%) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 30%, hsl(340, 80%, 65%) 0%, transparent 45%),
              radial-gradient(ellipse at 50% 60%, hsl(280, 70%, 55%) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, hsl(0, 80%, 60%) 0%, transparent 40%),
              radial-gradient(ellipse at 20% 80%, hsl(220, 80%, 60%) 0%, transparent 45%)
            `,
            filter: "blur(60px)",
            opacity: 0.9,
            transform: "translate(-10%, -10%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Main Title - Animated Switcher */}
          <div className="opacity-0 animate-fade-up relative h-20 md:h-32 lg:h-40 mb-6 flex items-center">
            <div className="relative w-full overflow-hidden">
              <div
                className={`transition-all duration-700 ease-in-out transform ${isDesigner
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full absolute"
                  }`}
              >
                <img
                  src={homeBannerText}
                  alt="UX/UI Designer"
                  className="w-full max-w-lg md:max-w-xl lg:max-w-2xl"
                />
              </div>
              <div
                className={`transition-all duration-700 ease-in-out transform ${!isDesigner
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full absolute"
                  }`}
              >
                <img
                  src={homeBannerText2}
                  alt="Frontend Developer"
                  className="w-full max-w-lg md:max-w-xl lg:max-w-3xl"
                />
              </div>
            </div>
          </div>

          {/* Fallback text title in case image fails */}
          <h1 className="sr-only">{isDesigner ? "UX/UI Designer" : "Frontend Developer"}</h1>

          {/* Subtitle */}
          <p className="body-text max-w-xl mb-12 opacity-0 animate-fade-up animation-delay-200">
            {isDesigner
              ? "UX/UI Engineer & Frontend Developer specializing in transforming designs into pixel-perfect, performant web applications."
              : "Building exceptional digital experiences with modern web technologies and creative problem-solving."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up animation-delay-400">
            <a
              href="#projects"
              className="btn-primary group"
            >
              <span className="w-14 h-14 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <ArrowDownRight className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium tracking-wider uppercase">View Projects</span>
            </a>

            <a
              href="/Ovindi Vimasha CV.pdf"
              download="Ovindi_Vimasha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <span className="w-14 h-14 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                <Download className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium tracking-wider uppercase">Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
