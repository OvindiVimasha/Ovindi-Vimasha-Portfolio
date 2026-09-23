import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Shield,
  Clock,
  DollarSign,
  Briefcase,
  CheckCircle2,
  Users,
  Compass,
  FileText,
  AlertCircle,
  HelpCircle,
  Calendar,
  Sparkles,
  ExternalLink,
  Smartphone,
  Layers,
  Quote,
  Search,
  MapPin,
  Target,
  Maximize2,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CompetitorSpectrum } from "@/components/handy/CompetitorSpectrum";
import { ServiceBlueprint } from "@/components/handy/ServiceBlueprint";
import { StateMachineVisualizer } from "@/components/handy/StateMachineVisualizer";
import { ScopeChangeWalkthrough } from "@/components/handy/ScopeChangeWalkthrough";
import { LowFiGallery } from "@/components/handy/LowFiGallery";
import { UIGallery } from "@/components/handy/UIGallery";

// Handyman Project UI Assets
import handyThumbnail from "@/assets/Handyman_Project/Thumbnail.png";
import handyLanding from "@/assets/Handyman_Project/Landing Page.png";
import handyCustomerOverview from "@/assets/Handyman_Project/Customer Portal - Overview.png";
import handyProfile from "@/assets/Handyman_Project/Handyman Profile.png";
import handyPortalRequests from "@/assets/Handyman_Project/Handyman Portal - Requests.png";
import handyPortalRequestDetails from "@/assets/Handyman_Project/Handyman Portal - Request Details.png";
import handyPortalAvailability from "@/assets/Handyman_Project/Handyman Portal - Availability Update.png";
import handyPortalServiceAreas from "@/assets/Handyman_Project/Handyman Portal - Service Areas Update.png";
import handyPortalBookings from "@/assets/Handyman_Project/Handyman Portal - My Bookings.png";
import handyPortalChat from "@/assets/Handyman_Project/Handyman Portal - Chat.png";
import handyPortalOverview from "@/assets/Handyman_Project/Handyman Portal - Overview.png";
import handySecurity from "@/assets/Handyman_Project/security.png";
import designThinking from "@/assets/Handyman_Project/Design Thinking.png";
import todayDiagram from "@/assets/Handyman_Project/Today.png";
import designSystemImg from "@/assets/Handyman_Project/DesignSystem.png";

// Real Personas Assets
import persona1 from "@/assets/Handyman_Project/personas/1.png";
import persona2 from "@/assets/Handyman_Project/personas/2.png";
import persona3 from "@/assets/Handyman_Project/personas/3.png";

// Real Journey Map Assets
import customerJourneyMap from "@/assets/Handyman_Project/journey_maps/Customer Journey Map.png";
import professionalJourneyMap from "@/assets/Handyman_Project/journey_maps/Professional Journey Map.png";

