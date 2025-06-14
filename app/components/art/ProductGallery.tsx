import { useState } from "react";
import { VideoArt } from "./VideoArt";
import { cn } from "~/lib/utils";
import type { Product } from "~/lib/types";

interface ProductGalleryProps {
  product: Product;
  className?: string;
}

export function ProductGallery({ product, className }: ProductGalleryProps) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  // Combine video and images into a single media array
  const mediaItems = [
    ...(product.video_url
      ? [{ type: "video" as const, url: product.video_url }]
      : []),
    ...(product.images?.map((img) => ({
      type: "image" as const,
      url: img,
      alt: product.name,
    })) || []),
  ];

  const activeMedia = mediaItems[activeMediaIndex];

  if (!mediaItems.length) {
    return (
      <div
        className={cn(
          "aspect-square bg-gray-100 flex items-center justify-center",
          className
        )}
      >
        <p className="text-gray-400">No media available</p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Main Display */}
      <div className="aspect-square bg-gray-100 overflow-hidden">
        {activeMedia.type === "video" ? (
          <VideoArt
            src={activeMedia.url}
            alt={product.name}
            autoplayOnHover={true}
            autoplayOnVisible={false}
            controls={true}
            className="w-full h-full"
            aspectRatio="square"
          />
        ) : (
          <img
            src={activeMedia.url}
            alt={activeMedia.alt || product.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      {mediaItems.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {mediaItems.map((media, index) => (
            <button
              key={index}
              onClick={() => setActiveMediaIndex(index)}
              className={cn(
                "flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all duration-200",
                activeMediaIndex === index
                  ? "border-black"
                  : "border-gray-200 hover:border-gray-400"
              )}
            >
              {media.type === "video" ? (
                <div className="relative w-full h-full bg-gray-100">
                  <video
                    src={media.url}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                  />
                  {/* Video play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[6px] border-l-black border-y-[3px] border-y-transparent ml-0.5" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={media.url}
                  alt={media.alt || `${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Media Info */}
      <div className="text-body-small text-gray-600">
        {activeMedia.type === "video" ? (
          <p>Interactive video • Hover to play</p>
        ) : (
          <p>
            Image {activeMediaIndex + 1} of {mediaItems.length}
          </p>
        )}
      </div>
    </div>
  );
}
