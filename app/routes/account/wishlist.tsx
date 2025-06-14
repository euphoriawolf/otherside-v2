import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Wishlist - Otherside Account" },
    { name: "description", content: "Your saved art pieces." },
  ];
};

export default function AccountWishlist() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Wishlist</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="group">
              <div className="aspect-[4/5] bg-gray-100 mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                  [Wishlist Item {i}]
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-heading-3 mb-1">
                    Genesis #{String(i + 2).padStart(2, "0")}
                  </h3>
                  <p className="text-body text-gray-600 mb-2">
                    Limited Edition
                  </p>
                  <p className="text-body font-medium">$2,400</p>
                </div>
                <button className="text-body-small text-gray-500 hover:text-red-600">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
