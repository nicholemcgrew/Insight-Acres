import heroImage from "@/assets/hero-beekeeping.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Golden honeycomb with bees in a sunlit meadow"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-earth/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-in-up"
        >
          Insight Acres
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-body font-light text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Pure, raw honey &amp; handcrafted bee products — straight from our hives to your home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-body font-semibold text-primary-foreground hover:bg-honey-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Shop Products
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/60 px-8 py-3 font-body font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
