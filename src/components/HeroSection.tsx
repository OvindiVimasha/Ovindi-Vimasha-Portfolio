import { ArrowDownRight, Download } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isProduct, setIsProduct] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsProduct((prev) => !prev);
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
          {/* Main Title - Animated Switcher between UI/UX Designer & Product Designer */}
          <div className="opacity-0 animate-fade-up relative h-20 sm:h-24 md:h-32 lg:h-36 mb-6 flex items-center">
            <div className="relative w-full overflow-hidden h-full flex items-center">
              {/* Title 1: UI/UX Designer */}
              <div
                className={`transition-all duration-700 ease-in-out transform flex items-baseline gap-2 sm:gap-4 ${
                  !isProduct
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full absolute"
                }`}
              >
                <span
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground tracking-tight whitespace-nowrap"
                  style={{ fontFamily: "'Bodoni Moda', serif", letterSpacing: "-0.03em" }}
                >
                  UI/UX
                </span>
                <span
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic text-foreground tracking-tight whitespace-nowrap"
                  style={{ fontFamily: "'Bodoni Moda', serif", letterSpacing: "-0.03em" }}
                >
                  Designer
                </span>
              </div>

              {/* Title 2: Product Designer */}
              <div
                className={`transition-all duration-700 ease-in-out transform flex items-baseline gap-2 sm:gap-4 ${
                  isProduct
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full absolute"
                }`}
              >
                <span
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground tracking-tight whitespace-nowrap"
                  style={{ fontFamily: "'Bodoni Moda', serif", letterSpacing: "-0.03em" }}
                >
                  Product
                </span>
                <span
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic text-foreground tracking-tight whitespace-nowrap"
                  style={{ fontFamily: "'Bodoni Moda', serif", letterSpacing: "-0.03em" }}
                >
                  Designer
                </span>
              </div>
            </div>
          </div>

          {/* Screen reader title */}
          <h1 className="sr-only">{!isProduct ? "UI/UX Designer" : "Product Designer"}</h1>

          {/* Subtitle */}
          <p className="body-text max-w-xl mb-12 opacity-0 animate-fade-up animation-delay-200">
            {!isProduct
              ? "UI/UX & Product Designer specializing in crafting intuitive digital experiences, design systems, and user-centered solutions."
              : "Designing thoughtful digital products that balance customer needs, systemic clarity, and business outcomes."}
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
