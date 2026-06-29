import { motion } from 'framer-motion';
import { Leaf, ChefHat, ShieldCheck, Snowflake } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from '@/lib/animation';
import type { IconType } from '@/types/component';

interface Feature {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: Leaf,
    title: 'Bahan Segar',
    description: 'Dipilih setiap hari dari supplier terpercaya, tanpa pengawet berlebih.',
  },
  {
    id: 2,
    icon: ChefHat,
    title: 'Resep Homemade',
    description: 'Diolah dengan resep rumahan yang konsisten dan penuh cita rasa.',
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'Higienis & Halal',
    description: 'Proses produksi bersih dan terjaga, aman untuk seluruh keluarga.',
  },
  {
    id: 4,
    icon: Snowflake,
    title: 'Frozen Tahan Lama',
    description: 'Dibekukan dengan tepat agar awet disimpan dan praktis dihangatkan.',
  },
];

function WhyUsView() {
  return (
    <section id="why-us" className="bg-muted/40 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Badge>Keunggulan</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-serif text-3xl font-bold text-balance lg:text-5xl"
          >
            Kenapa Memilih Kaka Kana?
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-muted-foreground"
          >
            Kami berkomitmen menghadirkan makanan beku berkualitas dengan rasa
            yang tak kompromi.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ id, icon: Icon, title, description }) => (
            <motion.div key={id} variants={fadeUp(0)}>
              <Card className="h-full border-transparent text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]">
                <CardContent className="flex flex-col items-center gap-4">
                  <span className="bg-primary/10 text-primary flex size-14 items-center justify-center rounded-2xl">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUsView;
