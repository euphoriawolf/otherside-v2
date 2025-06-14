import type { Cart, CartItem, Product } from './types';
import { getProductBySlug } from './data';

const CART_STORAGE_KEY = 'otherside-cart';

// Cart state management
export class CartManager {
  private cart: Cart = {
    items: [],
    total: 0,
    item_count: 0,
  };

  constructor() {
    this.loadCart();
  }

  // Load cart from localStorage
  private loadCart(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        this.cart = JSON.parse(stored);
        this.recalculateCart();
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
      this.cart = { items: [], total: 0, item_count: 0 };
    }
  }

  // Save cart to localStorage
  private saveCart(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  }

  // Recalculate cart totals
  private recalculateCart(): void {
    this.cart.item_count = this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
    this.cart.total = this.cart.items.reduce((sum, item) => {
      if (item.product) {
        return sum + (item.product.price * item.quantity);
      }
      return sum;
    }, 0);
  }

  // Get current cart
  getCart(): Cart {
    return { ...this.cart };
  }

  // Add item to cart
  addItem(productSlug: string, quantity: number = 1): boolean {
    const product = getProductBySlug(productSlug);
    if (!product) return false;

    const existingItem = this.cart.items.find(item => item.product_id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.items.push({
        product_id: product.id,
        quantity,
        product,
      });
    }

    this.recalculateCart();
    this.saveCart();
    return true;
  }

  // Update item quantity
  updateItemQuantity(productId: string, quantity: number): boolean {
    const item = this.cart.items.find(item => item.product_id === productId);
    if (!item) return false;

    if (quantity <= 0) {
      return this.removeItem(productId);
    }

    item.quantity = quantity;
    this.recalculateCart();
    this.saveCart();
    return true;
  }

  // Remove item from cart
  removeItem(productId: string): boolean {
    const index = this.cart.items.findIndex(item => item.product_id === productId);
    if (index === -1) return false;

    this.cart.items.splice(index, 1);
    this.recalculateCart();
    this.saveCart();
    return true;
  }

  // Clear entire cart
  clearCart(): void {
    this.cart = { items: [], total: 0, item_count: 0 };
    this.saveCart();
  }

  // Get item count
  getItemCount(): number {
    return this.cart.item_count;
  }

  // Get cart total
  getTotal(): number {
    return this.cart.total;
  }

  // Check if product is in cart
  isInCart(productId: string): boolean {
    return this.cart.items.some(item => item.product_id === productId);
  }

  // Get item quantity for a product
  getItemQuantity(productId: string): number {
    const item = this.cart.items.find(item => item.product_id === productId);
    return item ? item.quantity : 0;
  }
}

// Global cart instance
let cartManager: CartManager | null = null;

export function getCartManager(): CartManager {
  if (!cartManager) {
    cartManager = new CartManager();
  }
  return cartManager;
}

// React hook for cart management
import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0, item_count: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const manager = getCartManager();
    setCart(manager.getCart());
    setIsLoading(false);
  }, []);

  const addItem = (productSlug: string, quantity: number = 1) => {
    const manager = getCartManager();
    const success = manager.addItem(productSlug, quantity);
    if (success) {
      setCart(manager.getCart());
    }
    return success;
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const manager = getCartManager();
    const success = manager.updateItemQuantity(productId, quantity);
    if (success) {
      setCart(manager.getCart());
    }
    return success;
  };

  const removeItem = (productId: string) => {
    const manager = getCartManager();
    const success = manager.removeItem(productId);
    if (success) {
      setCart(manager.getCart());
    }
    return success;
  };

  const clearCart = () => {
    const manager = getCartManager();
    manager.clearCart();
    setCart(manager.getCart());
  };

  return {
    cart,
    isLoading,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    isInCart: (productId: string) => getCartManager().isInCart(productId),
    getItemQuantity: (productId: string) => getCartManager().getItemQuantity(productId),
  };
} 