import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { createMenu, deleteMenu, fetchMenus, updateMenu, uploadMenuImage } from '@/api/menus';
import { queryKeys } from '@/lib/query-keys';
import { supabase } from '@/lib/supabase';
import type { Menu } from '@/types/menu';

import DeleteMenuDialog from './components/delete-menu-dialog';
import MenuFormDialog from './components/menu-form-dialog';
import type { MenuFormValues } from './types';
import DashboardView from './view';

function Dashboard() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [formOpen, setFormOpen] = useState(false);
  const [editingMenu, setEditingMenu] = useState<Menu | null>(null);
  const [deletingMenu, setDeletingMenu] = useState<Menu | null>(null);

  const query = useQuery({
    queryKey: queryKeys.menus.list(),
    queryFn: fetchMenus,
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: queryKeys.menus.all });

  const saveMutation = useMutation({
    mutationFn: async (values: MenuFormValues) => {
      const image =
        typeof values.image === 'string' ? values.image : await uploadMenuImage(values.image);
      const payload = { ...values, image };

      return editingMenu ? updateMenu(editingMenu.id, payload) : createMenu(payload);
    },
    onSuccess: () => {
      invalidate();
      setFormOpen(false);
      setEditingMenu(null);
      notifin.success(editingMenu ? 'Menu diperbarui' : 'Menu ditambahkan');
    },
    onError: () => notifin.error('Gagal menyimpan menu', { description: 'Silakan coba lagi.' }),
  });

  const deleteMutation = useMutation({
    mutationFn: (menu: Menu) => deleteMenu(menu.id),
    onSuccess: () => {
      invalidate();
      setDeletingMenu(null);
      notifin.success('Menu dihapus');
    },
    onError: () => notifin.error('Gagal menghapus menu', { description: 'Silakan coba lagi.' }),
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: '/login' });
  };

  return (
    <>
      <DashboardView
        menus={query.data?.data ?? []}
        isLoading={query.isLoading}
        isError={query.isError}
        onAdd={() => {
          setEditingMenu(null);
          setFormOpen(true);
        }}
        onEdit={(menu) => {
          setEditingMenu(menu);
          setFormOpen(true);
        }}
        onDeleteRequest={setDeletingMenu}
        onLogout={handleLogout}
      />
      <MenuFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        menu={editingMenu}
        isSubmitting={saveMutation.isPending}
        onSubmit={(values) => saveMutation.mutateAsync(values)}
      />
      <DeleteMenuDialog
        menu={deletingMenu}
        onOpenChange={(open) => !open && setDeletingMenu(null)}
        onConfirm={(menu) => deleteMutation.mutate(menu)}
        isDeleting={deleteMutation.isPending}
      />
    </>
  );
}

export default Dashboard;
