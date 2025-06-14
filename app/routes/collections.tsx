import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";
import { getCollections, getProductsByCollection } from "~/lib/data";
import { VideoArt } from "~/components/art/VideoArt";

export const meta: MetaFunction = () => {
  return [
    { title: "Collections - Otherside" },
    {
      name: "description",
      content: "Explore our curated collections of living wall art.",
    },
  ];
};

export default function Collections() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  const collections = getCollections();

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section
        ref={headerRef}
        className="py-16 px-6 text-center animate-on-scroll"
      >
        <h1 className="text-display mb-6">Collections</h1>
        <p className="text-body max-w-2xl mx-auto">
          Each collection tells a story through movement, bringing art to life
          in your space.
        </p>
      </section>

      {/* Collections Grid */}
      <section ref={gridRef} className="pb-24 px-6 animate-on-scroll">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {collections.map((collection) => {
              const products = getProductsByCollection(collection.id);
              return (
                <Link
                  key={collection.id}
                  to={`/collections/${collection.slug}`}
                  className="group glass-panel rounded-xl p-6 transition-glass hover:scale-[1.02] block"
                >
                  <div className="aspect-[3/4] bg-metal-light mb-4 overflow-hidden rounded-lg">
                    {collection.video_url ? (
                      <VideoArt
                        src={collection.video_url}
                        poster={collection.image_url}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        autoplay
                        muted
                        loop
                      />
                    ) : (
                      <img
                        src={collection.image_url}
                        alt={collection.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-heading-3 text-chrome-100">
                      {collection.name}
                    </h2>
                    <p className="text-body-small text-chrome-300">
                      {collection.description}
                    </p>
                    <p className="text-caption text-chrome-500">
                      {products.length} pieces
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
