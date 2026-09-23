import React, { useState, useEffect } from "react";
import { Maximize2, X } from "lucide-react";

// Low-Fidelity Assets
import lowFiLanding from "@/assets/Handyman_Project/Low fidelity/lowfi-landing.png";
import lowFiSearchResults from "@/assets/Handyman_Project/Low fidelity/lowfi-search-results.png";
import lowFiProfile from "@/assets/Handyman_Project/Low fidelity/lowfi-customer-profile.png";
import lowFiProviderRequests from "@/assets/Handyman_Project/Low fidelity/lowfi-provider-requests.png";
import lowFiProviderDetails from "@/assets/Handyman_Project/Low fidelity/lowfi-provider-details.png";

interface ModalImage {
  src: string;
  alt: string;
}

const otherScreens: ModalImage[] = [
  {
    src: lowFiSearchResults,
    alt: "Low-Fidelity Search Results Wireframe",
  },
  {
    src: lowFiProfile,
    alt: "Low-Fidelity Technician Profile Wireframe",
  },
  {
    src: lowFiProviderRequests,
    alt: "Low-Fidelity Incoming Requests Wireframe",
  },
  {
    src: lowFiProviderDetails,
    alt: "Low-Fidelity Request Details Wireframe",
  },
];

export const LowFiGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="w-full">
      {/* Dual-Sided Wireframe Display: Landing Page on Left, 4 Screens on Right ending flush */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Full Landing Page Wireframe */}
        <div className="h-full flex flex-col">
          <div
            onClick={() =>
              setSelectedImage({
                src: lowFiLanding,
                alt: "Low-Fidelity Landing Page Wireframe",
              })
            }
            className="group relative rounded-2xl overflow-hidden border border-border/80 bg-card shadow-sm hover:shadow-xl hover:border-[#FF7300]/40 transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-start"
          >
            <img
              src={lowFiLanding}
              alt="Low-Fidelity Landing Page Wireframe"
              className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
            />
            {/* Minimal Click-to-Zoom Indicator */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
              <div className="p-3 rounded-full bg-card/90 text-foreground backdrop-blur-md shadow-lg border border-border/60">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Other Wireframes Stacked to Match Landing Page Height */}
        <div className="h-full flex flex-col justify-between gap-4 sm:gap-6 lg:gap-0">
          {otherScreens.map((screen, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(screen)}
              className="group relative rounded-2xl overflow-hidden border border-border/80 bg-card shadow-sm hover:shadow-xl hover:border-[#FF7300]/40 transition-all duration-300 cursor-pointer"
            >
              <img
                src={screen.src}
                alt={screen.alt}
                className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
              />
              {/* Minimal Click-to-Zoom Indicator */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                <div className="p-2.5 rounded-full bg-card/90 text-foreground backdrop-blur-md shadow-lg border border-border/60">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] max-w-5xl w-full bg-card rounded-2xl overflow-hidden border border-border shadow-2xl flex flex-col"
          >
            {/* Close Button Header */}
            <div className="flex items-center justify-end p-3 border-b border-border/60 bg-muted/20">
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Image Area */}
            <div className="overflow-auto p-4 sm:p-6 flex items-center justify-center bg-muted/10">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full h-auto object-contain rounded-xl shadow-md border border-border/50"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
