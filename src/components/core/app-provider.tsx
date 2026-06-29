import { Notifin } from '@khencahyo13/notifin-react';
import { QueryClientProvider, type QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';

import type { router } from '@/main';

interface AppProviderProps {
  queryClient: QueryClient;
  router: typeof router;
}

/**
 * Root composition: TanStack Query + Router contexts, global toaster, and
 * dev-only devtools. Mirrors docs/00 §8.
 */
function AppProvider({ queryClient, router }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Notifin colorScheme="light" />
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default AppProvider;
