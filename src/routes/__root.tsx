import { createRootRoute, Outlet } from '@tanstack/react-router';

import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
