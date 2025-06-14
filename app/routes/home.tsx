import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import type { MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import { VideoArt } from "~/components/art/VideoArt";
import { ProductCard } from "~/components/art/ProductCard";
import { Button } from "~/components/ui/Button";
import { getFeaturedProducts } from "~/lib/data";

import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export const meta: MetaFunction = () => {
  return [
    { title: "Otherside - Art that comes alive" },
    {
      name: "description",
      content:
        "Discover wall art that transcends the ordinary. Each piece comes alive with integrated video experiences.",
    },
  ];
};

export function loader({ context }: Route.LoaderArgs) {
  const featuredProducts = getFeaturedProducts(3);
  return {
    message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE,
    featuredProducts,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { featuredProducts } = loaderData;
  const featuredRef = useScrollAnimation();
  const storyRef = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hero-shaded">
        <div className="absolute inset-0 bg-gradient-to-b from-metal-dark/60 via-transparent to-metal-base/80 z-10" />

        {/* Background Video */}
        <div className="absolute inset-0">
          <VideoArt
            src="/assets/Samples/1.mp4"
            alt="Otherside hero video"
            autoplayOnVisible={true}
            autoplayOnHover={false}
            className="w-full h-full opacity-70"
            aspectRatio="wide"
          />
        </div>

        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 z-15 liquid-overlay" />

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-display mb-2 animate-liquid-in tracking-wider">
            OTHERSIDE
          </h1>
          <h2
            className="text-heading-1 mb-8 animate-liquid-in font-mono tracking-[0.2em]"
            style={{ animationDelay: "0.2s" }}
          >
            ART ALIVE
          </h2>
          <div className="animate-liquid-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/collections">
              <Button variant="glass" size="md">
                Explore Collections
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-glass-float">
            <span className="text-caption mb-1">SCROLL</span>
            <div className="w-px h-6 bg-glass-border" />
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section ref={featuredRef} className="py-16 px-4 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-heading-2 mb-3">Featured Collections</h2>
            <p className="text-body max-w-xl mx-auto">
              Curated collections that blur the line between art and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showVideo={true}
                className="animate-liquid-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section
        ref={storyRef}
        className="py-16 relative overflow-hidden animate-on-scroll"
      >
        <div className="absolute inset-0 glass-panel" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-heading-2 mb-6">The Otherside Story</h2>
          <p className="text-body mb-6 leading-relaxed">
            We believe art should move you—literally. Every piece in our
            collection combines traditional artistic vision with cutting-edge
            technology, creating experiences that evolve and breathe within your
            space.
          </p>
          <Button variant="metal" size="md">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
}
