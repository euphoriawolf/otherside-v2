import { Link } from "react-router";
import { VideoArt } from "./VideoArt";
import { WishlistButton } from "~/components/ui/WishlistButton";
import { cn } from "~/lib/utils";
import type { Product } from "~/lib/types";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

interface ProductCardProps {
  product: Product;
  className?: string;
  showPrice?: boolean;
  showCollection?: boolean;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
}

export function ProductCard({
  product,
  className,
  showPrice = true,
  showCollection = true,
  aspectRatio = "portrait",
}: ProductCardProps) {
  const cardRef = useScrollAnimation();

  return (
    <Link
      ref={cardRef}
      to={`/product/${product.slug}`}
      className={cn(
        "group block glass-panel rounded-xl overflow-hidden transition-glass hover:scale-[1.02] animate-on-scroll",
        className
      )}
    >
      {/* Video Art Display */}
      <div className="relative">
        <VideoArt
          src={
            product.video_url || product.images?.[0] || "/assets/Samples/1.png"
          }
          poster={product.images?.[0]}
          alt={product.name}
          aspectRatio={aspectRatio}
          autoplayOnHover={true}
          className="rounded-t-xl"
        />

        {/* Wishlist Button */}
        <div className="absolute top-3 right-3">
          <WishlistButton
            productId={product.id}
            size="xs"
            onToggle={(id, isAdded) => {
              console.log(
                `Product ${id} ${
                  isAdded ? "added to" : "removed from"
                } wishlist`
              );
            }}
          />
        </div>

        {/* Limited Edition Badge */}
        {product.isLimitedEdition && (
          <div className="absolute top-3 left-3">
            <span className="glass-panel text-chrome-100 text-caption px-2 py-1 rounded-md">
              LIMITED
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        {showCollection && product.collection && (
          <p className="text-caption text-chrome-500">
            {product.collection.name}
          </p>
        )}

        <h3 className="text-body-small font-medium text-chrome-200 group-hover:text-chrome-100 transition-colors">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-caption text-chrome-400 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-1">
          {showPrice && (
            <p className="text-body-small font-medium text-chrome-100">
              ${product.price.toLocaleString()}
            </p>
          )}

          {/* Availability Status */}
          {product.stockCount <= 0 ? (
            <span className="text-caption text-red-400">SOLD OUT</span>
          ) : product.stockCount <= 5 ? (
            <span className="text-caption text-accent-glow">
              {product.stockCount} LEFT
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
