const Services = () => {
  const services = [
    {
      title: "Property Assessment Review",
      description: "Comprehensive analysis of your property's current assessment to identify opportunities for tax reduction."
    },
    {
      title: "Expert Representation",
      description: "Professional advocacy at appeal hearings with experienced consultants who know the system."
    },
    {
      title: "Tax Reduction Strategy",
      description: "Customized approach based on your property type, location, and assessment history."
    },
    {
      title: "Risk-Free Service",
      description: "No upfront costs. We only succeed when you save money on your property taxes."
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-8 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal mb-12 text-foreground leading-tight">
            Our Services
          </h2>
          <p className="text-base md:text-lg font-body text-foreground max-w-4xl leading-relaxed mb-16">
            Comprehensive tax appeal services designed to maximize your savings and minimize your stress
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
          {services.map((service, index) => (
            <div key={index}>
              <h3 className="text-2xl md:text-3xl font-display font-normal text-foreground mb-6 leading-tight">
                {service.title}
              </h3>
              <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
