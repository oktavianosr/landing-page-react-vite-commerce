import { create } from 'zustand';

interface UiState {
  /** Mobile navigation sheet open state. */
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (mobileNavOpen) => set({ mobileNavOpen }),
}));
