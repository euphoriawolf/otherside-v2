import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Manage Collections - Admin" },
    { name: "description", content: "Manage your art collections." },
  ];
};

export default function AdminCollections() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-heading-1">Collections</h1>
          <Button>Add New Collection</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Genesis", products: 12, status: "Published" },
            { name: "Metamorphosis", products: 8, status: "Published" },
            { name: "Ethereal", products: 15, status: "Draft" },
            { name: "Kinetic", products: 10, status: "Published" },
          ].map((collection, i) => (
            <div key={i} className="border border-gray-200 p-6">
              <div className="aspect-[4/3] bg-gray-100 mb-4">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Collection Image
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-heading-3">{collection.name}</h3>
                <p className="text-body text-gray-600">
                  {collection.products} products
                </p>
                <span
                  className={`inline-block px-2 py-1 text-body-small ${
                    collection.status === "Published"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {collection.status}
                </span>
                <div className="flex gap-2 pt-2">
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
