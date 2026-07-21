import type { useForm } from '@tanstack/react-form';
import type { z } from 'zod';

import type { loginFormSchema } from './schema';

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export interface LoginFormProps {
  form: ReturnType<typeof useForm<LoginFormValues>>;
  isSubmitting: boolean;
  error: string | null;
}

export type LoginViewProps = LoginFormProps;
