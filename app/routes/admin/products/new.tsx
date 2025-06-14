import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Add New Product - Admin" },
    { name: "description", content: "Create a new art product." },
  ];
};

export default function AdminProductsNew() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Add New Product</h1>

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
                  placeholder="e.g., Genesis #01"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Collection
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Select Collection</option>
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
                  placeholder="Describe the artwork and its story..."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
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
                  placeholder="2400"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Stock Count
                </label>
                <input
                  type="number"
                  placeholder="50"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Status
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-body">Limited Edition</span>
              </label>
            </div>
          </section>

          {/* Dimensions */}
          <section>
            <h2 className="text-heading-2 mb-4">Dimensions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  Width (inches)
                </label>
                <input
                  type="number"
                  placeholder="24"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Height (inches)
                </label>
                <input
                  type="number"
                  placeholder="36"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Depth (inches)
                </label>
                <input
                  type="number"
                  placeholder="2"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          {/* Materials */}
          <section>
            <h2 className="text-heading-2 mb-4">Materials</h2>
            <input
              type="text"
              placeholder="e.g., Premium Canvas, Digital Display, Aluminum Frame"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </section>

          {/* Media Upload */}
          <section>
            <h2 className="text-heading-2 mb-4">Media</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  Product Images
                </label>
                <div className="border-2 border-dashed border-gray-300 p-6 text-center">
                  <p className="text-body text-gray-600">
                    Drag and drop images here, or click to select
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Product Video
                </label>
                <div className="border-2 border-dashed border-gray-300 p-6 text-center">
                  <p className="text-body text-gray-600">
                    Drag and drop video here, or click to select
                  </p>
                  <input type="file" accept="video/*" className="hidden" />
                </div>
              </div>
            </div>
          </section>

          <div className="flex gap-4">
            <Button size="lg">Create Product</Button>
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
