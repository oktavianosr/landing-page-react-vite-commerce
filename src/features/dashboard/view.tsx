import { LogOut, Pencil, Plus, Trash2 } from 'lucide-react';
import { memo } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatRupiah } from '@/lib/number';

import MenuTableSkeleton from './components/skeleton';
import type { DashboardViewProps } from './types';

function DashboardView({
  menus,
  isLoading,
  isError,
  onAdd,
  onEdit,
  onDeleteRequest,
  onLogout,
}: DashboardViewProps) {
  return (
    <div className="container py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Kelola Menu</h1>
        <div className="flex items-center gap-2">
          <Button variant="brand" onClick={onAdd}>
            <Plus className="size-4" />
            Tambah Menu
          </Button>
          <Button variant="outline" onClick={onLogout}>
            <LogOut className="size-4" />
            Keluar
          </Button>
        </div>
      </div>

      {isError && (
        <p className="text-destructive mb-4 text-sm">Gagal memuat data menu. Muat ulang halaman.</p>
      )}

      <div className="rounded-2xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Foto</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <MenuTableSkeleton />
            ) : (
              menus.map((menu) => (
                <TableRow key={menu.id}>
                  <TableCell>
                    <img
                      src={menu.image}
                      alt={menu.name}
                      className="size-12 rounded-lg object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{menu.name}</TableCell>
                  <TableCell>{menu.category}</TableCell>
                  <TableCell>{formatRupiah(menu.price)}</TableCell>
                  <TableCell>{menu.featured && <Badge>Best Seller</Badge>}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Edit ${menu.name}`}
                      onClick={() => onEdit(menu)}
                    >
                      <Pencil className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Hapus ${menu.name}`}
                      onClick={() => onDeleteRequest(menu)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default memo(DashboardView);
