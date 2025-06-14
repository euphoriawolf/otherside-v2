import { LoadingSpinner } from "./LoadingSpinner";
import {
  ProductGridSkeleton,
  BlogPostSkeleton,
  CollectionHeroSkeleton,
} from "./SkeletonLoader";

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-white/60 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export function ProductsLoader() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <LoadingSpinner size="md" />
      </div>
      <ProductGridSkeleton count={6} />
    </div>
  );
}

export function CollectionLoader() {
  return (
    <div className="space-y-8">
      <CollectionHeroSkeleton />
      <div className="container mx-auto px-4">
        <ProductGridSkeleton count={6} />
      </div>
    </div>
  );
}

export function BlogLoader() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogPostSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function CartLoader() {
  return (
    <div className="space-y-4">
      <LoadingSpinner size="md" className="mx-auto" />
      <p className="text-center text-white/60 text-sm">Loading cart...</p>
    </div>
  );
}

export function CheckoutLoader() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p className="text-white/60">Processing your order...</p>
      </div>
    </div>
  );
}

export function ButtonLoader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <LoadingSpinner size="sm" />
      {children}
    </div>
  );
}
