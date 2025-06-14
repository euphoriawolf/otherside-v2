import { useState } from "react";
import { cn } from "~/lib/utils";

interface WishlistButtonProps {
  productId: string;
  isInWishlist?: boolean;
  onToggle?: (productId: string, isAdded: boolean) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function WishlistButton({
  productId,
  isInWishlist = false,
  onToggle,
  className,
  size = "md",
}: WishlistButtonProps) {
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAnimating(true);
    const newState = !isWishlisted;
    setIsWishlisted(newState);

    onToggle?.(productId, newState);

    // Reset animation after completion
    setTimeout(() => setIsAnimating(false), 300);
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative flex items-center justify-center rounded-full transition-all duration-200",
        "bg-white/80 backdrop-blur-sm border border-gray-200",
        "hover:bg-white hover:border-gray-300 hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
        sizeClasses[size],
        className
      )}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      <div
        className={cn(
          "transition-all duration-300",
          isAnimating && "animate-bounce"
        )}
      >
        {isWishlisted ? (
          // Filled heart
          <svg
            className={cn(iconSizes[size], "text-red-500")}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          // Outline heart
          <svg
            className={cn(iconSizes[size], "text-gray-600")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )}
      </div>

      {/* Ripple effect on click */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
      )}
    </button>
  );
}
