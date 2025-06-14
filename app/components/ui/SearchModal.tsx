import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { searchProducts, searchCollections } from "~/lib/data";
import type { Product, Collection } from "~/lib/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (!query.trim()) {
      setProducts([]);
      setCollections([]);
      return;
    }

    setIsLoading(true);

    // Simulate search delay for better UX
    const timeoutId = setTimeout(() => {
      const searchResults = searchProducts(query);
      const collectionResults = searchCollections(query);

      setProducts(searchResults);
      setCollections(collectionResults);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasResults = products.length > 0 || collections.length > 0;
  const showNoResults = query.trim() && !isLoading && !hasResults;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl mx-4 mt-16 animate-slide-up">
        <div className="bg-black/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">
          {/* Search Input */}
          <div className="p-6 border-b border-white/10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products and collections..."
                className="w-full pl-12 pr-12 py-4 bg-transparent border-none text-white placeholder-gray-400 text-lg focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading && (
              <div className="p-8 text-center">
                <div className="inline-flex items-center gap-2 text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  Searching...
                </div>
              </div>
            )}

            {showNoResults && (
              <div className="p-8 text-center">
                <div className="text-gray-400 mb-2">No results found</div>
                <div className="text-sm text-gray-500">
                  Try searching for different keywords
                </div>
              </div>
            )}

            {!isLoading && hasResults && (
              <div className="p-4 space-y-6">
                {/* Collections */}
                {collections.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">
                      Collections ({collections.length})
                    </h3>
                    <div className="space-y-2">
                      {collections.map((collection) => (
                        <Link
                          key={collection.id}
                          to={`/collections/${collection.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-medium group-hover:text-white transition-colors">
                              {collection.name}
                            </div>
                            {collection.description && (
                              <div className="text-sm text-gray-400 truncate">
                                {collection.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Products */}
                {products.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">
                      Products ({products.length})
                    </h3>
                    <div className="space-y-2">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-12 h-12 bg-white/10 rounded-lg overflow-hidden">
                            {product.images?.[0] ? (
                              <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-medium group-hover:text-white transition-colors">
                              {product.name}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span>${product.price.toLocaleString()}</span>
                              {product.collection && (
                                <>
                                  <span>•</span>
                                  <span>{product.collection.name}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quick Actions */}
            {!query.trim() && (
              <div className="p-6 space-y-4">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/collections"
                    onClick={onClose}
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="text-white font-medium mb-1">
                      Collections
                    </div>
                    <div className="text-sm text-gray-400">
                      Browse all collections
                    </div>
                  </Link>
                  <Link
                    to="/collections/genesis"
                    onClick={onClose}
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="text-white font-medium mb-1">Genesis</div>
                    <div className="text-sm text-gray-400">
                      Latest collection
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 text-center">
            <div className="text-xs text-gray-500">
              Press{" "}
              <kbd className="px-2 py-1 bg-white/10 rounded text-gray-400">
                ESC
              </kbd>{" "}
              to close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
