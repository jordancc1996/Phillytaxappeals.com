import consultationImage from "@/assets/legal-consultation.jpg";

const consultationSrc =
  typeof consultationImage === "string" ? consultationImage : consultationImage.src;

const About = () => {
  return (
    <section className="py-48 px-12 md:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-[45%_55%] gap-20 items-start">
          <div className="space-y-10">
            <h2 className="font-display text-foreground leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              A Place of Fair Assessment
            </h2>
            <div className="space-y-7 text-foreground">
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                Philly Tax Appeals provides Philadelphia property tax appeal services built on relief and fairness for homeowners and businesses alike. We provide tax appeal solutions for our clients whether it be for residential or commercial real estate. Our assessments are accurate and have resulted in substantial savings for our clients.
              </p>
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                We work across{" "}
                <a href="/philadelphia-property-tax-appeal" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Philadelphia
                </a>
                , from{" "}
                <a href="/philadelphia-property-tax-appeal/center-city" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Center City
                </a>
                {" "}to{" "}
                <a href="/philadelphia-property-tax-appeal/northeast-philadelphia" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Northeast Philadelphia
                </a>
                . Philly Tax Appeals is based in the city and works with property owners who need a fair reading of their OPA assessment.
              </p>
            </div>
          </div>
          <div className="md:sticky md:top-24">
            <img 
              src={consultationSrc} 
              alt="Tax consultation meeting" 
              className="w-full h-auto"
              data-reveal
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
