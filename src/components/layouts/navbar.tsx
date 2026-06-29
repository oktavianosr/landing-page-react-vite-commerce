import { motion } from 'framer-motion';
import { Menu as MenuIcon, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/stores/cart-store';
import { useUiStore } from '@/stores/ui-store';

import AppLogo from './app-logo';
import { navItems } from './nav-data';

function CartButton({ className }: { className?: string }) {
  const count = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Keranjang belanja"
      className={cn('relative rounded-full', className)}
    >
      <ShoppingCart className="size-5" />
      {count > 0 && (
        <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full text-[11px] font-bold">
          {count}
        </span>
      )}
    </Button>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { mobileNavOpen, setMobileNavOpen } = useUiStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 border-border/60 border-b shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container flex items-center justify-between py-4">
        <AppLogo />

        {/* Desktop menu */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="hover:text-primary inline-block rounded-lg px-3 py-2 font-semibold transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <CartButton className="ml-2" />
          <Button variant="brand" className="ml-1" asChild>
            <a href="#menu">Pesan Sekarang</a>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <CartButton />
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Buka menu">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <AppLogo />
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <SheetClose asChild>
                      <a
                        href={item.href}
                        className="hover:bg-accent hover:text-primary block rounded-xl px-4 py-3 text-lg font-semibold transition-colors"
                      >
                        {item.title}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-6">
                <SheetClose asChild>
                  <Button variant="brand" className="w-full" asChild>
                    <a href="#menu">Pesan Sekarang</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
