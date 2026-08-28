import heroImage from "@/assets/hero-philly-new.jpg";
import Navigation from "./Navigation";

const heroSrc = typeof heroImage === "string" ? heroImage : heroImage.src;

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay and Texture */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-reveal
          style={{ backgroundImage: `url(${heroSrc})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay'
          }} />
        </div>
      </div>

      <Navigation variant="light" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 pt-20">
        <h1 className="text-8xl md:text-9xl font-display mb-10 lowercase" style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: '1' }}>
          philly tax appeals
        </h1>
        <h2 className="text-3xl md:text-5xl font-display mb-10 font-normal">
          Reduce Your Property Taxes
        </h2>
        <p className="text-xs font-body tracking-[0.4em] uppercase mb-10">
          FOUNDED IN PHILADELPHIA
        </p>
        <p className="text-xl md:text-2xl font-display italic font-light">
          Expert Consultation • Professional Appeals • Proven Results
        </p>
      </div>
    </section>
  );
};

export default Hero;
