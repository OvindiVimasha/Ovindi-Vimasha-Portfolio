import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, XCircle, ArrowDown } from "lucide-react";

export const ScopeChangeWalkthrough: React.FC = () => {
  const [decision, setDecision] = useState<"approved" | "discussing" | "rejected">("approved");

  return (
    <div className="space-y-12 pt-4 border-t border-border/70">
      {/* Sleek Editorial Step Progression with Arrows */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8 items-start">
        {/* Step 1 */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#FF7300] font-bold block">STEP 01</span>
          <h4 className="font-display text-lg text-foreground font-semibold">
            ORIGINAL ESTIMATE
          </h4>
          <p className="text-xs text-muted-foreground">Leak repair</p>
          <div className="pt-2">
            <span className="font-mono text-xl font-bold text-foreground">Rs. 3,500</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="space-y-2 md:border-l md:border-border/60 md:pl-6">
          <span className="text-[10px] font-mono text-amber-600 font-bold block">STEP 02</span>
          <h4 className="font-display text-lg text-foreground font-semibold">
            PROFESSIONAL DISCOVERS
          </h4>
          <p className="text-xs text-muted-foreground">
            Replacement valve required upon physical inspection.
          </p>
          <div className="pt-2">
            <span className="text-xs font-mono font-medium text-amber-600 block">Hidden damage</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="space-y-2 md:border-l md:border-border/60 md:pl-6">
          <span className="text-[10px] font-mono text-[#FF7300] font-bold block">STEP 03</span>
          <h4 className="font-display text-lg text-foreground font-semibold">
            SCOPE CHANGE REQUEST
          </h4>
          <div className="space-y-1 text-xs font-mono text-muted-foreground pt-1">
            <div className="flex justify-between">
              <span>Material:</span>
              <span className="font-semibold text-foreground">Rs. 1,200</span>
            </div>
            <div className="flex justify-between">
              <span>Additional labour:</span>
              <span className="font-semibold text-foreground">Rs. 500</span>
            </div>
          </div>
          <div className="pt-1">
            <span className="text-xs font-mono font-bold text-[#FF7300]">+Rs. 1,700</span>
          </div>
        </div>

        {/* Step 4 */}
        <div className="space-y-2 md:border-l md:border-border/60 md:pl-6">
          <span className="text-[10px] font-mono text-muted-foreground font-bold block">STEP 04</span>
          <h4 className="font-display text-lg text-foreground font-semibold">
            CUSTOMER DECISION
          </h4>
          <div className="flex flex-col gap-1.5 pt-1">
            <button
              onClick={() => setDecision("approved")}
              className={`text-left text-xs font-mono py-1 px-2.5 rounded transition-colors ${
                decision === "approved"
                  ? "bg-[#FF7300] text-white font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Approve ✓
            </button>
            <button
              onClick={() => setDecision("discussing")}
              className={`text-left text-xs font-mono py-1 px-2.5 rounded transition-colors ${
                decision === "discussing"
                  ? "bg-blue-600 text-white font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Discuss 💬
            </button>
            <button
              onClick={() => setDecision("rejected")}
              className={`text-left text-xs font-mono py-1 px-2.5 rounded transition-colors ${
                decision === "rejected"
                  ? "bg-rose-600 text-white font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Reject ✕
            </button>
          </div>
        </div>

        {/* Step 5 */}
        <div className="space-y-2 md:border-l md:border-border/60 md:pl-6">
          <span className="text-[10px] font-mono text-emerald-600 font-bold block">STEP 05</span>
          <h4 className="font-display text-lg text-foreground font-semibold">
            NEW AGREED TOTAL
          </h4>
          <p className="text-xs text-muted-foreground">Digital mutual sign-off</p>
          <div className="pt-2">
            <span className="font-mono text-2xl font-bold text-emerald-600">Rs. 5,200</span>
          </div>
        </div>
      </div>

      {/* Supporting Copy */}
      <div className="py-6 border-t border-border/60 space-y-2">
        <blockquote className="font-display text-xl text-foreground italic leading-relaxed">
          “Instead of pretending uncertainty can be eliminated, HANDY makes changes visible and requires agreement before additional work continues.”
        </blockquote>
      </div>
    </div>
  );
};
