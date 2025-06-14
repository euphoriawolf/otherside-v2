import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Checkout - Otherside" },
    { name: "description", content: "Complete your purchase." },
  ];
};

export default function Checkout() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            {/* Contact Information */}
            <section>
              <h2 className="text-heading-2 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-heading-2 mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="md:col-span-2 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-heading-2 mb-4">Payment</h2>
              <div className="p-6 border border-gray-300 bg-gray-50">
                <p className="text-body text-gray-600">
                  Payment processing will be handled securely via Paystack.
                </p>
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-gray-200 p-6">
              <h2 className="text-heading-2 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100 flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                        {i}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-body font-medium">
                        Genesis #{String(i).padStart(2, "0")}
                      </h3>
                      <p className="text-body-small text-gray-600">Qty: 1</p>
                    </div>
                    <p className="text-body font-medium">$2,400</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-body">
                  <span>Subtotal:</span>
                  <span>$4,800</span>
                </div>
                <div className="flex justify-between text-body">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-heading-3 font-medium border-t border-gray-200 pt-2">
                  <span>Total:</span>
                  <span>$4,800</span>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6">
                Complete Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
