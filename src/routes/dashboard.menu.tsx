import { createFileRoute, redirect } from '@tanstack/react-router';

import Dashboard from '@/features/dashboard';
import { supabase } from '@/lib/supabase';

export const Route = createFileRoute('/dashboard/menu')({
  beforeLoad: async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      throw redirect({ to: '/login' });
    }
  },
  component: Dashboard,
});
