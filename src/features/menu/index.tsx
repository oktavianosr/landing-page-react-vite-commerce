import { notifin } from '@khencahyo13/notifin-react';
import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

import { fetchMenus } from '@/api/menus';
import { queryKeys } from '@/lib/query-keys';
import { useCartStore } from '@/stores/cart-store';
import type { Menu } from '@/types/menu';

import MenuView from './view';

function MenuSection() {
  const addItem = useCartStore((state) => state.addItem);

  const query = useQuery({
    queryKey: queryKeys.menus.list(),
    queryFn: fetchMenus,
  });

  const handleAddToCart = useCallback(
    (menu: Menu) => {
      addItem(menu);
      notifin.success('Ditambahkan ke keranjang', {
        description: menu.name,
      });
    },
    [addItem]
  );

  return (
    <MenuView
      menus={query.data?.data ?? []}
      isLoading={query.isLoading}
      isError={query.isError}
      onRetry={() => query.refetch()}
      onAddToCart={handleAddToCart}
    />
  );
}

export default MenuSection;
