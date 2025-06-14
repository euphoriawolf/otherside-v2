import type { Product, Collection, BlogPost, User } from './types';

// Mock Collections Data
export const collections: Collection[] = [
  {
    id: 'genesis',
    name: 'Genesis',
    slug: 'genesis',
    description: 'The beginning of digital consciousness. Our Genesis collection explores the moment of creation itself, where abstract forms emerge from darkness in an endless cycle of birth and renewal.',
    image_url: '/assets/Samples/1.png',
    video_url: '/assets/Samples/1.mp4',
    status: 'published',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
];

// Mock Products Data
export const products: Product[] = [
  {
    id: 'genesis-01',
    collection_id: 'genesis',
    name: 'Genesis #01',
    slug: 'genesis-01',
    description: 'The first piece in our Genesis collection, this artwork explores the moment of creation itself. Watch as abstract forms emerge from darkness, evolving and transforming in an endless cycle of birth and renewal.',
    price: 240000, // $2400 in cents
    images: ['/assets/Samples/1.png'],
    video_url: '/assets/Samples/1.mp4',
    dimensions: { width: 24, height: 36, depth: 2 },
    materials: ['Premium Canvas', 'Digital Display', 'Aluminum Frame'],
    limited_edition: true,
    stock_count: 12,
    status: 'published',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  {
    id: 'genesis-02',
    collection_id: 'genesis',
    name: 'Genesis #02',
    slug: 'genesis-02',
    description: 'The second evolution in our Genesis series, exploring deeper themes of emergence and digital consciousness. Fluid forms dance between reality and imagination.',
    price: 260000, // $2600 in cents
    images: ['/assets/Samples/2.png'],
    video_url: '/assets/Samples/2.mp4',
    dimensions: { width: 24, height: 36, depth: 2 },
    materials: ['Premium Canvas', 'Digital Display', 'Aluminum Frame'],
    limited_edition: true,
    stock_count: 8,
    status: 'published',
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z',
  },
  {
    id: 'genesis-03',
    collection_id: 'genesis',
    name: 'Genesis #03',
    slug: 'genesis-03',
    description: 'The culmination of the Genesis trilogy, where digital consciousness reaches its full expression. A mesmerizing interplay of light, shadow, and infinite possibility.',
    price: 280000, // $2800 in cents
    images: ['/assets/Samples/3.png'],
    video_url: '/assets/Samples/3.mp4',
    dimensions: { width: 24, height: 36, depth: 2 },
    materials: ['Premium Canvas', 'Digital Display', 'Aluminum Frame'],
    limited_edition: true,
    stock_count: 6,
    status: 'published',
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z',
  },
];

// Mock Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 'the-future-of-digital-art',
    title: 'The Future of Digital Art',
    slug: 'the-future-of-digital-art',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    excerpt: 'Exploring how technology is reshaping the art world and creating new possibilities for creative expression.',
    featured_image: '/assets/Samples/1.png',
    author_id: 'admin-1',
    published_at: '2024-01-15T00:00:00Z',
    status: 'published',
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  },
  {
    id: 'behind-the-scenes-genesis',
    title: 'Behind the Scenes: Genesis Collection',
    slug: 'behind-the-scenes-genesis',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    excerpt: 'An inside look at the creation process of our inaugural Genesis collection.',
    featured_image: '/assets/Samples/2.png',
    author_id: 'admin-1',
    published_at: '2024-02-01T00:00:00Z',
    status: 'published',
    created_at: '2024-02-01T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z',
  },
];

// Data Access Functions
export function getCollections(): Collection[] {
  return collections.filter(c => c.status === 'published');
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(c => c.slug === slug && c.status === 'published');
}

export function getProducts(): Product[] {
  return products.filter(p => p.status === 'published');
}

export function getProductsByCollection(collectionId: string): Product[] {
  return products.filter(p => p.collection_id === collectionId && p.status === 'published');
}

export function getProductBySlug(slug: string): Product | undefined {
  const product = products.find(p => p.slug === slug && p.status === 'published');
  if (product) {
    // Add collection data
    const collection = collections.find(c => c.id === product.collection_id);
    return {
      ...product,
      collection
    };
  }
  return product;
}

export function getFeaturedProducts(limit: number = 3): Product[] {
  return products
    .filter(p => p.status === 'published')
    .slice(0, limit);
}

export function getRelatedProducts(productId: string, limit: number = 3): Product[] {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  
  return products
    .filter(p => 
      p.id !== productId && 
      p.collection_id === product.collection_id && 
      p.status === 'published'
    )
    .slice(0, limit);
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts.filter(p => p.status === 'published');
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug && p.status === 'published');
}

// Search functions
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return [];
  
  return products.filter(product => 
    product.status === 'published' && (
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.materials?.some(material => material.toLowerCase().includes(searchTerm))
    )
  ).slice(0, 6); // Limit to 6 results
}

export function searchCollections(query: string): Collection[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return [];
  
  return collections.filter(collection => 
    collection.status === 'published' && (
      collection.name.toLowerCase().includes(searchTerm) ||
      collection.description.toLowerCase().includes(searchTerm)
    )
  ).slice(0, 3); // Limit to 3 results
}

// Format price from cents to dollars
export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toLocaleString()}`;
}

// Format dimensions
export function formatDimensions(dimensions: { width: number; height: number; depth?: number }): string {
  const { width, height, depth } = dimensions;
  if (depth) {
    return `${width}" × ${height}" × ${depth}"`;
  }
  return `${width}" × ${height}"`;
} 