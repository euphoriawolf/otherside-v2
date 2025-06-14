import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Profile - Otherside Account" },
    { name: "description", content: "Manage your profile information." },
  ];
};

export default function AccountProfile() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-heading-1 mb-8">Profile</h1>

        <form className="space-y-8">
          {/* Personal Information */}
          <section>
            <h2 className="text-heading-2 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-body font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-body font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-body font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section>
            <h2 className="text-heading-2 mb-4">Default Shipping Address</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Address Line 2 (Optional)"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>
          </section>

          {/* Preferences */}
          <section>
            <h2 className="text-heading-2 mb-4">Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-body">
                  Email me about new collections
                </span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-body">
                  Email me about exclusive offers
                </span>
              </label>
            </div>
          </section>

          <div className="flex gap-4">
            <Button size="lg">Save Changes</Button>
            <Button variant="outline" size="lg">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
