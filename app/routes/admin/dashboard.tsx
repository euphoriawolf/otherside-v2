import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Dashboard - Otherside" },
    {
      name: "description",
      content: "Admin dashboard for managing the Otherside platform.",
    },
  ];
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-body-small text-gray-600 mb-2">Total Orders</h3>
            <p className="text-heading-2">127</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-body-small text-gray-600 mb-2">Revenue</h3>
            <p className="text-heading-2">$304,800</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-body-small text-gray-600 mb-2">Products</h3>
            <p className="text-heading-2">45</p>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="text-body-small text-gray-600 mb-2">Collections</h3>
            <p className="text-heading-2">4</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/admin/products"
            className="block p-6 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-heading-3 mb-2">Manage Products</h3>
            <p className="text-body text-gray-600">
              Add, edit, and organize your art pieces
            </p>
          </a>
          <a
            href="/admin/collections"
            className="block p-6 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-heading-3 mb-2">Manage Collections</h3>
            <p className="text-body text-gray-600">
              Create and organize collections
            </p>
          </a>
          <a
            href="/admin/orders"
            className="block p-6 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-heading-3 mb-2">View Orders</h3>
            <p className="text-body text-gray-600">
              Process and track customer orders
            </p>
          </a>
          <a
            href="/admin/users"
            className="block p-6 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-heading-3 mb-2">Manage Users</h3>
            <p className="text-body text-gray-600">
              View and manage customer accounts
            </p>
          </a>
          <a
            href="/admin/blog"
            className="block p-6 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-heading-3 mb-2">Manage Blog</h3>
            <p className="text-body text-gray-600">
              Create and publish blog posts
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
