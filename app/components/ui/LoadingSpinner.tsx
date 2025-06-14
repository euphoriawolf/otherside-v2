import { cn } from "~/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-transparent",
          "bg-gradient-to-r from-white/20 to-white/5",
          "backdrop-blur-sm",
          "relative overflow-hidden",
          sizeClasses[size]
        )}
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-black/80 backdrop-blur-sm" />
      </div>
    </div>
  );
}
