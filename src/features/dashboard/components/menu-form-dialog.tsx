import type { AnyFieldApi } from '@tanstack/react-form';
import { useForm } from '@tanstack/react-form';

import { FieldError } from '@/components/form-field-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { menuFormDefaultValues, menuFormSchema } from '../schema';
import type { MenuFormDialogProps, MenuFormValues } from '../types';

/** Owns the actual form; remounted (via `key`) whenever the target record changes. */
function MenuFormFields({
  menu,
  isSubmitting,
  onSubmit,
}: {
  menu: MenuFormDialogProps['menu'];
  isSubmitting: boolean;
  onSubmit: (values: MenuFormValues) => void;
}) {
  const form = useForm({
    defaultValues: menu
      ? {
          name: menu.name,
          description: menu.description,
          price: menu.price,
          category: menu.category,
          featured: menu.featured ?? false,
          image: menu.image,
        }
      : menuFormDefaultValues,
    validators: { onSubmit: menuFormSchema },
    onSubmit: async ({ value }) => onSubmit(value),
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field name="name">
        {(field: AnyFieldApi) => (
          <div className="flex flex-col gap-2">
            <Label htmlFor={field.name}>Nama</Label>
            <Input
              id={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              aria-invalid={field.state.meta.errors.length > 0}
            />
            <FieldError errors={field.state.meta.errors} />
          </div>
        )}
      </form.Field>

      <form.Field name="description">
        {(field: AnyFieldApi) => (
          <div className="flex flex-col gap-2">
            <Label htmlFor={field.name}>Deskripsi</Label>
            <Textarea
              id={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              rows={3}
              aria-invalid={field.state.meta.errors.length > 0}
            />
            <FieldError errors={field.state.meta.errors} />
          </div>
        )}
      </form.Field>

      <div className="grid grid-cols-2 gap-4">
        <form.Field name="price">
          {(field: AnyFieldApi) => (
            <div className="flex flex-col gap-2">
              <Label htmlFor={field.name}>Harga (Rp)</Label>
              <Input
                id={field.name}
                type="number"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                aria-invalid={field.state.meta.errors.length > 0}
              />
              <FieldError errors={field.state.meta.errors} />
            </div>
          )}
        </form.Field>

        <form.Field name="category">
          {(field: AnyFieldApi) => (
            <div className="flex flex-col gap-2">
              <Label htmlFor={field.name}>Kategori</Label>
              <Input
                id={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                aria-invalid={field.state.meta.errors.length > 0}
              />
              <FieldError errors={field.state.meta.errors} />
            </div>
          )}
        </form.Field>
      </div>

      <form.Field name="image">
        {(field: AnyFieldApi) => (
          <div className="flex flex-col gap-2">
            <Label htmlFor={field.name}>Foto Menu</Label>
            <Input
              id={field.name}
              type="file"
              accept="image/*"
              onChange={(e) => field.handleChange(e.target.files?.[0] ?? '')}
              aria-invalid={field.state.meta.errors.length > 0}
            />
            {typeof field.state.value === 'string' && field.state.value && (
              <img
                src={field.state.value}
                alt="Pratinjau"
                className="h-24 w-24 rounded-lg object-cover"
              />
            )}
            <FieldError errors={field.state.meta.errors} />
          </div>
        )}
      </form.Field>

      <form.Field name="featured">
        {(field: AnyFieldApi) => (
          <label className="flex items-center gap-2">
            <Checkbox
              checked={field.state.value}
              onCheckedChange={(checked) => field.handleChange(checked === true)}
            />
            <span className="text-sm">Tandai sebagai Best Seller</span>
          </label>
        )}
      </form.Field>

      <DialogFooter>
        <Button type="submit" variant="brand" disabled={isSubmitting}>
          {isSubmitting ? 'Menyimpan...' : 'Simpan'}
        </Button>
      </DialogFooter>
    </form>
  );
}

function MenuFormDialog({ open, onOpenChange, menu, isSubmitting, onSubmit }: MenuFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{menu ? 'Edit Menu' : 'Tambah Menu'}</DialogTitle>
        </DialogHeader>
        {open && (
          <MenuFormFields
            key={menu?.id ?? 'new'}
            menu={menu}
            isSubmitting={isSubmitting}
            onSubmit={onSubmit}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default MenuFormDialog;
