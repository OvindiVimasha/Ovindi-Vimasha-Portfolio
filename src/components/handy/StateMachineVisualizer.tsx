import React from "react";
import bookingScreenDiagram from "@/assets/Handyman_Project/BookingScreenDiagram.png";

export const StateMachineVisualizer: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
        <img
          src={bookingScreenDiagram}
          alt="Systems Thinking & Software Architecture: A booking isn't a screen. It's a state machine."
          className="w-full h-auto object-contain block"
        />
      </div>
      <p className="text-xs font-mono text-muted-foreground px-1">
        Booking Lifecycle State Machine: Primary happy path transitions and exception recovery flows
      </p>
    </div>
  );
};

