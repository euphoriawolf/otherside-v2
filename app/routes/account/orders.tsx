import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Orders - Otherside Account" },
    { name: "description", content: "View your order history." },
  ];
};

export default function AccountOrders() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Order History</h1>

        <div className="space-y-6">
          {[
            {
              id: "12345",
              date: "March 15, 2024",
              status: "Delivered",
              total: "$2,400",
              items: ["Genesis #01"],
            },
            {
              id: "12344",
              date: "February 28, 2024",
              status: "Shipped",
              total: "$4,800",
              items: ["Genesis #02", "Genesis #03"],
            },
            {
              id: "12343",
              date: "February 10, 2024",
              status: "Processing",
              total: "$2,400",
              items: ["Metamorphosis #01"],
            },
          ].map((order) => (
            <div key={order.id} className="border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-heading-3 mb-1">Order #{order.id}</h3>
                  <p className="text-body-small text-gray-600">{order.date}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 text-body-small ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                  <p className="text-body font-medium mt-2">{order.total}</p>
                </div>
              </div>
              <div className="space-y-2">
                {order.items.map((item, i) => (
                  <p key={i} className="text-body text-gray-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
