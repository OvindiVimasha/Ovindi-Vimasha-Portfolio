import React from "react";
import { ArrowRight, Smartphone } from "lucide-react";

interface Step {
  stage: string;
  customer: string;
  handy: string;
  professional: string;
  syncPoint?: string;
}

const blueprintSteps: Step[] = [
  {
    stage: "01. Intake",
    customer: "Describe issue in natural terms & upload photos",
    handy: "Classify symptom & estimate scope parameters",
    professional: "Evaluate job feasibility, area & travel distance",
    syncPoint: "Structured Context",
  },
  {
    stage: "02. Match",
    customer: "Choose professional based on layered trust signals",
    handy: "Match verified pros & reserve schedule slot",
    professional: "Accept or decline with schedule calendar sync",
    syncPoint: "Mutual Agreement",
  },
  {
    stage: "03. Lock",
    customer: "Authorise payment estimate into escrow",
    handy: "Protect funds & lock booking guarantee",
    professional: "Prepare tools & confirm departure time",
    syncPoint: "Escrow Protection",
  },
  {
    stage: "04. Dispatch",
    customer: "Track real-time arrival status",
    handy: "Broadcast status updates & live arrival alerts",
    professional: "Travel & log arrival on site",
    syncPoint: "Arrival Handshake",
  },
  {
    stage: "05. Diagnostic",
    customer: "Inspect work & discuss any uncovered damage",
    handy: "Mediate transparent scope revision request",
    professional: "Inspect physical site & request scope adjustment",
    syncPoint: "Scope Approval",
  },
  {
    stage: "06. Execution",
    customer: "Approve revised cost & monitor progress",
    handy: "Record explicit customer digital consent",
    professional: "Perform repairs according to agreed spec",
    syncPoint: "Audited Changes",
  },
  {
    stage: "07. Resolution",
    customer: "Inspect finished job & confirm satisfaction",
    handy: "Release escrow payment & update reputation score",
    professional: "Mark completed, receive payout directly",
    syncPoint: "Payment Release",
  },
  {
    stage: "08. Retention",
    customer: "Review service & save pro for direct repeat hiring",
    handy: "Index relationship for one-click re-booking",
    professional: "Build verifiable client roster & rating history",
    syncPoint: "Reputation Loop",
  },
];

export const ServiceBlueprint: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7300] font-semibold block mb-1">
            SYNCHRONIZED SERVICE BLUEPRINT
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
            One service, three synchronized experiences.
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Smartphone className="w-3.5 h-3.5 text-[#FF7300]" />
          <span>Scroll horizontally on smaller screens</span>
        </div>
      </div>

      {/* Blueprint Table with Clean Editorial Grid Lines, Zero Nested Cards */}
      <div className="border-t border-b border-border/80 overflow-x-auto">
        <div className="min-w-[960px] py-4 space-y-6">
          {/* Header Stages */}
          <div className="grid grid-cols-[130px_repeat(8,1fr)] gap-4 pb-3 border-b border-border/60 text-xs font-mono">
            <span className="text-muted-foreground uppercase font-bold text-[10px]">LANE</span>
            {blueprintSteps.map((step, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[#FF7300] block text-[10px] font-bold">{step.stage.split(" ")[0]}</span>
                <span className="font-bold text-foreground truncate block">{step.stage.split(" ")[1]}</span>
              </div>
            ))}
          </div>

          {/* Customer Lane */}
          <div className="grid grid-cols-[130px_repeat(8,1fr)] gap-4 py-2 border-b border-border/40 text-xs items-start">
            <div className="space-y-0.5 pr-2">
              <span className="font-mono text-xs font-bold text-blue-600 block">CUSTOMER</span>
              <span className="text-[10px] text-muted-foreground font-mono">User Actions</span>
            </div>
            {blueprintSteps.map((step, idx) => (
              <p key={idx} className="text-foreground/90 leading-snug font-body">
                {step.customer}
              </p>
            ))}
          </div>

          {/* HANDY Platform Lane */}
          <div className="grid grid-cols-[130px_repeat(8,1fr)] gap-4 py-2 border-b border-border/40 text-xs items-start bg-[#FFF7ED]/50 dark:bg-[#FF7300]/5 -mx-4 px-4 rounded-lg">
            <div className="space-y-0.5 pr-2">
              <span className="font-mono text-xs font-bold text-[#FF7300] block">HANDY</span>
              <span className="text-[10px] text-muted-foreground font-mono">System Engine</span>
            </div>
            {blueprintSteps.map((step, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[9px] font-mono uppercase text-[#FF7300] font-bold block">
                  {step.syncPoint}
                </span>
                <p className="text-foreground font-medium leading-snug font-body">
                  {step.handy}
                </p>
              </div>
            ))}
          </div>

          {/* Professional Lane */}
          <div className="grid grid-cols-[130px_repeat(8,1fr)] gap-4 py-2 text-xs items-start">
            <div className="space-y-0.5 pr-2">
              <span className="font-mono text-xs font-bold text-emerald-600 block">PROFESSIONAL</span>
              <span className="text-[10px] text-muted-foreground font-mono">Provider Flow</span>
            </div>
            {blueprintSteps.map((step, idx) => (
              <p key={idx} className="text-foreground/90 leading-snug font-body">
                {step.professional}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
