import { z } from 'zod';

export const checkoutFormSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi'),
  address: z.string().min(1, 'Alamat wajib diisi'),
  paymentMethod: z.enum(['QRIS', 'Tunai'], {
    errorMap: () => ({ message: 'Pilih metode pembayaran' }),
  }),
  honeypot: z.string().max(0, 'Bot detected'),
});

export const checkoutFormDefaultValues = {
  name: '',
  address: '',
  paymentMethod: undefined as 'QRIS' | 'Tunai' | undefined,
  honeypot: '',
};

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
