import type { z } from 'zod';

import type { Menu } from '@/types/menu';

import type { menuFormSchema } from './schema';

export type MenuFormValues = z.infer<typeof menuFormSchema>;

export interface MenuFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  menu: Menu | null;
  isSubmitting: boolean;
  onSubmit: (values: MenuFormValues) => Promise<unknown>;
}

export interface DeleteMenuDialogProps {
  menu: Menu | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: (menu: Menu) => void;
  isDeleting: boolean;
}

export interface DashboardViewProps {
  menus: Menu[];
  isLoading: boolean;
  isError: boolean;
  onAdd: () => void;
  onEdit: (menu: Menu) => void;
  onDeleteRequest: (menu: Menu) => void;
  onLogout: () => void;
}
