import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Github, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About Me" },
    { href: "/#projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  const socialLinks = [
    {
      href: "https://github.com/OvindiVimasha",
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
    },
    {
      href: "mailto:ovindivimasha1015@gmail.com",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div>
            <span className="text-lg font-semibold tracking-tight">Ovindi Vimasha</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "nav-link",
                isActive(link.href) && "nav-link-active"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="nav-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "nav-link text-lg py-2",
                  isActive(link.href) && "nav-link-active"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-6 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  className="nav-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
