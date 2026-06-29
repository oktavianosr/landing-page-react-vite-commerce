import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi'),
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
});

export const contactFormDefaultValues = {
  name: '',
  email: '',
  message: '',
};
