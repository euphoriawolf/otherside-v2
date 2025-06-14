import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Manage Blog - Admin" },
    { name: "description", content: "Manage blog posts and content." },
  ];
};

export default function AdminBlog() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-heading-1">Blog Posts</h1>
          <Button>New Post</Button>
        </div>

        <div className="space-y-6">
          {[
            {
              title: "The Future of Wall Art",
              status: "Published",
              date: "Mar 15, 2024",
              author: "Admin",
            },
            {
              title: "Behind the Genesis Collection",
              status: "Published",
              date: "Mar 10, 2024",
              author: "Admin",
            },
            {
              title: "Art That Evolves",
              status: "Draft",
              date: "Mar 8, 2024",
              author: "Admin",
            },
          ].map((post, i) => (
            <div key={i} className="border border-gray-200 p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-heading-3 mb-2">{post.title}</h3>
                  <div className="flex items-center gap-4 text-body-small text-gray-600">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                    <span
                      className={`px-2 py-1 ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-900 text-body-small">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900 text-body-small">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
