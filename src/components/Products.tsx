import honeyJarImg from "@/assets/honey-jar.jpg";
import chapstickImg from "@/assets/chapstick.jpg";
import giftJarsImg from "@/assets/gift-jars.jpg";
import giftBagImg from "@/assets/gift-bag.jpg";

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  available: boolean;
}

const products: Product[] = [
  {
    name: "Raw Honey (1 lb)",
    price: "$15",
    description: "Pure, unfiltered honey harvested from our local hives. Rich in flavor and natural enzymes.",
    image: honeyJarImg,
    alt: "A jar of golden raw honey with a wooden dipper",
    available: true,
  },
  {
    name: "Beeswax Chapstick",
    price: "$5",
    description: "All-natural beeswax lip balm that moisturizes and protects your lips year-round.",
    image: chapstickImg,
    alt: "Natural beeswax chapstick tube with lavender",
    available: true,
  },
  {
    name: "Honey Gift Jars",
    price: "$5",
    description: "Charming miniature jars of honey, perfect for party favors, gifts, or a sweet treat.",
    image: giftJarsImg,
    alt: "Small decorative honey gift jars on a rustic wood surface",
    available: true,
  },
  {
    name: "Deluxe Gift Bag",
    price: "$20",
    description: "Includes beeswax chapstick, honey gift jar, and our premium face oil — a perfect bundle.",
    image: giftBagImg,
    alt: "Gift bag with honey products, chapstick, and face oil",
    available: true,
  },
];

const comingSoon = [
  "Beeswax Candles",
  "Honey Soap Bars",
  "Bee Pollen Granules",
  "Propolis Tincture",
  "Infused Honey (Lavender & Cinnamon)",
  "Honeycomb Sections",
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="products-heading" className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Handcrafted with care from our thriving apiaries.
          </p>
        </div>

        {/* Available products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" role="list" aria-label="Available products">
          {products.map((product) => (
            <article
              key={product.name}
              role="listitem"
              className="group rounded-xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-ring"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
                  <span className="font-body font-bold text-primary text-lg">{product.price}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                {product.available && (
                  <span className="inline-block mt-3 text-xs font-body font-semibold text-accent-foreground bg-accent rounded-full px-3 py-1">
                    In Stock
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Coming soon */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Coming Soon</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto" role="list" aria-label="Upcoming products">
            {comingSoon.map((item) => (
              <div
                key={item}
                role="listitem"
                className="rounded-lg border border-dashed border-border bg-muted p-4 flex items-center justify-center text-center"
              >
                <span className="font-body text-sm text-muted-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
