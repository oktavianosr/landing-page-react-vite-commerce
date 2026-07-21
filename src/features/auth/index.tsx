import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { supabase } from '@/lib/supabase';

import { loginFormDefaultValues, loginFormSchema } from './schema';
import LoginView from './view';

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: loginFormDefaultValues,
    validators: {
      onSubmit: loginFormSchema,
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      setError(null);

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: value.email,
        password: value.password,
      });

      setIsSubmitting(false);

      if (signInError) {
        setError('Email atau password salah.');
        return;
      }

      navigate({ to: '/dashboard/menu' });
    },
  });

  return <LoginView form={form} isSubmitting={isSubmitting} error={error} />;
}

export default Login;
