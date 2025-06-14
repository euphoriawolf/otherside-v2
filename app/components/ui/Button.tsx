import { forwardRef } from "react";
import { cn } from "~/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "glass" | "metal" | "ghost" | "accent";
  size?: "xs" | "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "glass",
      size = "sm",
      loading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          // Base styles - smaller, more refined
          "relative inline-flex items-center justify-center font-medium overflow-hidden",
          "transition-glass focus-glass disabled:opacity-40 disabled:cursor-not-allowed",
          "font-mono text-xs tracking-wider uppercase",

          // Variants
          {
            // Glass morphism primary
            "glass-panel text-chrome-100 hover:text-white": variant === "glass",

            // Metal surface
            "metal-surface text-chrome-200 hover:text-chrome-100":
              variant === "metal",

            // Ghost transparent
            "bg-transparent text-chrome-400 hover:bg-glass-clear hover:text-chrome-200 border border-glass-border":
              variant === "ghost",

            // Accent with neutral gradient
            "bg-gradient-to-r from-accent-medium to-accent-light text-metal-dark hover:from-accent-light hover:to-accent-medium shadow-lg hover:shadow-xl":
              variant === "accent",
          },

          // Sizes - all smaller and more rounded
          {
            "px-2 py-1 text-[10px] rounded-md min-h-[24px]": size === "xs",
            "px-3 py-1.5 text-xs rounded-lg min-h-[28px]": size === "sm",
            "px-4 py-2 text-xs rounded-lg min-h-[32px]": size === "md",
            "px-6 py-2.5 text-sm rounded-xl min-h-[36px]": size === "lg",
          },

          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {/* Otherworldly halo effect */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-metal-shine" />
        </div>

        {/* Halo glow on hover */}
        <div className="absolute inset-0 opacity-0 hover:opacity-60 transition-opacity duration-500 -z-10">
          <div
            className="absolute inset-0 rounded-inherit animate-spin"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
              animationDuration: "3s",
              filter: "blur(4px)",
            }}
          />
        </div>

        {/* Loading spinner */}
        {loading && (
          <div className="mr-2">
            <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin opacity-60" />
          </div>
        )}

        {/* Button content */}
        <span className="relative z-10 flex items-center">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
