import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Edit Blog Post - Admin" },
    { name: "description", content: "Edit blog post." },
  ];
};

export default function AdminBlogEdit() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">
          Edit Post: The Future of Wall Art
        </h1>

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
                  defaultValue="The Future of Wall Art"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Excerpt
                </label>
                <textarea
                  rows={3}
                  defaultValue="Exploring how digital technology is revolutionizing the way we experience and interact with wall art in our homes and spaces."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Content
                </label>
                <textarea
                  rows={12}
                  defaultValue="The world of wall art is undergoing a profound transformation. What was once static and unchanging is now dynamic, responsive, and alive with possibility.

At Otherside, we believe that art should evolve with you, your mood, and your space. Our pieces don't just hang on your wall—they become part of your living environment, responding to your presence and creating an ever-changing canvas of beauty.

This shift represents more than just technological advancement; it's a fundamental reimagining of what art can be in our daily lives. When your wall art can transform throughout the day, matching your energy or complementing the natural light streaming through your windows, it becomes more than decoration—it becomes a living part of your home.

The future of wall art is here, and it's more beautiful than we ever imagined."
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          {/* Current Featured Image */}
          <section>
            <h2 className="text-heading-2 mb-4">Current Featured Image</h2>
            <div className="mb-4">
              <div className="aspect-[2/1] bg-gray-100 max-w-md">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Current Featured Image
                </div>
              </div>
            </div>
            <div className="border-2 border-dashed border-gray-300 p-6 text-center">
              <p className="text-body text-gray-600 mb-2">
                Upload new featured image
              </p>
              <p className="text-body-small text-gray-500">
                Recommended: 1200x630px, JPG or PNG
              </p>
              <input type="file" accept="image/*" className="hidden" />
              <Button variant="outline" className="mt-4">
                Choose New Image
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
                <select
                  defaultValue="Published"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                  <option>Archived</option>
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
                  defaultValue="2024-03-15T10:00"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Reading Time (minutes)
                </label>
                <input
                  type="number"
                  defaultValue="3"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-3" />
                <span className="text-body">Featured Post</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-3" />
                <span className="text-body">Allow Comments</span>
              </label>
            </div>
          </section>

          {/* Post Stats */}
          <section>
            <h2 className="text-heading-2 mb-4">Post Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4">
                <div className="text-heading-3">1,247</div>
                <div className="text-body-small text-gray-600">Views</div>
              </div>
              <div className="bg-gray-50 p-4">
                <div className="text-heading-3">23</div>
                <div className="text-body-small text-gray-600">Comments</div>
              </div>
              <div className="bg-gray-50 p-4">
                <div className="text-heading-3">45</div>
                <div className="text-body-small text-gray-600">Shares</div>
              </div>
            </div>
          </section>

          <div className="flex gap-4">
            <Button size="lg">Update Post</Button>
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
