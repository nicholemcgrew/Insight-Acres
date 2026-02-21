import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import ContactSignup from "@/components/ContactSignup";
import Footer from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Insight Acres",
  description: "Pure, raw honey and handcrafted bee products from Insight Acres — sustainable beekeeping, straight from our hives to your home.",
  url: window.location.origin,
  image: "",
  priceRange: "$5 - $20",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bee Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Raw Honey (1 lb)" }, price: "15.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Beeswax Chapstick" }, price: "5.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Honey Gift Jars" }, price: "5.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Deluxe Gift Bag" }, price: "20.00", priceCurrency: "USD" },
    ],
  },
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Insight Acres — Pure Honey &amp; Handcrafted Bee Products</title>
        <meta
          name="description"
          content="Shop raw honey, beeswax chapstick, gift jars, and deluxe gift bags from Insight Acres. Sustainable beekeeping, handcrafted products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={window.location.origin} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:font-body"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <Products />
        <About />
        <ContactSignup />
      </main>
      <Footer />
    </>
  );
};

export default Index;
