import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { IoBagHandleOutline } from 'react-icons/io5';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animation';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rina A.',
    role: 'Ibu Rumah Tangga',
    quote:
      'Tahu baksonya juara! Praktis tinggal goreng, rasanya seperti buatan rumah sendiri. Anak-anak suka banget.',
  },
  {
    id: 2,
    name: 'Budi S.',
    role: 'Karyawan',
    quote:
      'Stok frozen food andalan di kulkas. Higienis, porsinya pas, dan harganya ramah di kantong.',
  },
  {
    id: 3,
    name: 'Dewi K.',
    role: 'Pelanggan Setia',
    quote:
      'Ceker nyonyornya pedasnya nampol dan empuk. Sudah langganan tiap minggu, selalu fresh!',
  },
];

function TestimonialsView() {
  return (
    <section id="testimonials" className="bg-muted/40 py-20 md:py-28">
      <div className="container space-y-16">
        {/* Testimonials */}
        <div>
          <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Badge>Testimoni</Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="font-serif text-3xl font-bold text-balance lg:text-5xl"
            >
              Apa Kata Pelanggan Kami
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {testimonials.map((item) => (
              <motion.div key={item.id} variants={fadeUp(0)}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col gap-4">
                    <Quote className="text-primary/30 size-9" />
                    <p className="flex-1 leading-relaxed">"{item.quote}"</p>
                    <div className="text-secondary flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {item.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="from-primary to-primary/80 relative overflow-hidden rounded-[2rem] bg-gradient-to-br px-8 py-14 text-center shadow-[var(--shadow-brand)] md:px-16"
        >
          <div className="bg-secondary/30 absolute -top-16 -right-16 size-56 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-2xl space-y-6">
            <h2 className="text-primary-foreground font-serif text-3xl font-bold text-balance lg:text-4xl">
              Siap Menikmati Makanan Terbaik Kami?
            </h2>
            <p className="text-primary-foreground/85">
              Pesan sekarang dan rasakan kelezatan frozen food homemade Kaka Kana
              langsung di rumah Anda.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <a href="#contact">
                <IoBagHandleOutline className="size-5" />
                Pesan Sekarang
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsView;
