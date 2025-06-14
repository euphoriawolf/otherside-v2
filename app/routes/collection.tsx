import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link } from "react-router";
import { getCollectionBySlug, getProductsByCollection } from "~/lib/data";
import { CollectionHero } from "~/components/art/CollectionHero";
import { ProductCard } from "~/components/art/ProductCard";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Collection not found", { status: 404 });
  }

  const collection = getCollectionBySlug(slug);
  if (!collection) {
    throw new Response("Collection not found", { status: 404 });
  }

  const products = getProductsByCollection(collection.id);

  return { collection, products };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Collection Not Found - Otherside" }];
  }

  return [
    { title: `${data.collection.name} Collection - Otherside` },
    {
      name: "description",
      content: data.collection.description,
    },
  ];
};

export default function Collection() {
  const { collection, products } = useLoaderData<typeof loader>();
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Collection Hero */}
      <CollectionHero collection={collection} />

      {/* Products Grid */}
      <section ref={gridRef} className="pb-24 px-6 animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-heading-2 text-chrome-100">
              Artworks ({products.length})
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showVideo={true}
                className="animate-liquid-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Back to Collections */}
      <div className="pb-16 text-center">
        <Link
          to="/collections"
          className="text-body text-chrome-400 hover:text-chrome-200 transition-colors"
        >
          ← Back to Collections
        </Link>
      </div>
    </div>
  );
}
