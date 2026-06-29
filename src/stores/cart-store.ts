import { create } from 'zustand';

import type { Menu } from '@/types/menu';

export interface CartItem extends Menu {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  /** Total quantity across all items (used by the navbar badge). */
  count: () => number;
  addItem: (menu: Menu) => void;
  removeItem: (id: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  count: () => get().items.reduce((total, item) => total + item.quantity, 0),
  addItem: (menu) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === menu.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === menu.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...menu, quantity: 1 }] };
    }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  clear: () => set({ items: [] }),
}));
