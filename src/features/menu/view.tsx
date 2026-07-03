import { motion } from 'framer-motion';
import { memo } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animation';

import MenuCard from './components/menu-card';
import type { MenuViewProps } from './types';

function MenuSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="bg-card overflow-hidden rounded-2xl border shadow-sm">
          <div className="bg-muted aspect-[4/3] animate-pulse" />
          <div className="space-y-3 p-5">
            <div className="bg-muted h-3 w-1/3 animate-pulse rounded" />
            <div className="bg-muted h-4 w-2/3 animate-pulse rounded" />
            <div className="bg-muted h-3 w-full animate-pulse rounded" />
            <div className="bg-muted h-6 w-1/2 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function MenuView({ menus, isLoading, isError, onRetry, onAddToCart }: MenuViewProps) {
  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Badge>Menu Kami</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-serif text-3xl font-bold text-balance lg:text-5xl"
          >
            Pilihan Favorit untuk Anda
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-muted-foreground"
          >
            Dari tahu bakso legendaris hingga ceker pedas nampol — semua siap memanjakan lidah.
          </motion.p>
        </div>

        {isLoading && <MenuSkeleton />}

        {isError && (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <p className="text-muted-foreground">Gagal memuat menu. Silakan coba lagi.</p>
            <Button variant="outline" onClick={onRetry}>
              Coba Lagi
            </Button>
          </div>
        )}

        {!isLoading && !isError && (
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {menus.map((menu) => (
              <MenuCard key={menu.id} menu={menu} onAddToCart={onAddToCart} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default memo(MenuView);