const HandyCaseStudy: React.FC = () => {
  const [showDesignSystemModal, setShowDesignSystemModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-[#FF7300]/20 selection:text-[#FF7300]">
      {/* Animated Gradient Blob Background (Matches About & Project pages) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] animate-blob -top-40 -left-20 opacity-50"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, hsl(30, 100%, 70%) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 30%, hsl(340, 80%, 65%) 0%, transparent 45%),
              radial-gradient(ellipse at 50% 60%, hsl(280, 70%, 55%) 0%, transparent 50%)
            `,
            filter: "blur(60px)",
          }}
        />
      </div>

      <Header />

      <main className="pt-32 pb-24 relative z-10">
        {/* =========================================================================
            SECTION 01: HERO & CONTEXT (CRISP UNBLURRED THUMBNAIL)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-24 md:mb-32">
          {/* Back link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Hero Header */}
          <div className="mb-12 animate-fade-up max-w-4xl space-y-6">
            <span className="project-tag inline-block">
              UX RESEARCH / TWO-SIDED MARKETPLACE
            </span>

            <h1 className="section-title max-w-4xl leading-tight">
              “Finding a handyman isn't difficult. Knowing whether you can{" "}
              <span className="text-[#FF7300] font-normal italic underline decoration-[#FF7300]/30 decoration-2 underline-offset-8">
                trust them
              </span>{" "}
              is.”
            </h1>

            <p className="body-text text-lg md:text-xl leading-relaxed max-w-3xl">
              HANDY explores how a home-services marketplace can reduce uncertainty for both sides of the service experience — helping customers hire confidently while giving independent professionals enough information and control to accept the right jobs.
            </p>
          </div>

          {/* TOP-SIDE HERO BANNER (BIG, FULL-WIDTH MATCHING FROSTY SCOOPS / ICE CREAM PROJECT) */}
          <div className="w-full mb-16 animate-fade-up">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
              <img
                src={handyThumbnail}
                alt="HANDY / Handyman.lk Product Overview"
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm font-mono text-muted-foreground pt-4 px-1">
              <span>HANDY / Handyman.lk — Product Ecosystem Overview</span>
              <span>Qualitative UX Research Case Study</span>
            </div>
          </div>

          {/* Research Dossier & Strategic Takeaway (Modern Aesthetic Editorial) */}
          <div className="pt-10 space-y-6">
            {/* 4 Metadata Dossier Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Research */}
              <div className="group relative h-full p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border/80 hover:border-[#FF7300]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7300]/5 hover:-translate-y-0.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-[#FF7300]">
                      RESEARCH
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#FF7300]/10 flex items-center justify-center text-[#FF7300] group-hover:scale-110 group-hover:bg-[#FF7300] group-hover:text-white transition-all duration-300">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-body text-base font-semibold text-foreground tracking-tight leading-snug">
                    Exploratory qualitative study
                  </h4>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-3 pt-3 border-t border-border/40">
                  In-depth contextual inquiry
                </p>
              </div>

              {/* Card 2: Participants */}
              <div className="group relative h-full p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border/80 hover:border-[#FF7300]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7300]/5 hover:-translate-y-0.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-[#FF7300]">
                      PARTICIPANTS
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#FF7300]/10 flex items-center justify-center text-[#FF7300] group-hover:scale-110 group-hover:bg-[#FF7300] group-hover:text-white transition-all duration-300">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-body text-base font-semibold text-foreground tracking-tight leading-snug">
                    Customers + service professionals
                  </h4>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-3 pt-3 border-t border-border/40">
                  Two-sided market inquiry
                </p>
              </div>

              {/* Card 3: Market */}
              <div className="group relative h-full p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border/80 hover:border-[#FF7300]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7300]/5 hover:-translate-y-0.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-[#FF7300]">
                      MARKET
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#FF7300]/10 flex items-center justify-center text-[#FF7300] group-hover:scale-110 group-hover:bg-[#FF7300] group-hover:text-white transition-all duration-300">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-body text-base font-semibold text-foreground tracking-tight leading-snug">
                    Local home services
                  </h4>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-3 pt-3 border-t border-border/40">
                  Residential trade ecosystem
                </p>
              </div>

              {/* Card 4: Focus */}
              <div className="group relative h-full p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border/80 hover:border-[#FF7300]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7300]/5 hover:-translate-y-0.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-[#FF7300]">
                      FOCUS AREAS
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-[#FF7300]/10 flex items-center justify-center text-[#FF7300] group-hover:scale-110 group-hover:bg-[#FF7300] group-hover:text-white transition-all duration-300">
                      <Target className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {["Trust", "Reliability", "Pricing", "Coordination"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2 py-0.5 rounded-md bg-foreground/5 text-foreground/90 border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs font-mono text-muted-foreground mt-3 pt-3 border-t border-border/40">
                  Friction & risk reduction
                </p>
              </div>
            </div>

            {/* Strategic Takeaway Statement (Elevated Statement Banner) */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#FF7300]/25 bg-gradient-to-br from-[#FF7300]/[0.08] via-card/90 to-background p-6 sm:p-8 md:p-10 shadow-sm backdrop-blur-md">
              {/* Decorative background glow & quote watermark */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#FF7300]/10 rounded-full blur-3xl pointer-events-none" />
              <Quote className="absolute -top-4 -right-4 w-28 h-28 md:w-36 md:h-36 text-[#FF7300]/[0.06] pointer-events-none rotate-12" />

              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#FF7300]/10 text-[#FF7300] border border-[#FF7300]/25 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300] animate-pulse" />
                  CORE STRATEGIC SHIFT
                </div>

                <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground font-normal leading-tight tracking-tight">
                  “The research shifted the project from a{" "}
                  <span className="text-muted-foreground/80 line-through decoration-[#FF7300]/50 decoration-1 sm:decoration-2">
                    service directory
                  </span>{" "}
                  into a{" "}
                  <span className="text-[#FF7300] font-medium italic underline decoration-[#FF7300]/40 decoration-2 underline-offset-8">
                    reliability system
                  </span>.”
                </blockquote>

                <p className="body-text text-base text-muted-foreground max-w-2xl pt-1">
                  Moving beyond contact listings to systematically reduce pre-booking ambiguity, align expectations, and enforce mutual accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 02: THE TRANSACTION (TWO-COLUMN INQUIRY)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                01 • INQUIRY FRAMEWORK
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                Before designing screens, I needed to understand the transaction.
              </h2>
              <p className="body-text text-base leading-relaxed">
                Home services are unique: they require inviting an unfamiliar stranger into one's private living space to fix an unpredictable physical problem. Both sides enter with asymmetrical knowledge.
              </p>
            </div>

            {/* Editorial 2-Column Inquiry List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-4 border-t border-border/70">
              {/* Customer Column */}
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center justify-between">
                  <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-foreground flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    CUSTOMER QUESTIONS
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">6 Core Inquiries</span>
                </div>

                <div className="space-y-4">
                  {[
                    "How do people currently find local tradespeople?",
                    "What makes someone feel trustworthy?",
                    "What information matters before booking?",
                    "How do people understand pricing when they do not know the technical scope?",
                    "What causes uncertainty after a booking is made?",
                    "Why do customers return to some professionals?",
                  ].map((q, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-3 border-b border-border/30 last:border-b-0">
                      <span className="text-[#FF7300] font-mono text-sm font-bold pt-0.5">0{idx + 1}</span>
                      <p className="body-text text-base text-foreground/90 font-medium leading-relaxed">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Column */}
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center justify-between">
                  <h3 className="font-mono text-sm uppercase tracking-widest font-bold text-foreground flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    PROFESSIONAL QUESTIONS
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">7 Core Inquiries</span>
                </div>

                <div className="space-y-4">
                  {[
                    "What makes a job request worth accepting?",
                    "What information is usually missing?",
                    "How much do distance and travel time matter?",
                    "How are jobs and schedules currently managed?",
                    "When do prices change?",
                    "What causes conflict between customers and professionals?",
                    "What makes a service marketplace useful rather than distracting?",
                  ].map((q, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-3 border-b border-border/30 last:border-b-0">
                      <span className="text-emerald-600 font-mono text-sm font-bold pt-0.5">0{idx + 1}</span>
                      <p className="body-text text-base text-foreground/90 font-medium leading-relaxed">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Playfair Pullout */}
            <div className="py-12 md:py-16 text-center border-y border-border/80 my-8">
              <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground italic max-w-2xl mx-auto leading-tight">
                “Two users. One job. Different uncertainties.”
              </blockquote>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 03: RESEARCH APPROACH & DESIGN THINKING FRAMEWORK
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                02 • METHODOLOGY & APPROACH
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                A small qualitative study focused on behaviour, not volume.
              </h2>
              <p className="body-text text-base leading-relaxed">
                Rather than deploying mass surveys that mask nuanced personal friction, this exploratory investigation followed the Design Thinking framework to uncover authentic mental models, pricing conflicts, and coordination breakdowns.
              </p>
            </div>

            {/* DESIGN THINKING FRAMEWORK IMAGE (DISPLAYED FULL & UNCROPPED) */}
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
                <img
                  src={designThinking}
                  alt="Design Thinking Research Approach"
                  className="w-full h-auto object-contain block"
                />
              </div>
              <p className="text-xs font-mono text-muted-foreground px-1">
                Design Thinking Framework: Empathize • Define • Ideate • Prototype • Test
              </p>
            </div>

            {/* 4 Clean Editorial Numbered Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border/70">
              <div className="space-y-3">
                <span className="font-display text-5xl text-[#FF7300] font-light block">01</span>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block font-bold">
                  4 IN-DEPTH SESSIONS
                </span>
                <h4 className="font-display text-xl text-foreground font-semibold">
                  Semi-Structured Interviews
                </h4>
                <p className="body-text text-base leading-relaxed">
                  2 customers who had recently hired local service professionals, and 2 independent service professionals familiar with handling customer enquiries and bookings.
                </p>
                <p className="text-xs font-mono text-[#FF7300] pt-1">
                  Purpose: Understand trust, discovery, job evaluation, pricing and coordination from both sides.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-display text-5xl text-muted-foreground/40 font-light block">02</span>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block font-bold">
                  ECOSYSTEM BENCHMARK
                </span>
                <h4 className="font-display text-xl text-foreground font-semibold">
                  Competitive Review
                </h4>
                <p className="body-text text-base leading-relaxed">
                  Reviewed local and international service marketplaces to understand operational tradeoffs across platforms.
                </p>
                <p className="text-xs font-mono text-[#FF7300] pt-1">
                  Focus: discovery models, trust signals, booking, matching, payment, and provider control.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-display text-5xl text-muted-foreground/40 font-light block">03</span>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block font-bold">
                  JOURNEY TRACE
                </span>
                <h4 className="font-display text-xl text-foreground font-semibold">
                  Workflow Mapping
                </h4>
                <p className="body-text text-base leading-relaxed">
                  Reconstructed the service journey from physical household breakdown to repeat hiring.
                </p>
                <p className="text-xs font-mono text-[#FF7300] pt-1">
                  Path: Need → Finding someone → Contact → Scope discussion → Booking → Service → Payment → Repeat hiring.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-display text-5xl text-muted-foreground/40 font-light block">04</span>
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block font-bold">
                  PROTOTYPE EVALUATION
                </span>
                <h4 className="font-display text-xl text-foreground font-semibold">
                  Usability Testing
                </h4>
                <p className="body-text text-base leading-relaxed">
                  Used the resulting prototype to test major assumptions around provider comparison, booking, availability, request information, pricing, and provider job evaluation.
                </p>
                <p className="text-xs font-mono text-[#FF7300] pt-1">
                  Short moderated usability sessions were used to identify major comprehension and workflow issues.
                </p>
              </div>
            </div>

            {/* Professional Disclaimer */}
            <div className="text-center pt-2">
              <p className="text-xs font-mono text-muted-foreground italic">
                “The study was exploratory rather than statistically representative; the goal was to uncover behaviours and design opportunities.”
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 04: CURRENT-STATE WORKFLOW
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                03 • CURRENT STATE
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                The current experience is fragmented before the job even begins.
              </h2>
              <p className="body-text text-base leading-relaxed">
                Users are not suffering from a single impossible step. The friction comes from coordinating all of them across disjointed informal channels.
              </p>
            </div>

            {/* Visual Multi-Channel Service Journey Diagram */}
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                <img
                  src={todayDiagram}
                  alt="Fragmented Multi-Channel Service Journey: How people handle home services today"
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* Perspective Callouts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block">
                    CUSTOMER
                  </span>
                  <blockquote className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
                    “There isn't one impossible step. The friction comes from coordinating all of them.”
                  </blockquote>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-bold block">
                    PROFESSIONAL
                  </span>
                  <blockquote className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed">
                    “Important job information is often spread across calls, messages and photos.”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 05: COMPETITOR SPECTRUM
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                04 • COMPETITIVE BENCHMARK
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                The category already exists — but the operating models are different.
              </h2>
              <p className="body-text text-base leading-relaxed">
                Rather than asking whether service marketplaces already existed, I looked at how different products distributed trust, control and responsibility between customers, professionals and the platform.
              </p>
            </div>

            <CompetitorSpectrum />
          </div>
        </section>

        {/* =========================================================================
            SECTION 06: THE FIVE TENSIONS
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                05 • CORE THEMES
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                The conversations repeatedly returned to five tensions.
              </h2>
              <p className="body-text text-base leading-relaxed">
                Across the interviews and workflow analysis, five recurring themes stood out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-4 border-t border-border/70">
              {[
                {
                  num: "01",
                  title: "TRUST",
                  quote: "Can I trust this person with the job — and inside my home?",
                  signals: "verification / work evidence / reviews / reliability",
                },
                {
                  num: "02",
                  title: "PRICE",
                  quote: "What am I agreeing to pay?",
                  signals: "estimates / pricing model / changes / approval",
                },
                {
                  num: "03",
                  title: "RELIABILITY",
                  quote: "Are they actually available — and will they arrive?",
                  signals: "availability / responsiveness / schedule / status",
                },
                {
                  num: "04",
                  title: "JOB FIT",
                  quote: "Can this professional actually solve this problem?",
                  signals: "service expertise / photos / job type / location",
                },
                {
                  num: "05",
                  title: "CONTROL",
                  quote: "What happens when something changes?",
                  signals: "rescheduling / scope / cancellation / dispute",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <span className="font-display text-6xl md:text-7xl text-[#FF7300] font-light block leading-none">
                    {item.num}
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-mono text-sm tracking-wider uppercase font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-display text-lg text-foreground italic leading-snug">
                      “{item.quote}”
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/50">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block mb-1">
                      Signals
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                      {item.signals}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 07: KEY QUALITATIVE FINDINGS
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                06 • QUALITATIVE FINDINGS
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                The research changed what I thought the product needed to solve.
              </h2>
              <p className="body-text text-base leading-relaxed">
                Qualitative field enquiry challenged standard assumptions about search volume and discoverability.
              </p>
            </div>

            {/* FINDING 01: Visually Dominant Editorial Finding */}
            <div className="py-10 border-y-2 border-[#FF7300] space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7300] font-bold block">
                FINDING 01 • STRATEGIC CORE (DOMINANT FINDING)
              </span>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-normal max-w-4xl leading-tight">
                “Finding a name wasn't the hardest part. Reducing uncertainty was.”
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-muted-foreground block font-semibold">
                    Explanation
                  </span>
                  <p className="body-text text-base leading-relaxed">
                    Customers already had ways of finding professionals through recommendations, social platforms and online search. The harder question was whether an unfamiliar professional would be suitable and reliable.
                  </p>
                </div>

                <div className="space-y-2 md:border-l md:border-border md:pl-8">
                  <span className="text-xs font-mono uppercase text-[#FF7300] block font-semibold">
                    Design Implication
                  </span>
                  <p className="text-base text-foreground font-medium leading-relaxed font-body">
                    Shift HANDY from <strong className="text-foreground">discovery-first toward confidence-first</strong>. Prioritize verified work proof, transparent escrow hold, and mutual reliability over endless listings.
                  </p>
                </div>
              </div>
            </div>

            {/* Findings 02 through 05 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
              <div className="space-y-3 pb-8 border-b border-border/60">
                <span className="text-xs font-mono uppercase text-[#FF7300] font-bold block">
                  FINDING 02
                </span>
                <h4 className="font-display text-2xl text-foreground font-medium">
                  “A rating alone wasn't enough to create trust.”
                </h4>
                <p className="body-text text-base leading-relaxed">
                  Participants looked for combinations of: previous work, relevant reviews, verification, responsiveness, experience, availability.
                </p>
                <p className="text-base font-medium text-foreground font-body pt-1">
                  <strong className="text-[#FF7300]">Design implication:</strong> Create a layered trust system rather than making star ratings the primary signal.
                </p>
              </div>

              <div className="space-y-3 pb-8 border-b border-border/60">
                <span className="text-xs font-mono uppercase text-[#FF7300] font-bold block">
                  FINDING 03
                </span>
                <h4 className="font-display text-2xl text-foreground font-medium">
                  “Customers described symptoms, not technical services.”
                </h4>
                <p className="body-text text-base leading-relaxed">
                  Someone might say: <em>“My sink is leaking”</em> rather than: <em>“I need a valve replacement.”</em>
                </p>
                <p className="text-base font-medium text-foreground font-body pt-1">
                  <strong className="text-[#FF7300]">Design implication:</strong> Allow customers to describe the problem naturally alongside traditional category browsing.
                </p>
              </div>

              <div className="space-y-3 pb-8 border-b border-border/60">
                <span className="text-xs font-mono uppercase text-[#FF7300] font-bold block">
                  FINDING 04
                </span>
                <h4 className="font-display text-2xl text-foreground font-medium">
                  “Professionals cared about the quality of the opportunity.”
                </h4>
                <p className="body-text text-base leading-relaxed">
                  A request could be unattractive because: it was too far away, information was missing, timing conflicted with another job, expected value was too low.
                </p>
                <p className="text-base font-medium text-foreground font-body pt-1">
                  <strong className="text-[#FF7300]">Design implication:</strong> Give professionals relevant context before they accept.
                </p>
              </div>

              <div className="space-y-3 pb-8 border-b border-border/60">
                <span className="text-xs font-mono uppercase text-[#FF7300] font-bold block">
                  FINDING 05
                </span>
                <h4 className="font-display text-2xl text-foreground font-medium">
                  “Unexplained price changes created more tension than uncertain prices.”
                </h4>
                <p className="body-text text-base leading-relaxed">
                  Participants understood that repairs cannot always be accurately priced before inspection. The problem was when costs changed without a clear reason or agreement.
                </p>
                <p className="text-base font-medium text-foreground font-body pt-1">
                  <strong className="text-[#FF7300]">Design implication:</strong> Use transparent estimates and customer-approved scope changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 08: CONDENSED INTERVIEW INSIGHTS (PULL QUOTES)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF7300] font-semibold block mb-1">
                  INTERVIEW INSIGHTS
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
                  Condensed Interview Insights
                </h3>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                Representative Research Themes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                  CUSTOMER
                </span>

                <div className="space-y-8">
                  <blockquote className="space-y-2 border-l-2 border-[#FF7300] pl-6">
                    <p className="font-display text-2xl md:text-3xl text-foreground italic leading-snug">
                      “Finding someone isn't hard. Knowing whether they'll actually show up is.”
                    </p>
                  </blockquote>

                  <blockquote className="space-y-2 border-l-2 border-[#FF7300] pl-6">
                    <p className="font-display text-2xl md:text-3xl text-foreground italic leading-snug">
                      “I would pay a little more if I felt confident the person was reliable.”
                    </p>
                  </blockquote>

                  <blockquote className="space-y-2 border-l-2 border-[#FF7300] pl-6">
                    <p className="font-display text-2xl md:text-3xl text-foreground italic leading-snug">
                      “I don't know the technical name of the problem. I just know something is leaking.”
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="space-y-8">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold block">
                  PROFESSIONAL
                </span>

                <div className="space-y-8">
                  <blockquote className="space-y-2 border-l-2 border-emerald-500 pl-6">
                    <p className="font-display text-2xl md:text-3xl text-foreground italic leading-snug">
                      “A photo tells me much more than a long phone call.”
                    </p>
                  </blockquote>

                  <blockquote className="space-y-2 border-l-2 border-emerald-500 pl-6">
                    <p className="font-display text-2xl md:text-3xl text-foreground italic leading-snug">
                      “A small job far away may not be worth travelling for.”
                    </p>
                  </blockquote>

                  <blockquote className="space-y-2 border-l-2 border-emerald-500 pl-6">
                    <p className="font-display text-2xl md:text-3xl text-foreground italic leading-snug">
                      “If more work is needed, the customer should agree before I continue.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 09: USER PERSONAS (REAL ARTWORK SHOWCASED)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                07 • USER PERSONAS
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                Designing around behaviour rather than demographics.
              </h2>
              <p className="body-text text-base leading-relaxed">
                The research suggested distinct behaviours on both sides of the marketplace: customers planning household work, customers dealing with more urgent problems, and professionals deciding whether an opportunity is worth accepting.
              </p>
            </div>

            {/* REAL PERSONAS SHOWCASE (BIG, FULL-WIDTH STACKED SHOWCASE SO ALL LETTERS ARE CLEARLY LEGIBLE) */}
            <div className="space-y-20 max-w-5xl mx-auto pt-6">
              {/* Persona 01 */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/70 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-base font-bold text-[#FF7300]">01</span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
                      Primary Customer Persona — Trust-First Household Manager
                    </h3>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold">
                    Primary Household Decision Maker
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                  <img
                    src={persona1}
                    alt="Primary Customer Persona: Trust-first household manager"
                    className="w-full h-auto object-contain block"
                  />
                </div>
                <p className="body-text text-base text-muted-foreground italic px-1">
                  “I don't mind paying reasonable rates, but I need certainty that the person entering my home is vetted, transparent, and will show up on schedule.”
                </p>
              </div>

              {/* Persona 02 */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/70 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-base font-bold text-[#FF7300]">02</span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
                      Secondary Customer Persona — Urgent Problem Solver
                    </h3>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold">
                    Emergency Repair Need
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                  <img
                    src={persona2}
                    alt="Secondary Customer Persona: Urgent problem solver"
                    className="w-full h-auto object-contain block"
                  />
                </div>
                <p className="body-text text-base text-muted-foreground italic px-1">
                  “When water is spraying from a pipe, I don't have time to browse 20 listings. I need an available plumber near me right now with transparent arrival times.”
                </p>
              </div>

              {/* Persona 03 */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/70 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-base font-bold text-emerald-600">03</span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
                      Service Professional Persona — Independent Local Tradesperson
                    </h3>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
                    Independent Trade Professional
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                  <img
                    src={persona3}
                    alt="Service Professional Persona: Independent local professional"
                    className="w-full h-auto object-contain block"
                  />
                </div>
                <p className="body-text text-base text-muted-foreground italic px-1">
                  “Show me photos of the actual problem and tell me where the customer is located before asking me to accept. Travelling across town for a 15-minute job loses me money.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: JOBS TO BE DONE (JTBD)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                08 • JOBS TO BE DONE
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                What each side is actually hiring HANDY to do.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 border-t border-border/70">
              <div className="space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                  CUSTOMER
                </span>

                <div className="space-y-4">
                  {[
                    "When something in my home needs attention, help me find someone suitable without making me gamble on their reliability.",
                    "Help me understand what I'm likely agreeing to pay.",
                    "Help me know what happens after I book.",
                  ].map((job, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-base text-foreground font-medium leading-relaxed pb-3 border-b border-border/30">
                      <span className="text-[#FF7300]">→</span>
                      <span>“{job}”</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold block">
                  PROFESSIONAL
                </span>

                <div className="space-y-4">
                  {[
                    "When a request arrives, help me decide whether it fits my skill, area and schedule before I commit.",
                    "Help me avoid wasted travel and unclear job scopes.",
                    "Help me get paid reliably and build a reputation through successful work.",
                  ].map((job, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-base text-foreground font-medium leading-relaxed pb-3 border-b border-border/30">
                      <span className="text-emerald-600">→</span>
                      <span>“{job}”</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* HANDY'S JOB Centerpiece */}
            <div className="py-12 border-y-2 border-[#FF7300] text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7300] font-bold block">
                HANDY'S JOB
              </span>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground font-normal tracking-tight">
                “Reduce uncertainty on both sides.”
              </h3>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: THE PROBLEM STATEMENT & CORE HMW
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="p-8 md:p-14 lg:p-16 rounded-3xl border border-[#FF7300]/25 bg-gradient-to-br from-[#FF7300]/[0.05] via-card/95 to-background shadow-sm backdrop-blur-md relative overflow-hidden space-y-12">
            {/* Ambient decorative glow */}
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#FF7300]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 max-w-3xl relative z-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7300] font-bold block">
                THE PROBLEM
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-normal leading-[1.15]">
                “Customers didn't need more listings.
                Professionals didn't need more leads.”
              </h2>
              <h3 className="font-display text-2xl sm:text-3xl text-muted-foreground font-light italic">
                “Customers needed confidence.
                Professionals needed context.”
              </h3>
              <p className="body-text text-base leading-relaxed pt-2">
                Hiring local service professionals is often fragmented across recommendations, phone calls and informal messaging. Customers struggle to evaluate reliability, availability and pricing. Professionals receive incomplete enquiries, manage schedules independently and risk wasted travel.
              </p>
            </div>

            {/* Centerpiece Design Question */}
            <div className="pt-10 border-t border-border/70 space-y-8 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                THE DESIGN QUESTION BECAME
              </span>

              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground font-normal max-w-4xl leading-snug">
                “How might we make hiring an unfamiliar local professional feel as predictable as using an established service company — without removing the flexibility independent professionals need?”
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-sm">
                {[
                  "How might we communicate trust beyond ratings?",
                  "How might we make availability believable?",
                  "How might we prevent unexplained price changes?",
                  "How might we give professionals enough context before they accept?",
                ].map((q, idx) => (
                  <div key={idx} className="space-y-2 border-t border-border/70 pt-3">
                    <span className="text-[#FF7300] font-mono font-bold block text-xs">0{idx + 1}</span>
                    <p className="text-foreground text-sm font-medium leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: USER JOURNEY MAPS (REAL ARTWORK SHOWCASED)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                09 • JOURNEY MAPPING
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                The service is one journey viewed from two sides.
              </h2>
              <p className="body-text text-base leading-relaxed">
                Mapping the detailed touchpoints, expectations, and emotional states of both customers and service professionals through the physical lifecycle of a repair.
              </p>
            </div>

            {/* REAL USER JOURNEY MAPS (UNCROPPED, NATURAL RESOLUTION) */}
            <div className="space-y-16 pt-4">
              {/* Customer Journey Map */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <h3 className="font-display text-2xl text-foreground font-medium">
                    Customer Journey Map
                  </h3>
                  <span className="text-xs font-mono text-[#FF7300] uppercase font-bold">
                    Need → Search → Compare → Book → Wait → Service → Complete → Rebook
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                  <img
                    src={customerJourneyMap}
                    alt="Customer Journey Map"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>

              {/* Professional Journey Map */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-2">
                  <h3 className="font-display text-2xl text-foreground font-medium">
                    Professional Journey Map
                  </h3>
                  <span className="text-xs font-mono text-emerald-600 uppercase font-bold">
                    Opportunity → Evaluate → Accept → Prepare → Service → Complete → Get paid
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border bg-card">
                  <img
                    src={professionalJourneyMap}
                    alt="Professional Journey Map"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 13: SYNCHRONIZED SERVICE BLUEPRINT
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                10 • SERVICE BLUEPRINT
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                One service, three synchronized experiences.
              </h2>
            </div>

            <ServiceBlueprint />
          </div>
        </section>

        {/* =========================================================================
            SECTION 14: STRATEGIC PIVOT & 4 PRODUCT PRINCIPLES
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                11 • STRATEGIC FOUNDATION
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                From marketplace to reliability system.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 border-t border-border/70">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-bold block">
                  BEFORE
                </span>
                <h4 className="font-display text-2xl text-foreground font-medium">
                  Help people find nearby handymen.
                </h4>
                <div className="pt-1">
                  <span className="text-xs font-mono text-muted-foreground block mb-1">Focus</span>
                  <p className="body-text text-base font-mono">discovery • profiles • booking</p>
                </div>
              </div>

              <div className="space-y-3 md:border-l md:border-border md:pl-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                  AFTER
                </span>
                <h4 className="font-display text-2xl text-foreground font-semibold">
                  Make every stage of a home-service job more predictable.
                </h4>
                <div className="pt-1">
                  <span className="text-xs font-mono text-[#FF7300] block mb-1">Focus</span>
                  <p className="body-text text-base font-mono font-medium text-foreground">
                    trust • fit • availability • scope • price • status • completion • accountability
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-border/60">
              {[
                { num: "01", title: "TRUST IS EVIDENCE, NOT DECORATION.", desc: "Show previous work, verified reviews, and background status rather than decorative stars." },
                { num: "02", title: "AVAILABILITY MUST MEAN SOMETHING.", desc: "Replace vague green dots with verified, bookable calendar slots." },
                { num: "03", title: "NO UNEXPLAINED PRICE SURPRISES.", desc: "Estimates are transparent. Any scope shift requires customer digital authorization." },
                { num: "04", title: "BOTH SIDES NEED CONTROL.", desc: "Protect customers with escrow while giving professionals full context before acceptance." },
              ].map((p, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#FF7300] block">0{idx + 1}</span>
                  <h5 className="font-mono text-xs uppercase font-bold text-foreground leading-snug">
                    {p.title}
                  </h5>
                  <p className="body-text text-sm sm:text-base leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 15: EVIDENCE-TO-DESIGN DECISION MATRIX (NO IMAGES, EDITORIAL)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <span className="project-tag inline-block">
                12 • INSIGHT TO INTERFACE
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-normal">
                Research was useful only when it changed the product.
              </h2>
              <p className="body-text text-base leading-relaxed">
                Direct translation of qualitative findings into concrete system architecture — connecting observed customer and professional friction directly to interface decisions.
              </p>
            </div>

            <div className="space-y-10 pt-6 border-t border-border/70">
              {[
                {
                  num: "01",
                  obsTitle: "Trust is Cumulative, Not Numerical",
                  obs: "Customers never relied on a single star rating. They mentally synthesized past work photos, specific review narratives, license verification, job completion count, and response speed.",
                  respTitle: "Multi-Signal Trust Profile Architecture",
                  resp: "Replaced standard star ratings with a comprehensive credibility header: verified identity, trade licenses, authentic job-site photo galleries, and response time metrics.",
                },
                {
                  num: "02",
                  obsTitle: "Symptom-Driven Problem Descriptions",
                  obs: "Homeowners describe breakdowns using sensory symptoms ('water pooling behind fridge', 'circuit trips on wash cycle') rather than formal trade classifications ('appliance solenoid valve replacement').",
                  respTitle: "Natural Language & Visual Problem Intake",
                  resp: "Built an intuitive, problem-led intake flow allowing photo/video upload, symptom tags, and plain-text descriptions that automatically route to relevant trade categories.",
                },
                {
                  num: "03",
                  obsTitle: "Opportunity Evaluation Before Acceptance",
                  obs: "Professionals decline or ignore vague requests because they cannot determine travel feasibility, parking, actual scope, or earning viability without time-consuming back-and-forth.",
                  respTitle: "High-Context Provider Request Cards",
                  resp: "Provided tradespeople with immediate clarity upfront: exact neighborhood location, estimated travel time from current site, clear photos of the physical issue, and customer schedule flexibility.",
                },
                {
                  num: "04",
                  obsTitle: "Mid-Job Scope & Pricing Friction",
                  obs: "The most volatile moment in home services occurs when hidden damage is discovered mid-job and costs increase unexpectedly, creating immediate distrust and customer pushback.",
                  respTitle: "Two-Party Digital Scope Change Flow",
                  resp: "Engineered an in-app photographic change-order system requiring clear before-photos, itemized cost adjustment, and customer digital sign-off before additional work can proceed.",
                },
                {
                  num: "05",
                  obsTitle: "Retention Over Constant Rediscovery",
                  obs: "Once a customer finds an honest, punctual professional, they desperately want to keep their direct contact for future maintenance rather than starting a cold search again.",
                  respTitle: "Direct Client Roster & 1-Click Rebooking",
                  resp: "Designed a dedicated 'My Tradespeople' bookmarking and rebooking interface, enabling seamless recurring service calls without forcing rediscovery from scratch.",
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-border/40 last:border-b-0"
                >
                  {/* Left Column: Observation */}
                  <div className="md:col-span-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#FF7300] font-bold">
                        OBSERVATION {row.num}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-foreground font-semibold">
                      {row.obsTitle}
                    </h3>
                    <p className="body-text text-base text-muted-foreground leading-relaxed">
                      {row.obs}
                    </p>
                  </div>

                  {/* Center Column: Directional Connector */}
                  <div className="hidden md:flex md:col-span-2 justify-center pt-8 text-[#FF7300]">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF7300]/30 bg-[#FF7300]/5">
                      <span className="text-xs font-mono font-bold text-[#FF7300]">TRANSLATES TO</span>
                      <ArrowRight className="w-4 h-4 text-[#FF7300]" />
                    </div>
                  </div>

                  {/* Right Column: Design Response */}
                  <div className="md:col-span-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-emerald-600 font-bold">
                        DESIGN RESPONSE
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-foreground font-semibold">
                      {row.respTitle}
                    </h3>
                    <p className="body-text text-base text-foreground/90 leading-relaxed font-medium">
                      {row.resp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 16: FEATURE PRIORITIZATION (MOSCOW)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                13 • SCOPE PRIORITIZATION
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                What needed to exist first?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4 border-t border-border/70">
              <div className="space-y-4">
                <div className="border-b-2 border-[#FF7300] pb-2">
                  <h3 className="font-display text-2xl text-foreground font-semibold">
                    MUST HAVE
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/90 font-medium">
                  {[
                    "service discovery",
                    "professional profiles",
                    "availability",
                    "detailed requests",
                    "job photos",
                    "accept / decline",
                    "bookings",
                    "communication",
                    "service areas",
                    "payment",
                    "job status",
                    "reviews",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7300]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="border-b-2 border-border pb-2">
                  <h3 className="font-display text-2xl text-foreground font-semibold">
                    SHOULD HAVE
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {[
                    "alternate-time proposal",
                    "scope-change approval",
                    "arrival status",
                    "repeat booking",
                    "cancellation/refund handling",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="border-b-2 border-border pb-2">
                  <h3 className="font-display text-2xl text-foreground font-semibold">
                    LATER
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "maintenance reminders",
                    "provider route optimization",
                    "property-management tools",
                    "subscriptions",
                    "multi-provider projects",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 17: TECHNICAL ARCHITECTURE (STATE MACHINE)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <StateMachineVisualizer />
        </section>

        {/* =========================================================================
            SECTION 18: CRITICAL INTERACTION: SCOPE CHANGE
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="project-tag inline-block">
                14 • CRITICAL INTERACTION
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                The happy path wasn't the most interesting problem.
              </h2>
              <h3 className="font-display text-xl sm:text-2xl text-muted-foreground font-light italic">
                “What happens when the job changes after the professional arrives?”
              </h3>
            </div>

            <ScopeChangeWalkthrough />
          </div>
        </section>

        {/* =========================================================================
            SECTION 19: USABILITY TESTING INSIGHTS
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                15 • QUALITATIVE USABILITY INSIGHTS
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                Testing exposed where the interface contradicted users' expectations.
              </h2>
            </div>

            <div className="space-y-8 pt-4 border-t border-border/70">
              {[
                {
                  num: "01",
                  obs: "Customers hesitated when asked to choose technical service categories.",
                  why: "They understood the problem but not necessarily its professional classification.",
                  chg: "Added a problem-first route.",
                },
                {
                  num: "02",
                  obs: "“Available” was interpreted as meaning available immediately.",
                  why: "The status created a false expectation.",
                  chg: "Replaced vague availability with specific next available times.",
                },
                {
                  num: "03",
                  obs: "Professionals wanted distance and photos before investing time in a request.",
                  why: "Both factors affected whether a job was worth accepting.",
                  chg: "Surfaced job location and visual context earlier.",
                },
                {
                  num: "04",
                  obs: "Customers treated an estimated total as a fixed quote.",
                  why: "Future changes could feel dishonest.",
                  chg: "Clarified pricing states and introduced scope-change approval.",
                },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-border/40 last:border-b-0 items-start">
                  <div className="md:col-span-2">
                    <span className="text-sm font-mono font-bold text-[#FF7300]">
                      TEST FINDING {item.num}
                    </span>
                  </div>

                  <div className="md:col-span-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase text-muted-foreground block font-semibold">OBSERVED</span>
                      <p className="body-text text-base font-medium leading-relaxed">{item.obs}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase text-amber-600 block font-semibold">WHY IT MATTERED</span>
                      <p className="body-text text-base leading-relaxed">{item.why}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-xs uppercase text-emerald-600 block font-semibold">CHANGED</span>
                      <p className="text-foreground font-bold text-base leading-relaxed font-body">{item.chg}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 20: LOW-FIDELITY WIREFRAMES & PROTOTYPING
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="project-tag inline-block">
                16 • LOW-FIDELITY PROTOTYPING
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                Early Structural Wireframes: Mapping Core User Flows
              </h2>
              <p className="body-text text-base leading-relaxed">
                Before committing to high-fidelity visual styling, low-fidelity wireframes were developed to map spatial hierarchy, test information density, and validate core interactions across both customer intake and technician evaluation flows.
              </p>
            </div>

            <LowFiGallery />
          </div>
        </section>

        {/* =========================================================================
            SECTION 21: DESIGN SYSTEM & COMPONENT ARCHITECTURE
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="project-tag inline-block">
                17 • DESIGN SYSTEM & COMPONENT ARCHITECTURE
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                Foundational Design System: Atoms, Tokens & Dual-Sided Consistency
              </h2>
              <p className="body-text text-base leading-relaxed">
                To guarantee visual coherence, rapid interaction velocity, and strict accessibility standards across both customer and service provider portals, a comprehensive design system was established. Spanning atomic tokens, semantic color mappings, accessible typography scales, and stateful components, the system anchors trust into every physical-digital touchpoint.
              </p>
            </div>

            {/* 4 Architectural Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="p-5 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                  01 • COLOR SEMANTICS
                </span>
                <h4 className="font-display text-lg text-foreground font-semibold">
                  Purposeful Palette
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Warm safety orange (#FF7300) for primary actions, paired with calm slate neutrals, emerald for verified states, and cautionary amber for scope modifications.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                  02 • TYPOGRAPHY SCALE
                </span>
                <h4 className="font-display text-lg text-foreground font-semibold">
                  Dual-Type Harmony
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Playfair Display delivers editorial warmth and brand authority, while Inter powers crystal-clear, high-density data tables and technician dispatch screens.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                  03 • ATOMIC COMPONENTS
                </span>
                <h4 className="font-display text-lg text-foreground font-semibold">
                  Modular Consistency
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engineered reusable form inputs, photo uploaders, calendar time-slot selectors, and verified technician identity chips shared across platforms.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border/80 bg-card/80 backdrop-blur-sm space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                  04 • ACCESSIBILITY & STATES
                </span>
                <h4 className="font-display text-lg text-foreground font-semibold">
                  Predictable Statuses
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WCAG AA compliant contrast ratios across light and dark contexts, complete with hover, active, disabled, loading, and error states.
                </p>
              </div>
            </div>

            {/* Design System Image Showcase with Click-to-Zoom */}
            <div className="space-y-3">
              <div
                onClick={() => setShowDesignSystemModal(true)}
                className="group relative rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-card cursor-pointer hover:border-[#FF7300]/40 transition-all duration-300"
              >
                <img
                  src={designSystemImg}
                  alt="HANDY Comprehensive Design System"
                  className="w-full h-auto object-contain block group-hover:scale-[1.008] transition-transform duration-500"
                />
                {/* Hover zoom overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/90 text-foreground backdrop-blur-md shadow-lg border border-border/60 text-xs font-mono font-bold">
                    <Maximize2 className="w-4 h-4 text-[#FF7300]" />
                    <span>Click to Expand Design System</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-muted-foreground pt-1 px-1">
                <span>HANDY Design System — Colors, Typography, Buttons, Inputs & Multi-Platform Components</span>
                <span>Click image to view in high resolution</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 22: DEDICATED BEAUTIFUL UI GALLERY (COOKIE STYLE)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="project-tag inline-block">
                18 • HIGH-FIDELITY PRODUCT INTERFACES
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                Interface Gallery: Translating Qualitative Insights into Product
              </h2>
              <p className="body-text text-base leading-relaxed">
                Explore the dual-sided interface design system connecting customer discovery with technician dispatch and escrow reliability.
              </p>
            </div>

            <UIGallery />
          </div>
        </section>

        {/* =========================================================================
            SECTION 23: STRATEGY & EVALUATION METRICS (NO BOXY CARDS!)
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-28 md:mb-36">
          <div className="space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="project-tag inline-block">
                19 • PRODUCT STRATEGY
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                The outcome wasn't more features.
                It was a clearer product strategy.
              </h2>
            </div>

            {/* Large Statement */}
            <div className="py-8 border-y border-border/80">
              <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-normal italic">
                “Reduce uncertainty on both sides.”
              </blockquote>
            </div>

            {/* Tri-Fold Editorial Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold block">
                  FOR CUSTOMERS
                </span>
                <p className="text-base text-foreground/90 font-mono leading-relaxed">
                  Who? • When? • How much? • What happens next?
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold block">
                  FOR PROFESSIONALS
                </span>
                <p className="text-base text-foreground/90 font-mono leading-relaxed">
                  What job? • Where? • When? • Is it worth accepting?
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block">
                  FOR HANDY
                </span>
                <p className="body-text text-base text-foreground font-medium leading-relaxed">
                  Can both sides successfully complete the service?
                </p>
              </div>
            </div>

            {/* Metrics Framework (NO BOXY CARDS) */}
            <div className="space-y-6 pt-12 border-t border-border/70">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF7300] font-semibold block mb-1">
                  EVALUATION METRICS
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-medium">
                  Designing for successful services, not screen engagement.
                </h3>
              </div>

              <div className="space-y-2 py-4">
                <span className="text-xs font-mono uppercase text-muted-foreground block font-semibold">
                  PRIMARY METRIC
                </span>
                <h4 className="font-display text-2xl md:text-3xl text-foreground font-bold">
                  SUCCESSFULLY COMPLETED TRUSTED BOOKINGS
                </h4>
              </div>

              <div className="space-y-4 pt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] block font-bold">
                  SUPPORTING METRICS (FUTURE PRODUCT KPIS)
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-sm pt-2">
                  {[
                    { name: "TIME TO MATCH", desc: "Dispatch latency to first accepted verified professional" },
                    { name: "REQUEST ACCEPTANCE", desc: "Percentage of dispatched requests accepted within SLA" },
                    { name: "PROVIDER RESPONSE TIME", desc: "Average response turnaround to customer inquiries" },
                    { name: "NO-SHOW RATE", desc: "Missed scheduled appointments or unexcused delays" },
                    { name: "COMPLETION RATE", desc: "Jobs started that reach confirmed customer sign-off" },
                    { name: "DISPUTE RATE", desc: "Transactions requiring platform mediation" },
                    { name: "REPEAT BOOKING", desc: "Customers hiring the same saved professional directly" },
                    { name: "PROVIDER RETENTION", desc: "Active tradespeople retained over 90+ days" },
                  ].map((m, idx) => (
                    <div key={idx} className="flex items-baseline justify-between py-2 border-b border-border/40 text-xs font-mono">
                      <span className="font-bold text-foreground tracking-wider">{m.name}</span>
                      <span className="text-muted-foreground text-right pl-4">{m.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 24: FUTURE INQUIRY & EDITORIAL CONCLUSION
        ========================================================================= */}
        <section className="container mx-auto px-6 md:px-12 lg:px-20 mb-20 md:mb-28">
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="project-tag inline-block">
                20 • FUTURE HORIZONS
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground font-normal">
                What I would investigate next.
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4 text-sm">
                {[
                  "repeat booking + saved professionals",
                  "cancellation and dispute recovery",
                  "English / Sinhala / Tamil localization",
                  "maintenance history",
                  "provider route planning",
                  "accessibility testing with older users",
                  "low-bandwidth behaviour",
                  "deeper pricing-model research",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 pb-3 border-b border-border/50">
                    <span className="text-[#FF7300] font-mono font-bold">0{idx + 1}</span>
                    <span className="text-foreground font-medium capitalize font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Minimal Full-Width Ending */}
            <div className="py-16 md:py-24 border-t border-border/80 text-center space-y-8">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7300] font-semibold block">
                HANDY / RESEARCH CONCLUSION
              </span>

              <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground font-normal max-w-4xl mx-auto leading-tight">
                “Customers don't need more listings.
                They need less uncertainty.
                Professionals don't need more leads.
                They need better opportunities.”
              </blockquote>

              <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/#projects"
                  className="btn-outline text-xs uppercase tracking-widest px-8 py-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View More Projects
                </Link>
                <a
                  href="https://www.figma.com/design/VQgSh1hEHEh2nmfk3OnUvn/Handiman-Web?node-id=21-2&t=Qyb9S356So8sYYEu-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-foreground text-background px-8 py-4 rounded-full text-xs uppercase tracking-widest hover:opacity-90 inline-flex items-center gap-2"
                >
                  <span>View on Figma</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Design System Lightbox Modal */}
        {showDesignSystemModal && (
          <div
            onClick={() => setShowDesignSystemModal(false)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-6xl w-full bg-card rounded-2xl overflow-hidden border border-border shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-border/60 bg-muted/20">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF7300] font-bold">
                  HANDY Comprehensive Design System — High Resolution View
                </span>
                <button
                  onClick={() => setShowDesignSystemModal(false)}
                  className="p-1.5 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-auto p-4 sm:p-6 flex items-center justify-center bg-muted/10">
                <img
                  src={designSystemImg}
                  alt="HANDY Comprehensive Design System"
                  className="max-w-full h-auto object-contain rounded-xl shadow-md border border-border/50"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default HandyCaseStudy;
