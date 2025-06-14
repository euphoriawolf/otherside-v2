import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { Button } from "~/components/ui/Button";
import { useCart } from "~/lib/cart";
import { formatPrice } from "~/lib/data";
import { CartLoader } from "~/components/ui/LoadingStates";

export const meta: MetaFunction = () => {
  return [
    { title: "Cart - Otherside" },
    { name: "description", content: "Review your selected art pieces." },
  ];
};

export default function Cart() {
  const { cart, updateQuantity, removeItem, isLoading } = useCart();

  const shipping = 0; // Free shipping
  const total = cart.total + shipping;

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 px-6">
        <div className="max-w-4xl mx-auto py-8">
          <CartLoader />
        </div>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-heading-1 mb-8 text-chrome-100">Shopping Cart</h1>
          <div className="glass-panel rounded-xl p-12">
            <p className="text-body text-chrome-300 mb-6">Your cart is empty</p>
            <Link to="/collections">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8 text-chrome-100">Shopping Cart</h1>

        <div className="space-y-8">
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.items.map((item) => (
              <div key={item.product_id} className="glass-panel rounded-xl p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-24 bg-metal-light flex-shrink-0 rounded-lg overflow-hidden">
                    {item.product?.images[0] ? (
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-chrome-400">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-3 mb-2 text-chrome-100">
                      {item.product?.name}
                    </h3>
                    <p className="text-body text-chrome-400 mb-4">
                      {item.product?.limited_edition
                        ? "Limited Edition"
                        : "Standard"}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <label className="text-body-small text-chrome-300">
                          Qty:
                        </label>
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(
                              item.product_id,
                              Number(e.target.value)
                            )
                          }
                          className="glass-panel border border-glass-border px-2 py-1 text-body-small text-chrome-100 rounded"
                        >
                          {Array.from(
                            {
                              length: Math.min(
                                item.product?.stock_count || 10,
                                10
                              ),
                            },
                            (_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <div className="text-right">
                        <p className="text-body font-medium text-chrome-200">
                          {item.product
                            ? formatPrice(item.product.price * item.quantity)
                            : "$0"}
                        </p>
                        <button
                          onClick={() => removeItem(item.product_id)}
                          className="text-body-small text-chrome-400 hover:text-red-400 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="border-t border-glass-border pt-8">
            <div className="max-w-md ml-auto space-y-4">
              <div className="flex justify-between text-body">
                <span className="text-chrome-300">Subtotal:</span>
                <span className="text-chrome-200">
                  {formatPrice(cart.total)}
                </span>
              </div>
              <div className="flex justify-between text-body">
                <span className="text-chrome-300">Shipping:</span>
                <span className="text-chrome-200">Free</span>
              </div>
              <div className="flex justify-between text-heading-3 font-medium border-t border-glass-border pt-4">
                <span className="text-chrome-100">Total:</span>
                <span className="text-chrome-100">{formatPrice(total)}</span>
              </div>
              <Link to="/checkout">
                <Button size="lg" className="w-full mt-6">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
