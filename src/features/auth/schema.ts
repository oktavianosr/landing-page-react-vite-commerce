import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().min(1, 'Email wajib diisi').email('Format email tidak valid'),
  password: z.string().min(1, 'Password wajib diisi'),
});

export const loginFormDefaultValues = {
  email: '',
  password: '',
};
