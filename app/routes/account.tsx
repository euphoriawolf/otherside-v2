import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Account - Otherside" },
    { name: "description", content: "Manage your account and orders." },
  ];
};

export default function Account() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Account Navigation */}
          <div className="space-y-2">
            <a href="/account" className="block px-4 py-2 bg-black text-white">
              Overview
            </a>
            <a
              href="/account/orders"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Orders
            </a>
            <a
              href="/account/wishlist"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Wishlist
            </a>
            <a
              href="/account/profile"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Profile
            </a>
          </div>

          {/* Account Content */}
          <div className="md:col-span-2">
            <div className="space-y-8">
              {/* Welcome */}
              <section>
                <h2 className="text-heading-2 mb-4">Welcome back, John</h2>
                <p className="text-body text-gray-600">
                  Manage your orders, wishlist, and account settings.
                </p>
              </section>

              {/* Recent Orders */}
              <section>
                <h3 className="text-heading-3 mb-4">Recent Orders</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-body font-medium">Order #12345</p>
                        <p className="text-body-small text-gray-600">
                          March 15, 2024
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-body-small">
                        Delivered
                      </span>
                    </div>
                    <p className="text-body">Genesis #01 - $2,400</p>
                  </div>
                </div>
              </section>

              {/* Wishlist Preview */}
              <section>
                <h3 className="text-heading-3 mb-4">Wishlist</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="aspect-[4/5] bg-gray-100 mb-2">
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          [Wishlist Item {i}]
                        </div>
                      </div>
                      <p className="text-body-small">
                        Genesis #{String(i + 2).padStart(2, "0")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
