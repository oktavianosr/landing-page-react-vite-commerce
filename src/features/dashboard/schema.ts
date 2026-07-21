import { z } from 'zod';

export const menuFormSchema = z.object({
  name: z.string().min(1, 'Nama wajib diisi'),
  description: z.string().min(1, 'Deskripsi wajib diisi'),
  price: z.number().int('Harga harus bilangan bulat').positive('Harga harus lebih dari 0'),
  category: z.string().min(1, 'Kategori wajib diisi'),
  featured: z.boolean(),
  image: z
    .union([z.instanceof(File), z.string()])
    .refine((value) => value !== '', 'Foto wajib diisi'),
});

export const menuFormDefaultValues = {
  name: '',
  description: '',
  price: 0,
  category: '',
  featured: false,
  image: '' as File | string,
};
