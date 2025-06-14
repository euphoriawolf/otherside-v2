import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link } from "react-router";
import { getBlogPostBySlug } from "~/lib/data";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Blog post not found", { status: 404 });
  }

  const post = getBlogPostBySlug(slug);
  if (!post) {
    throw new Response("Blog post not found", { status: 404 });
  }

  return { post };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Blog Post Not Found - Otherside" }];
  }

  return [
    { title: `${data.post.title} - Otherside Blog` },
    {
      name: "description",
      content: data.post.excerpt,
    },
  ];
};

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      <article className="max-w-4xl mx-auto px-6 py-12">
        <header ref={headerRef} className="mb-12 text-center animate-on-scroll">
          <p className="text-caption text-chrome-500 mb-4">
            {new Date(post.published_at || post.created_at).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
          <h1 className="text-display mb-6 text-chrome-100">{post.title}</h1>
          <p className="text-body text-chrome-300">{post.excerpt}</p>
        </header>

        {post.featured_image && (
          <div className="aspect-[16/9] bg-metal-light mb-12 rounded-xl overflow-hidden">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          ref={contentRef}
          className="prose prose-lg max-w-none animate-on-scroll"
        >
          <div className="text-body text-chrome-300 leading-relaxed space-y-6">
            {/* For now, showing the content as is. In a real app, you'd parse markdown or rich text */}
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-16 pt-8 border-t border-glass-border">
          <Link
            to="/blog"
            className="text-body text-chrome-400 hover:text-chrome-200 transition-colors font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
