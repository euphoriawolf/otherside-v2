// Database Models
export interface User {
  id: string;
  email: string;
  name: string;
  google_id: string;
  role: 'customer' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  video_url?: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  collection_id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  video_url?: string;
  dimensions: {
    width: number;
    height: number;
    depth?: number;
  };
  materials: string[];
  limited_edition: boolean;
  stock_count: number;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
  // Relations
  collection?: Collection;
}

export interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  shipping_address: Address;
  billing_address: Address;
  payment_intent_id?: string;
  created_at: string;
  updated_at: string;
  // Relations
  user?: User;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  price_at_time: number;
  // Relations
  product?: Product;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image?: string;
  author_id: string;
  published_at?: string;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  updated_at: string;
  // Relations
  author?: User;
}

export interface Address {
  first_name: string;
  last_name: string;
  company?: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone?: string;
}

// Cart & Session Types
export interface CartItem {
  product_id: string;
  quantity: number;
  product?: Product;
}

export interface Cart {
  items: CartItem[];
  total: number;
  item_count: number;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
}

// Form Types
export interface ProductFormData {
  name: string;
  collection_id: string;
  description: string;
  price: number;
  images: File[];
  video?: File;
  dimensions: {
    width: number;
    height: number;
    depth?: number;
  };
  materials: string[];
  limited_edition: boolean;
  stock_count: number;
  status: 'draft' | 'published';
}

export interface CollectionFormData {
  name: string;
  description: string;
  image: File;
  video?: File;
  status: 'draft' | 'published';
}

export interface BlogPostFormData {
  title: string;
  content: string;
  excerpt: string;
  featured_image?: File;
  status: 'draft' | 'published';
}

// Component Props Types
export interface ProductCardProps {
  product: Product;
  showVideo?: boolean;
  className?: string;
}

export interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

// Auth Types
export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
}

export interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// Filter & Search Types
export interface ProductFilters {
  collection_id?: string;
  price_min?: number;
  price_max?: number;
  materials?: string[];
  limited_edition?: boolean;
  in_stock?: boolean;
}

export interface SearchParams {
  query?: string;
  filters?: ProductFilters;
  sort?: 'name' | 'price_asc' | 'price_desc' | 'created_at';
  page?: number;
  per_page?: number;
} 