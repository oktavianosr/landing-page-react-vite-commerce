import type { useForm } from '@tanstack/react-form';
import type { z } from 'zod';

import type { contactFormSchema } from './schema';

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export interface ContactFormProps {
  form: ReturnType<typeof useForm<ContactFormValues>>;
  isSubmitting: boolean;
}

export type ContactViewProps = ContactFormProps;
