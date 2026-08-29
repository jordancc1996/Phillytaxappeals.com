import documentsImage from "@/assets/philosophy-homes.jpg";

const documentsSrc =
  typeof documentsImage === "string" ? documentsImage : documentsImage.src;

const Philosophy = () => {
  return (
    <section className="py-48 px-12 md:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-[55%_45%] gap-20 items-start">
          <div className="order-2 md:order-1 md:sticky md:top-24">
            <img 
              src={documentsSrc} 
              alt="Philadelphia row houses" 
              className="w-full h-auto"
              data-reveal
            />
          </div>
          <div className="order-1 md:order-2 space-y-10">
            <h2 className="font-display text-foreground leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
              Our Mission
            </h2>
            <div className="space-y-7 text-foreground">
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                Philly Tax Appeals is committed to providing transparent and professional reassessments with a focus on achieving savings for our clients. We combine local expertise with proven strategies to deliver results that matter. We're here to ensure your reassessment is a story told accurately.
              </p>
              <p className="text-xl md:text-2xl font-body leading-relaxed">
                The National Taxpayers Union estimates 60% of all United States properties are over assessed while fewer than 5% of homeowners appeal their assessments because they do not know they can. Philly Tax Appeals makes sure that our clients understand assessments and have an opportunity to take advantage of substantial savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
