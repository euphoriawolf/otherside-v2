import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Manage Users - Admin" },
    { name: "description", content: "View and manage user accounts." },
  ];
};

export default function AdminUsers() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Users</h1>

        <div className="bg-white border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-body-small font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    name: "John Doe",
                    email: "john@example.com",
                    role: "Customer",
                    joined: "Mar 1, 2024",
                    orders: 3,
                  },
                  {
                    name: "Jane Smith",
                    email: "jane@example.com",
                    role: "Customer",
                    joined: "Feb 28, 2024",
                    orders: 1,
                  },
                  {
                    name: "Admin User",
                    email: "admin@otherside.com",
                    role: "Admin",
                    joined: "Jan 1, 2024",
                    orders: 0,
                  },
                ].map((user, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-body font-medium">{user.name}</div>
                        <div className="text-body-small text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-body-small ${
                          user.role === "Admin"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body text-gray-900">
                      {user.joined}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body text-gray-900">
                      {user.orders}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-body-small">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">
                        View
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Suspend
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
