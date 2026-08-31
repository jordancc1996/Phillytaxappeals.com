import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { philadelphiaAreas, PHILADELPHIA_HUB_HREF } from "../data/philadelphia-areas";

interface NavigationProps {
  variant?: "light" | "dark";
}

const links = [
  { href: "/", label: "Home" },
  { href: PHILADELPHIA_HUB_HREF, label: "Philadelphia" },
  { href: "/tools", label: "Tools" },
  { href: "/contact", label: "Contact" },
];

const navLinkClass = "hover:opacity-70 transition-opacity duration-150 ease-out";
const areaListClass = "space-y-3 text-sm font-body font-semibold text-foreground/70";
const areaLinkClass = "hover:text-foreground transition-colors duration-150 ease-out";

const Navigation = (_props: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

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
          {links.map((link) =>
            link.href === PHILADELPHIA_HUB_HREF ? (
              <div key={link.href + link.label} className="relative group">
                <div className="flex items-center gap-1">
                  <a href={link.href} className={navLinkClass}>
                    {link.label}
                  </a>
                  <button
                    type="button"
                    className="p-0.5 text-foreground hover:opacity-70 transition-opacity duration-150 ease-out"
                    aria-label="Philadelphia areas"
                    aria-haspopup="true"
                    aria-controls="philadelphia-areas-menu"
                  >
                    <span className="inline-flex transition-transform duration-150 ease-out group-hover:rotate-180 group-focus-within:rotate-180">
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                <div className="absolute top-full left-0 pt-2 z-50 hidden group-hover:block group-focus-within:block">
                  <ul
                    id="philadelphia-areas-menu"
                    className={`${areaListClass} min-w-[16rem] border border-border bg-background text-foreground/70 backdrop-blur-md shadow-sm py-4 px-5`}
                  >
                    {philadelphiaAreas.map((area) => (
                      <li key={area.slug}>
                        <a href={area.href} className={areaLinkClass}>
                          {area.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a key={link.href + link.label} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ),
          )}
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
          {links.map((link) =>
            link.href === PHILADELPHIA_HUB_HREF ? (
              <div key={`mobile-${link.href}-${link.label}`}>
                <div className="flex items-center justify-between gap-2">
                  <a href={link.href} className={navLinkClass} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                  <button
                    type="button"
                    className="p-1 text-foreground hover:opacity-70 transition-opacity duration-150 ease-out"
                    aria-label="Philadelphia areas"
                    aria-expanded={mobileAreasOpen}
                    onClick={() => setMobileAreasOpen((value) => !value)}
                  >
                    <span
                      className={`inline-flex transition-transform duration-150 ease-out ${mobileAreasOpen ? "rotate-180" : ""}`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </div>
                {mobileAreasOpen && (
                  <ul className={`${areaListClass} mt-3 ml-4`}>
                    <li>
                      <a href={PHILADELPHIA_HUB_HREF} className={areaLinkClass} onClick={() => setOpen(false)}>
                        All Philadelphia Areas
                      </a>
                    </li>
                    {philadelphiaAreas.map((area) => (
                      <li key={area.slug}>
                        <a href={area.href} className={areaLinkClass} onClick={() => setOpen(false)}>
                          {area.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={`mobile-${link.href}-${link.label}`}
                href={link.href}
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
