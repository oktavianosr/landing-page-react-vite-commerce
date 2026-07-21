import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router';

import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const showChrome = pathname !== '/login' && !pathname.startsWith('/dashboard');

  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden">
      {showChrome && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      {showChrome && <Footer />}
    </div>
  );
}
