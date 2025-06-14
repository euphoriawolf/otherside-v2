import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Edit Product - Admin" },
    { name: "description", content: "Edit product details." },
  ];
};

export default function AdminProductsEdit() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Edit Product: Genesis #01</h1>

        <form className="space-y-8">
          {/* Basic Information */}
          <section>
            <h2 className="text-heading-2 mb-4">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  defaultValue="Genesis #01"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Collection
                </label>
                <select
                  defaultValue="Genesis"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option>Genesis</option>
                  <option>Metamorphosis</option>
                  <option>Ethereal</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-body font-medium mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  defaultValue="The first piece in our Genesis collection, this artwork explores the moment of creation itself. Watch as abstract forms emerge from darkness, evolving and transforming in an endless cycle of birth and renewal."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          {/* Current Media */}
          <section>
            <h2 className="text-heading-2 mb-4">Current Media</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative">
                  <div className="aspect-square bg-gray-100">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Image {i}
                    </div>
                  </div>
                  <button className="absolute top-2 right-2 bg-red-600 text-white w-6 h-6 rounded-full text-xs">
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="aspect-video bg-gray-100 mb-4">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Product Video
              </div>
            </div>
          </section>

          {/* Pricing & Inventory */}
          <section>
            <h2 className="text-heading-2 mb-4">Pricing & Inventory</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  defaultValue="2400"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Stock Count
                </label>
                <input
                  type="number"
                  defaultValue="12"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Status
                </label>
                <select
                  defaultValue="Published"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Archived</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-3" />
                <span className="text-body">Limited Edition</span>
              </label>
            </div>
          </section>

          <div className="flex gap-4">
            <Button size="lg">Update Product</Button>
            <Button variant="outline" size="lg">
              Save as Draft
            </Button>
            <Button variant="ghost" size="lg">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
