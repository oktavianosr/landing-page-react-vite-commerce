import { create } from 'zustand';

interface UiState {
  /** Mobile navigation sheet open state. */
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  /** Cart drawer open state. */
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (mobileNavOpen) => set({ mobileNavOpen }),
  cartOpen: false,
  setCartOpen: (cartOpen) => set({ cartOpen }),
}));
