import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Edit Collection - Admin" },
    { name: "description", content: "Edit collection details." },
  ];
};

export default function AdminCollectionsEdit() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Edit Collection: Genesis</h1>

        <form className="space-y-8">
          {/* Basic Information */}
          <section>
            <h2 className="text-heading-2 mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  Collection Name
                </label>
                <input
                  type="text"
                  defaultValue="Genesis"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  defaultValue="Our inaugural collection explores the moment of creation itself. Each piece in Genesis captures the raw energy of birth, transformation, and infinite possibility."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Short Description
                </label>
                <input
                  type="text"
                  defaultValue="The beginning of everything. Art that captures creation itself."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          {/* Current Collection Image */}
          <section>
            <h2 className="text-heading-2 mb-4">Current Collection Image</h2>
            <div className="mb-4">
              <div className="aspect-[3/2] bg-gray-100 max-w-md">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Genesis Collection Cover
                </div>
              </div>
            </div>
            <div className="border-2 border-dashed border-gray-300 p-6 text-center">
              <p className="text-body text-gray-600 mb-2">
                Upload new collection cover image
              </p>
              <p className="text-body-small text-gray-500">
                Recommended: 1200x800px, JPG or PNG
              </p>
              <input type="file" accept="image/*" className="hidden" />
              <Button variant="outline" className="mt-4">
                Choose New Image
              </Button>
            </div>
          </section>

          {/* Collection Settings */}
          <section>
            <h2 className="text-heading-2 mb-4">Collection Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div>
                <label className="block text-body font-medium mb-2">
                  Sort Order
                </label>
                <input
                  type="number"
                  defaultValue="1"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-3" />
                <span className="text-body">Featured Collection</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-3" />
                <span className="text-body">Limited Edition</span>
              </label>
            </div>
          </section>

          {/* Collection Stats */}
          <section>
            <h2 className="text-heading-2 mb-4">Collection Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4">
                <div className="text-heading-3">12</div>
                <div className="text-body-small text-gray-600">
                  Total Products
                </div>
              </div>
              <div className="bg-gray-50 p-4">
                <div className="text-heading-3">8</div>
                <div className="text-body-small text-gray-600">Published</div>
              </div>
              <div className="bg-gray-50 p-4">
                <div className="text-heading-3">$28,800</div>
                <div className="text-body-small text-gray-600">Total Value</div>
              </div>
            </div>
          </section>

          <div className="flex gap-4">
            <Button size="lg">Update Collection</Button>
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
