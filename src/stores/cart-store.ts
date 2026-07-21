import { create } from 'zustand';

import type { Menu } from '@/types/menu';

export interface CartItem extends Menu {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  /** Total quantity across all items (used by the navbar badge). */
  count: () => number;
  /** Total price (qty * price) across all items. */
  total: () => number;
  addItem: (menu: Menu) => void;
  /** Reduce an item's quantity by one; removes it when it hits zero. */
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  count: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
  total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  addItem: (menu) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === menu.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { items: [...state.items, { ...menu, quantity: 1 }] };
    }),
  decrementItem: (id) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  clear: () => set({ items: [] }),
}));
