import type { Menu } from '@/types/menu';

export interface MenuViewProps {
  menus: Menu[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  onAddToCart: (menu: Menu) => void;
}

export interface MenuCardProps {
  menu: Menu;
  onAddToCart: (menu: Menu) => void;
}
