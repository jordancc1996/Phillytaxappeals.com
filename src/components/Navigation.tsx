import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  variant?: "light" | "dark";
}

const links = [
  { href: "/", label: "Home" },
  { href: "/bucks-county-property-tax-appeal", label: "Bucks County" },
  { href: "/delaware-county-property-tax-appeal", label: "Delaware County" },
  { href: "/montgomery-county-property-tax-appeal", label: "Montgomery County" },
  { href: "/philadelphia-property-tax-appeal", label: "Philadelphia" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
];

const Navigation = (_props: NavigationProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-background/95 backdrop-blur-md shadow-sm border-b border-border">
      <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-4">
        <a
          href="/"
          className="text-xl md:text-2xl font-display font-light lowercase text-foreground hover:opacity-70 transition-opacity duration-150 ease-out shrink-0"
        >
          philly tax appeals
        </a>

        <div className="hidden lg:flex items-center gap-7 font-body text-sm font-semibold text-foreground">
          {links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              className="hover:opacity-70 transition-opacity duration-150 ease-out"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            className="lg:hidden p-2 text-foreground hover:opacity-70 transition-opacity duration-150 ease-out"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <a
            href="/contact"
            className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-body font-semibold hover:opacity-80 transition-opacity duration-150 ease-out"
          >
            Free Evaluation
          </a>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 font-body text-sm font-semibold text-foreground">
          {links.map((link) => (
            <a
              key={`mobile-${link.href}-${link.label}`}
              href={link.href}
              className="hover:opacity-70 transition-opacity duration-150 ease-out"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
