import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { memo } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeUp } from '@/lib/animation';
import { formatRupiah } from '@/lib/number';

import type { MenuCardProps } from '../types';

function MenuCard({ menu, onAddToCart }: MenuCardProps) {
  return (
    <motion.div variants={fadeUp(0)}>
      <Card className="group h-full gap-0 overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={menu.image}
            alt={menu.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {menu.featured && (
            <Badge variant="secondary" className="absolute top-3 left-3">
              Best Seller
            </Badge>
          )}
        </div>
        <CardContent className="flex flex-1 flex-col gap-2 p-5">
          <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
            {menu.category}
          </span>
          <h3 className="text-lg font-semibold">{menu.name}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {menu.description}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-primary text-xl font-bold">
              {formatRupiah(menu.price)}
            </span>
            <Button
              size="icon"
              variant="brand"
              aria-label={`Tambah ${menu.name} ke keranjang`}
              onClick={() => onAddToCart(menu)}
            >
              <Plus className="size-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default memo(MenuCard);
