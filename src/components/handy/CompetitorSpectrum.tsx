import React from "react";
import { ArrowRight } from "lucide-react";

interface Competitor {
  name: string;
  model: string;
  strengths: string[];
  observation?: string;
  tradeoff?: string;
}

const competitors: Competitor[] = [
  {
    name: "Ceylon Services",
    model: "Discovery / Marketplace",
    strengths: ["location-based discovery", "provider profiles", "ratings", "availability"],
    observation: "Strong provider discovery, but much of the relationship can still happen directly between both sides.",
  },
  {
    name: "Grab Me",
    model: "Verified Directory",
    strengths: ["identity verification", "work examples", "direct contact", "low platform friction"],
    observation: "Useful for finding someone, but provides less end-to-end service coordination.",
  },
  {
    name: "MaintainX",
    model: "Managed Marketplace",
    strengths: ["matching", "scheduling", "payment", "tracking", "reviews"],
    observation: "Closer to HANDY's intended model, meaning basic feature presence alone would not provide differentiation.",
  },
  {
    name: "Patas / Bidding Model",
    model: "Customer posts task → professionals submit offers",
    strengths: ["Price competition and choice"],
    tradeoff: "More evaluation effort for the customer.",
  },
  {
    name: "TaskRabbit",
    model: "Provider-Choice Marketplace",
    strengths: ["profiles", "reviews", "price", "booking", "messaging", "payment"],
  },
  {
    name: "Urban Company",
    model: "Managed Service Model",
    strengths: ["More standardized experience and higher platform control"],
  },
];

export const CompetitorSpectrum: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Editorial Comparison List (Zero Bulky Cards) */}
      <div className="space-y-6 pt-4 border-t border-border/70">
        {competitors.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-6 border-b border-border/40 last:border-b-0 items-start"
          >
            <div className="md:col-span-3 space-y-1">
              <span className="text-[10px] font-mono text-[#FF7300] font-bold block">0{idx + 1}</span>
              <h4 className="font-display text-xl text-foreground font-semibold">
                {item.name}
              </h4>
              <span className="text-xs font-mono text-muted-foreground block">
                {item.model}
              </span>
            </div>

            <div className="md:col-span-5 space-y-1 text-xs">
              <span className="text-[10px] font-mono uppercase text-muted-foreground block font-semibold">
                Key Strengths
              </span>
              <p className="text-foreground/90 font-medium leading-relaxed capitalize">
                {item.strengths.join(" • ")}
              </p>
            </div>

            <div className="md:col-span-4 space-y-1 text-xs">
              {item.observation && (
                <>
                  <span className="text-[10px] font-mono uppercase text-[#FF7300] block font-semibold">
                    Research Observation
                  </span>
                  <p className="text-muted-foreground italic leading-relaxed">
                    “{item.observation}”
                  </p>
                </>
              )}
              {item.tradeoff && (
                <>
                  <span className="text-[10px] font-mono uppercase text-amber-600 block font-semibold">
                    Customer Tradeoff
                  </span>
                  <p className="text-muted-foreground italic leading-relaxed">
                    “{item.tradeoff}”
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Visual Spectrum Bar & Opportunity Statement */}
      <div className="space-y-8 pt-8 border-t border-border/70">
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7300] font-semibold block">
            MARKETPLACE SPECTRUM
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
            From Directory to Managed Control
          </h3>
        </div>

        {/* The Linear Spectrum Line with sleek arrows */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span>DIRECTORY</span> <ArrowRight className="w-3.5 h-3.5 text-[#FF7300]" />
            </span>
            <span className="flex items-center gap-1.5">
              <span>OPEN BIDDING</span> <ArrowRight className="w-3.5 h-3.5 text-[#FF7300]" />
            </span>
            <span className="flex items-center gap-1.5">
              <span>PROVIDER MARKETPLACE</span> <ArrowRight className="w-3.5 h-3.5 text-[#FF7300]" />
            </span>
            <span>MANAGED SERVICE</span>
          </div>

          <div className="h-1.5 w-full bg-border/70 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-muted via-[#FF7300]/50 to-[#FF7300]" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#FF7300] font-semibold">
            <span>●</span>
            <span>HANDY POSITION: MANAGED-CHOICE MARKETPLACE</span>
          </div>
        </div>

        {/* HANDY'S Opportunity Highlight (Editorial Typography, No Heavy Card) */}
        <div className="py-8 border-y border-border/70 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7300] font-bold block">
            HANDY'S OPPORTUNITY
          </span>
          <blockquote className="font-display text-2xl sm:text-3xl text-foreground font-normal italic leading-snug max-w-4xl">
            “Competing on search + booking + payment would not be enough.
            The stronger opportunity was reducing uncertainty throughout the job.”
          </blockquote>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl font-body">
            By sitting at the intersection of independent provider choice and centralized platform reliability, HANDY preserves professional autonomy while giving homeowners complete predictability over arrival, diagnostics, and pricing.
          </p>
        </div>
      </div>
    </div>
  );
};
