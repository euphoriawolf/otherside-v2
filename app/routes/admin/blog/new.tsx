import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Blog Post - Admin" },
    { name: "description", content: "Create a new blog post." },
  ];
};

export default function AdminBlogNew() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">New Blog Post</h1>

        <form className="space-y-8">
          {/* Basic Information */}
          <section>
            <h2 className="text-heading-2 mb-4">Post Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter post title..."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Excerpt
                </label>
                <textarea
                  rows={3}
                  placeholder="Brief description that appears in previews..."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Content
                </label>
                <textarea
                  rows={12}
                  placeholder="Write your blog post content here..."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section>
            <h2 className="text-heading-2 mb-4">Featured Image</h2>
            <div className="border-2 border-dashed border-gray-300 p-8 text-center">
              <p className="text-body text-gray-600 mb-2">
                Upload featured image
              </p>
              <p className="text-body-small text-gray-500">
                Recommended: 1200x630px, JPG or PNG
              </p>
              <input type="file" accept="image/*" className="hidden" />
              <Button variant="outline" className="mt-4">
                Choose Image
              </Button>
            </div>
          </section>

          {/* Post Settings */}
          <section>
            <h2 className="text-heading-2 mb-4">Post Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  Status
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                </select>
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Author
                </label>
                <input
                  type="text"
                  defaultValue="Admin"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Publish Date
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Reading Time (minutes)
                </label>
                <input
                  type="number"
                  placeholder="5"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-body">Featured Post</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-body">Allow Comments</span>
              </label>
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
                  placeholder="Post title - Otherside Blog"
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
                  placeholder="post-url-slug"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">Tags</label>
                <input
                  type="text"
                  placeholder="art, digital, collection (comma separated)"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          <div className="flex gap-4">
            <Button size="lg">Publish Post</Button>
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
