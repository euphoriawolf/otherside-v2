import { VideoArt } from "./VideoArt";
import { Button } from "~/components/ui/Button";
import { cn } from "~/lib/utils";
import type { Collection } from "~/lib/types";

interface CollectionHeroProps {
  collection: Collection;
  className?: string;
}

export function CollectionHero({ collection, className }: CollectionHeroProps) {
  return (
    <section
      className={cn("relative min-h-screen flex items-center", className)}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <VideoArt
          src={
            collection.video_url ||
            collection.image_url ||
            "/assets/Samples/1.png"
          }
          poster={collection.image_url}
          alt={`${collection.name} collection`}
          autoplayOnVisible={true}
          autoplayOnHover={false}
          className="w-full h-full"
          aspectRatio="wide"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-body text-white/80 uppercase tracking-wider">
                Collection
              </p>
              <h1 className="text-display text-white">{collection.name}</h1>
            </div>

            {collection.description && (
              <p className="text-body-large text-white/90 leading-relaxed">
                {collection.description}
              </p>
            )}

            <div className="flex items-center gap-4 text-body-small text-white/70">
              {collection.productCount && (
                <span>{collection.productCount} pieces</span>
              )}
              {collection.isLimitedEdition && (
                <>
                  <span>•</span>
                  <span>Limited Edition</span>
                </>
              )}
              {collection.priceRange && (
                <>
                  <span>•</span>
                  <span>
                    From ${collection.priceRange.min.toLocaleString()}
                  </span>
                </>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                Explore Collection
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-body-small uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
