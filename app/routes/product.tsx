import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link } from "react-router";
import { useState } from "react";
import { Button } from "~/components/ui/Button";
import { ProductGallery } from "~/components/art/ProductGallery";
import { WishlistButton } from "~/components/ui/WishlistButton";
import {
  getProductBySlug,
  getRelatedProducts,
  formatPrice,
  formatDimensions,
} from "~/lib/data";
import { useCart } from "~/lib/cart";
import { ButtonLoader } from "~/components/ui/LoadingStates";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Product not found", { status: 404 });
  }

  const product = getProductBySlug(slug);
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }

  const relatedProducts = getRelatedProducts(product.id);

  return { product, relatedProducts };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Product Not Found - Otherside" }];
  }

  return [
    { title: `${data.product.name} - Otherside` },
    {
      name: "description",
      content: data.product.description,
    },
  ];
};

export default function Product() {
  const { product, relatedProducts } = useLoaderData<typeof loader>();
  const { addItem, isInCart, getItemQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    const success = addItem(product.slug, quantity);
    if (success) {
      // Could show a toast notification here
      console.log(`Added ${quantity} ${product.name} to cart`);
    }
    setIsAddingToCart(false);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Gallery */}
          <ProductGallery product={product} />

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              {product.collection && (
                <Link
                  to={`/collections/${product.collection.slug}`}
                  className="text-body-small text-chrome-400 hover:text-chrome-200 mb-2 block"
                >
                  {product.collection.name} Collection
                </Link>
              )}
              <h1 className="text-heading-1 mb-4 text-chrome-100">
                {product.name}
              </h1>
              <p className="text-heading-3 font-medium mb-6 text-chrome-200">
                {formatPrice(product.price)}
              </p>

              <p className="text-body text-chrome-300 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-heading-3 mb-3 text-chrome-100">
                  Specifications
                </h3>
                <div className="space-y-2 text-body">
                  <div className="flex justify-between">
                    <span className="text-chrome-400">Dimensions:</span>
                    <span className="text-chrome-200">
                      {formatDimensions(product.dimensions)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-chrome-400">Materials:</span>
                    <span className="text-chrome-200">
                      {product.materials.join(", ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-chrome-400">Edition:</span>
                    <span className="text-chrome-200">
                      {product.limited_edition ? "Limited Edition" : "Standard"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-chrome-400">Availability:</span>
                    <span
                      className={
                        product.stock_count > 0
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {product.stock_count > 0
                        ? `${product.stock_count} In Stock`
                        : "Out of Stock"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-body font-medium text-chrome-200">
                    Quantity:
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="glass-panel border border-glass-border px-3 py-2 text-body text-chrome-100 focus:outline-none focus:ring-2 focus:ring-accent-light rounded-md"
                  >
                    {Array.from(
                      { length: Math.min(product.stock_count, 10) },
                      (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={handleAddToCart}
                    disabled={isAddingToCart || product.stock_count === 0}
                  >
                    {isAddingToCart ? (
                      <ButtonLoader>Adding...</ButtonLoader>
                    ) : (
                      "Add to Cart"
                    )}
                  </Button>
                  <WishlistButton
                    productId={product.id}
                    size="lg"
                    onToggle={(id, isAdded) => {
                      console.log(
                        `Product ${id} ${
                          isAdded ? "added to" : "removed from"
                        } wishlist`
                      );
                    }}
                  />
                </div>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-body font-medium">
                    Shipping & Returns
                    <span className="group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <div className="mt-4 text-body-small text-gray-600 leading-relaxed">
                    Free shipping on all orders. 30-day return policy. Each
                    piece is carefully packaged and insured during transit.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer text-body font-medium">
                    Care Instructions
                    <span className="group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <div className="mt-4 text-body-small text-gray-600 leading-relaxed">
                    Clean with a soft, dry cloth. Avoid direct sunlight. Digital
                    components are maintenance-free with automatic updates.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 pt-16 border-t border-glass-border">
            <h2 className="text-heading-2 mb-8 text-chrome-100">
              You might also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.slug}`}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-metal-light mb-4 overflow-hidden rounded-lg">
                    {relatedProduct.video_url ? (
                      <video
                        src={relatedProduct.video_url}
                        poster={relatedProduct.images[0]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        autoPlay
                        muted
                        loop
                      />
                    ) : (
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-heading-3 text-chrome-100">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-body text-chrome-400">
                      {relatedProduct.limited_edition
                        ? "Limited Edition"
                        : "Standard"}
                    </p>
                    <p className="text-body font-medium text-chrome-200">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
