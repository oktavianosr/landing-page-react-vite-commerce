import { supabase } from '@/lib/supabase';
import type { ApiResponse } from '@/types/api';
import type { Menu } from '@/types/menu';

export type MenuInput = Omit<Menu, 'id'>;

export async function fetchMenus(): Promise<ApiResponse<Menu[]>> {
  const { data, error } = await supabase.from('menus').select('*').order('created_at');
  if (error) throw error;
  return { success: true, message: null, data: (data ?? []) as Menu[] };
}

export async function createMenu(input: MenuInput): Promise<Menu> {
  const { data, error } = await supabase.from('menus').insert(input).select().single();
  if (error) throw error;
  return data as Menu;
}

export async function updateMenu(id: string, input: MenuInput): Promise<Menu> {
  const { data, error } = await supabase.from('menus').update(input).eq('id', id).select().single();
  if (error) throw error;
  return data as Menu;
}

export async function deleteMenu(id: string): Promise<void> {
  const { error } = await supabase.from('menus').delete().eq('id', id);
  if (error) throw error;
}

/** Uploads a menu photo to the `menu-images` bucket and returns its public URL. */
export async function uploadMenuImage(file: File): Promise<string> {
  const path = `${crypto.randomUUID()}-${file.name}`;
  const { error } = await supabase.storage.from('menu-images').upload(path, file);
  if (error) throw error;

  const {
    data: { publicUrl },
  } = supabase.storage.from('menu-images').getPublicUrl(path);
  return publicUrl;
}
