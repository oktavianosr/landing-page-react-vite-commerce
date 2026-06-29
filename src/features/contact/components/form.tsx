import type { AnyFieldApi } from '@tanstack/react-form';
import { Send } from 'lucide-react';
import { memo } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import type { ContactFormProps } from '../types';

/** Normalise TanStack Form / Standard Schema issues into display strings. */
function errorMessages(errors: unknown[]): string[] {
  return errors
    .map((error) =>
      typeof error === 'string'
        ? error
        : ((error as { message?: string } | null)?.message ?? null)
    )
    .filter((message): message is string => Boolean(message));
}

function FieldError({ errors }: { errors: unknown[] }) {
  const messages = errorMessages(errors);
  if (messages.length === 0) return null;
  return <p className="text-destructive text-sm">{messages[0]}</p>;
}

function ContactForm({ form, isSubmitting }: ContactFormProps) {
  return (
    <form
      className="flex flex-col gap-5"
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
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Nama Anda"
              aria-invalid={field.state.meta.errors.length > 0}
            />
            <FieldError errors={field.state.meta.errors} />
          </div>
        )}
      </form.Field>

      <form.Field name="email">
        {(field: AnyFieldApi) => (
          <div className="flex flex-col gap-2">
            <Label htmlFor={field.name}>Email</Label>
            <Input
              id={field.name}
              name={field.name}
              type="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="email@contoh.com"
              aria-invalid={field.state.meta.errors.length > 0}
            />
            <FieldError errors={field.state.meta.errors} />
          </div>
        )}
      </form.Field>

      <form.Field name="message">
        {(field: AnyFieldApi) => (
          <div className="flex flex-col gap-2">
            <Label htmlFor={field.name}>Pesan</Label>
            <Textarea
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Tulis pesan atau pesanan Anda di sini..."
              rows={5}
              aria-invalid={field.state.meta.errors.length > 0}
            />
            <FieldError errors={field.state.meta.errors} />
          </div>
        )}
      </form.Field>

      <Button
        type="submit"
        variant="brand"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        <Send className="size-4" />
        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
      </Button>
    </form>
  );
}

export default memo(ContactForm);
