import React from "react";

// Asset imports
import handyLanding from "@/assets/Handyman_Project/Landing Page.png";
import handyCustomerOverview from "@/assets/Handyman_Project/Customer Portal - Overview.png";
import handyProfile from "@/assets/Handyman_Project/Handyman Profile.png";
import handyPortalOverview from "@/assets/Handyman_Project/Handyman Portal - Overview.png";
import handyPortalRequests from "@/assets/Handyman_Project/Handyman Portal - Requests.png";
import handyPortalRequestDetails from "@/assets/Handyman_Project/Handyman Portal - Request Details.png";
import handyPortalAvailability from "@/assets/Handyman_Project/Handyman Portal - Availability Update.png";
import handyPortalServiceAreas from "@/assets/Handyman_Project/Handyman Portal - Service Areas Update.png";
import handyPortalBookings from "@/assets/Handyman_Project/Handyman Portal - My Bookings.png";
import handyPortalChat from "@/assets/Handyman_Project/Handyman Portal - Chat.png";
import handySecurity from "@/assets/Handyman_Project/security.png";

interface Screenshot {
  image: string;
  caption: string;
  category?: string;
}

const blogSections = [
  {
    title: "Problem-First Intake & Multi-Signal Trust",
    text: "Rather than forcing users to navigate technical trades they don't understand, the customer experience starts with physical symptoms and diagnostic photo uploads. The professional's profile replaces decorative star ratings with verified credentials, completed job volume, past work photography, and background security checks.",
    image: handyProfile,
    reverse: false,
  },
  {
    title: "Context-Rich Dispatch & Calendar Control",
    text: "Professionals routinely rejected vague leads in our research. The provider interface gives technicians complete situational awareness before they accept: job location radius, transit estimates, customer diagnostic photos, and guaranteed minimum earnings—all synced with their live schedule to eliminate double-booking.",
    image: handyPortalRequests,
    reverse: true,
  },
  {
    title: "Transparent Scope Governance & Protected Escrow",
    text: "Repairs cannot always be priced accurately before physical inspection. When hidden pipe corrosion is discovered on site, the professional submits an itemized scope-change request with photo proof. Work pauses until the customer digitally approves the adjusted total, backed by the platform escrow guarantee.",
    image: handyCustomerOverview,
    reverse: false,
  },
];

const galleryScreenshots: Screenshot[] = [
  { image: handyLanding, caption: "Marketplace Landing & Problem-First Intake Flow" },
  { image: handyProfile, caption: "Handyman Profile featuring layered trust metrics and verified badges" },
  { image: handyCustomerOverview, caption: "Customer Portal Overview with active booking status and escrow tracking" },
  { image: handyPortalOverview, caption: "Handyman Portal Overview with schedule and earnings summary" },
  { image: handyPortalRequests, caption: "Job Request Evaluation with location radius and photo context" },
  { image: handyPortalRequestDetails, caption: "Granular Request Details with customer symptom description" },
  { image: handyPortalAvailability, caption: "Real-time calendar slot management for believable availability" },
  { image: handyPortalServiceAreas, caption: "Configurable travel radius and postal area management" },
  { image: handyPortalBookings, caption: "Active bookings management and repeat client relationships" },
  { image: handyPortalChat, caption: "In-app diagnostic messaging and photo confirmation" },
  { image: handySecurity, caption: "Escrow payment release protocol and platform guarantee" },
];

export const UIGallery: React.FC = () => {
  return (
    <div className="space-y-24 my-16">
      {/* 1. Blog Sections (Split View like CrumbleMagic) */}
      <div className="space-y-24">
        {blogSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
          >
            <div className="lg:w-1/2 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7300] font-bold">
                SYSTEM DESIGN 0{index + 1}
              </span>
              <h3 className="text-2xl md:text-3xl font-display text-foreground leading-snug">
                {section.title}
              </h3>
              <p className="body-text text-base md:text-lg leading-relaxed text-muted-foreground">
                {section.text}
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border/80 bg-card group">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Masonry Gallery Section (Identical to CrumbleMagic) */}
      <div className="space-y-10 pt-12 border-t border-border/70">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7300] font-bold">
            PRODUCT INTERFACES
          </span>
          <h3 className="text-3xl md:text-4xl font-display text-foreground">
            Interface Gallery
          </h3>
          <p className="body-text text-base text-muted-foreground">
            The complete two-sided design system across customer discovery, technician dispatch, and escrow governance.
          </p>
        </div>

        {/* Clean Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryScreenshots.map((screenshot, index) => (
            <div key={index} className="break-inside-avoid group">
              <div className="rounded-xl overflow-hidden border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 bg-card">
                <img
                  src={screenshot.image}
                  alt={screenshot.caption}
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs font-mono text-muted-foreground mt-2 px-1 leading-snug">
                {screenshot.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
