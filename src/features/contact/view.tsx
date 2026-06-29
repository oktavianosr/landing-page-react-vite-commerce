import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { memo } from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { fadeRight, fadeUp, viewportOnce } from '@/lib/animation';
import type { IconType } from '@/types/component';

import ContactForm from './components/form';
import type { ContactViewProps } from './types';

const contactInfo: { id: number; icon: IconType; label: string; value: string }[] =
  [
    { id: 1, icon: Phone, label: 'Telepon', value: '+62 812-3456-7890' },
    { id: 2, icon: Mail, label: 'Email', value: 'halo@kakakana.id' },
    {
      id: 3,
      icon: MapPin,
      label: 'Alamat',
      value: 'Jl. Contoh No. 123, Surabaya',
    },
    { id: 4, icon: Clock, label: 'Jam Buka', value: 'Setiap hari, 08.00–20.00' },
  ];

function ContactView({ form, isSubmitting }: ContactViewProps) {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Badge>Kontak</Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-serif text-3xl font-bold text-balance lg:text-5xl"
          >
            Hubungi &amp; Pesan
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-muted-foreground"
          >
            Punya pertanyaan atau ingin memesan? Kirim pesan, kami balas secepatnya.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            variants={fadeRight(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {contactInfo.map(({ id, icon: Icon, label, value }) => (
              <Card key={id} className="border-transparent">
                <CardContent className="flex items-start gap-3">
                  <span className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-muted-foreground text-sm">{label}</p>
                    <p className="font-semibold">{value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Card>
              <CardContent>
                <ContactForm form={form} isSubmitting={isSubmitting} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactView);
