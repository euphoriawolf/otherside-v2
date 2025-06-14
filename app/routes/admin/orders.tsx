import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Manage Orders - Admin" },
    { name: "description", content: "View and manage customer orders." },
  ];
};

export default function AdminOrders() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Orders</h1>

        <div className="bg-white border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    id: "12345",
                    customer: "John Doe",
                    email: "john@example.com",
                    date: "Mar 15, 2024",
                    total: "$2,400",
                    status: "Delivered",
                  },
                  {
                    id: "12344",
                    customer: "Jane Smith",
                    email: "jane@example.com",
                    date: "Mar 14, 2024",
                    total: "$4,800",
                    status: "Shipped",
                  },
                  {
                    id: "12343",
                    customer: "Mike Johnson",
                    email: "mike@example.com",
                    date: "Mar 13, 2024",
                    total: "$2,400",
                    status: "Processing",
                  },
                  {
                    id: "12342",
                    customer: "Sarah Wilson",
                    email: "sarah@example.com",
                    date: "Mar 12, 2024",
                    total: "$7,200",
                    status: "Pending",
                  },
                ].map((order, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-body font-medium">
                      #{order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-body font-medium">
                          {order.customer}
                        </div>
                        <div className="text-body-small text-gray-500">
                          {order.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body text-gray-900">
                      {order.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body text-gray-900">
                      {order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-body-small ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-small">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">
                        View
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        Update Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
