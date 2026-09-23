import React from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";

interface ResearchPlaceholderProps {
  title: string;
  badge?: string;
  subtitle?: string;
  ratio?: "16:10" | "landscape" | "wide";
  steps?: string[];
  instruction?: string;
  className?: string;
}

export const ResearchPlaceholder: React.FC<ResearchPlaceholderProps> = ({
  title,
  badge = "RESEARCH ARTIFACT PLACEHOLDER",
  subtitle,
  ratio = "16:10",
  steps,
  instruction = "Final artwork will be inserted here.",
  className = "",
}) => {
  const ratioClasses = {
    "16:10": "aspect-[16/10] min-h-[300px] md:min-h-[380px]",
    landscape: "aspect-[16/9] min-h-[320px] md:min-h-[420px]",
    wide: "aspect-[21/9] min-h-[280px] md:min-h-[360px]",
  }[ratio];

  return (
    <div
      className={`relative w-full rounded-2xl border-2 border-dashed border-[#FF7300]/30 hover:border-[#FF7300]/60 bg-[#FAF8F5]/80 dark:bg-card/50 transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 md:p-8 group ${ratioClasses} ${className}`}
    >
      {/* Background blueprint subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#FF7300 1px, transparent 1px), linear-gradient(to right, #FF7300 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#FF7300]/15 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 rounded-full bg-[#FF7300] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF7300]">
            {badge}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded bg-[#FF7300]/10 text-foreground/70 border border-[#FF7300]/20">
            RATIO {ratio === "wide" ? "21:9" : ratio === "landscape" ? "16:9" : "16:10"}
          </span>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 my-auto text-center py-6 px-4 max-w-lg mx-auto space-y-4">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-white dark:bg-card border border-[#FF7300]/25 shadow-sm flex items-center justify-center text-[#FF7300] group-hover:scale-105 transition-transform duration-300">
          <ImageIcon className="w-6 h-6 stroke-[1.75]" />
        </div>

        <div>
          <h4 className="font-display text-xl md:text-2xl text-foreground font-medium mb-1.5">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs md:text-sm text-muted-foreground font-body leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Optional journey steps preview */}
        {steps && steps.length > 0 && (
          <div className="pt-2">
            <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 text-[11px] font-medium text-foreground/80">
              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-2.5 py-1 rounded-md bg-white dark:bg-card border border-border/80 shadow-2xs">
                    {step}
                  </span>
                  {idx < steps.length - 1 && (
                    <span className="text-[#FF7300] text-xs font-semibold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Clean replacement notice */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF7300]/5 border border-[#FF7300]/20 text-[11px] text-foreground/70 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7300]" />
          <span>{instruction}</span>
        </div>
      </div>

      {/* Footer metadata */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-muted-foreground border-t border-[#FF7300]/15 pt-3 font-mono">
        <span>ASSET SPEC: HIGH-RES PNG / SVG</span>
        <span>AWAITING FINAL ARTIFACT</span>
      </div>
    </div>
  );
};
