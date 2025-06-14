import type { MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import { getBlogPosts } from "~/lib/data";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export async function loader() {
  const posts = getBlogPosts();
  return { posts };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Blog - Otherside" },
    {
      name: "description",
      content:
        "Stories, insights, and inspiration from the world of living art.",
    },
  ];
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();
  const headerRef = useScrollAnimation();
  const postsRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      <section
        ref={headerRef}
        className="py-16 px-6 text-center animate-on-scroll"
      >
        <h1 className="text-display mb-6">Blog</h1>
        <p className="text-body max-w-2xl mx-auto text-chrome-300">
          Stories, insights, and inspiration from the world of living art.
        </p>
      </section>

      <section ref={postsRef} className="pb-24 px-6 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <article className="group cursor-pointer glass-panel rounded-xl p-8 transition-glass hover:scale-[1.02]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="aspect-[4/3] bg-metal-light rounded-lg overflow-hidden">
                      {post.featured_image ? (
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-chrome-400">
                          [Blog Image]
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <p className="text-caption text-chrome-500">
                        {new Date(
                          post.published_at || post.created_at
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <h2 className="text-heading-2 text-chrome-100 group-hover:text-accent-glow transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-body text-chrome-300">
                        {post.excerpt}
                      </p>
                      <p className="text-body-small font-medium text-chrome-400">
                        Read More →
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
