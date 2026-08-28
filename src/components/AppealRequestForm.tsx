import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AppealRequestForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "",
    appealReason: "",
    additionalNotes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.propertyAddress) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formcarry.com/s/5KTu8FjHmBp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Request Submitted",
          description: "We'll contact you shortly to discuss your tax appeal.",
        });

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          propertyAddress: "",
          propertyType: "",
          appealReason: "",
          additionalNotes: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-48 px-12 md:px-20 bg-[#fafafa]">
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-display text-foreground mb-16 leading-[1.05]" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Tax Appeal Request Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-base font-display text-foreground mb-3">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Smith"
                className="w-full px-5 py-4 border border-border bg-white text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-foreground/20"
                required
              />
            </div>

            <div>
              <label className="block text-base font-display text-foreground mb-3">
                Email Address <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-5 py-4 border border-border bg-white text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-foreground/20"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-base font-display text-foreground mb-3">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 123-4567"
              className="w-full px-5 py-4 border border-border bg-white text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-foreground/20"
              required
            />
          </div>

          {/* Property Information */}
          <div className="pt-8">
            <h3 className="text-2xl font-display text-foreground mb-8">
              Property Information
            </h3>

            <div className="space-y-8">
              <div>
                <label className="block text-base font-display text-foreground mb-3">
                  Property Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  placeholder="123 Main Street, Philadelphia, PA 19101"
                  className="w-full px-5 py-4 border border-border bg-white text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-base font-display text-foreground mb-3">
                    Property Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-5 py-4 border border-border bg-white text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-foreground/20 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select property type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="vacant-land">Vacant Land</option>
                  </select>
                </div>

                <div>
                  <label className="block text-base font-display text-foreground mb-3">
                    Reason for Appeal <span className="text-destructive">*</span>
                  </label>
                  <select
                    value={formData.appealReason}
                    onChange={(e) => setFormData({ ...formData, appealReason: e.target.value })}
                    className="w-full px-5 py-4 border border-border bg-white text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-foreground/20 appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select reason</option>
                    <option value="overvalued">Property Overvalued</option>
                    <option value="comparable-sales">Based on Comparable Sales</option>
                    <option value="property-condition">Property Condition Issues</option>
                    <option value="assessment-error">Assessment Error</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-base font-display text-foreground mb-3">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Any additional information about the property or special requirements..."
                  rows={5}
                  className="w-full px-5 py-4 border border-border bg-white text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-foreground text-background py-5 px-8 text-lg font-display hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Appeal Request"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AppealRequestForm;
