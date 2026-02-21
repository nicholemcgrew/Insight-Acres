const About = () => {
  return (
    <section id="about" className="py-20 bg-muted" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="about-heading" className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            About Insight Acres
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            At Insight Acres, we believe in sustainable beekeeping that respects both the bees and the land.
            Our small-batch honey and handcrafted products are made with love, ensuring the highest quality
            from hive to home.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Every jar of honey carries the unique flavors of our local wildflowers, and every product
            is crafted using natural ingredients you can trust. We're passionate about sharing the
            incredible gifts that bees provide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
