import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Public routes
  index("routes/home.tsx"),
  route("/collections", "routes/collections.tsx"),
  route("/collections/:slug", "routes/collection.tsx"),
  route("/product/:slug", "routes/product.tsx"),
  route("/blog", "routes/blog.tsx"),
  route("/blog/:slug", "routes/blog-post.tsx"),
  route("/cart", "routes/cart.tsx"),
  route("/checkout", "routes/checkout.tsx"),
  route("/auth", "routes/auth.tsx"),
  
  // Protected user routes
  route("/account", "routes/account.tsx"),
  route("/account/orders", "routes/account/orders.tsx"),
  route("/account/wishlist", "routes/account/wishlist.tsx"),
  route("/account/profile", "routes/account/profile.tsx"),
  
  // Admin routes
  route("/admin", "routes/admin/dashboard.tsx"),
  route("/admin/products", "routes/admin/products.tsx"),
  route("/admin/products/new", "routes/admin/products/new.tsx"),
  route("/admin/products/:id/edit", "routes/admin/products/edit.tsx"),
  route("/admin/collections", "routes/admin/collections.tsx"),
  route("/admin/collections/new", "routes/admin/collections/new.tsx"),
  route("/admin/collections/:id/edit", "routes/admin/collections/edit.tsx"),
  route("/admin/orders", "routes/admin/orders.tsx"),
  route("/admin/users", "routes/admin/users.tsx"),
  route("/admin/blog", "routes/admin/blog.tsx"),
  route("/admin/blog/new", "routes/admin/blog/new.tsx"),
  route("/admin/blog/:id/edit", "routes/admin/blog/edit.tsx"),
] satisfies RouteConfig;
