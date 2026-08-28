import { philadelphiaAreas, type PhiladelphiaArea } from "../data/philadelphia-areas";

interface PhiladelphiaAreasProps {
  variant?: "grid" | "compact";
  excludeSlug?: string;
  heading?: string;
}

const PhiladelphiaAreas = ({
  variant = "grid",
  excludeSlug,
  heading,
}: PhiladelphiaAreasProps) => {
  const areas: PhiladelphiaArea[] = excludeSlug
    ? philadelphiaAreas.filter((area) => area.slug !== excludeSlug)
    : philadelphiaAreas;

  if (variant === "compact") {
    return (
      <section className="max-w-7xl mx-auto px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6">
          {heading ?? "Other Philadelphia Areas We Serve"}
        </h2>
        <ul className="space-y-3 text-base font-body text-foreground/70">
          {areas.map((area) => (
            <li key={area.slug}>
              <a
                href={area.href}
                className="underline underline-offset-4 hover:opacity-70 transition-opacity duration-150 ease-out"
              >
                {area.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-12 md:py-16" aria-labelledby="areas-we-serve-heading">
      <h2
        id="areas-we-serve-heading"
        className="text-2xl md:text-3xl font-display font-normal text-foreground mb-12"
      >
        {heading ?? "Areas We Serve in Philadelphia"}
      </h2>
      <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
        {areas.map((area) => (
          <article key={area.slug}>
            <h3 className="text-xl md:text-2xl font-display font-normal text-foreground mb-4">
              <a
                href={area.href}
                className="underline underline-offset-4 hover:opacity-70 transition-opacity duration-150 ease-out"
              >
                {area.name}
              </a>
            </h3>
            <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PhiladelphiaAreas;
