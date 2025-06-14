import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Add New Collection - Admin" },
    { name: "description", content: "Create a new art collection." },
  ];
};

export default function AdminCollectionsNew() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Add New Collection</h1>

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
                  placeholder="e.g., Genesis"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the collection's theme and story..."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Short Description
                </label>
                <input
                  type="text"
                  placeholder="Brief one-line description for previews"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
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
                <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Sort Order
                </label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-body">Featured Collection</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-body">Limited Edition</span>
              </label>
            </div>
          </section>

          {/* Collection Image */}
          <section>
            <h2 className="text-heading-2 mb-4">Collection Image</h2>
            <div className="border-2 border-dashed border-gray-300 p-8 text-center">
              <p className="text-body text-gray-600 mb-2">
                Upload collection cover image
              </p>
              <p className="text-body-small text-gray-500">
                Recommended: 1200x800px, JPG or PNG
              </p>
              <input type="file" accept="image/*" className="hidden" />
              <Button variant="outline" className="mt-4">
                Choose Image
              </Button>
            </div>
          </section>

          {/* SEO Settings */}
          <section>
            <h2 className="text-heading-2 mb-4">SEO Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  placeholder="Collection name - Otherside"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Meta Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Brief description for search engines..."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  placeholder="collection-name"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          <div className="flex gap-4">
            <Button size="lg">Create Collection</Button>
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
