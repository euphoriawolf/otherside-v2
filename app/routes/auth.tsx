import type { MetaFunction } from "react-router";
import { Button } from "~/components/ui/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "Sign In - Otherside" },
    { name: "description", content: "Sign in to your Otherside account." },
  ];
};

export default function Auth() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-heading-1 mb-4">Welcome</h1>
          <p className="text-body text-gray-600">
            Sign in to access your account and manage your collection.
          </p>
        </div>

        <div className="space-y-6">
          {/* Google Sign In */}
          <Button
            variant="outline"
            size="lg"
            className="w-full flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          {/* Email Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button size="lg" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="text-center">
            <p className="text-body-small text-gray-600">
              Don't have an account?{" "}
              <button className="font-medium hover:underline">Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
