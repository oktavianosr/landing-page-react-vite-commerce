import { motion } from 'framer-motion';

import tahuBaksoImg from '@/assets/TahuBakso.jpg';
import { Badge } from '@/components/ui/badge';
import { fadeRight, fadeUp, viewportOnce } from '@/lib/animation';

const stats = [
  { id: 1, value: '100%', label: 'Homemade' },
  { id: 2, value: '4.9★', label: 'Rating Pelanggan' },
  { id: 3, value: '10rb+', label: 'Porsi Terjual' },
];

function AboutView() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ type: 'spring', stiffness: 90, delay: 0.1 }}
          className="relative"
        >
          <div className="bg-secondary/20 absolute -inset-4 -z-10 rotate-3 rounded-[2rem]" />
          <img
            src={tahuBaksoImg}
            alt="Tahu bakso Kaka Kana"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
          />
        </motion.div>

        {/* Copy */}
        <div className="space-y-6 text-center md:text-left">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Badge>Tentang Kami</Badge>
          </motion.div>

          <motion.h2
            variants={fadeRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="font-serif text-3xl font-bold text-balance lg:text-5xl"
          >
            Cita Rasa Rumahan, Dibuat dengan Sepenuh Hati
          </motion.h2>

          <motion.p
            variants={fadeRight(0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-muted-foreground leading-relaxed"
          >
            Kaka Kana lahir dari kecintaan pada masakan rumahan. Setiap produk
            kami diolah dari bahan segar pilihan tanpa pengawet berlebih, lalu
            dibekukan dengan cara yang tepat agar kualitas dan rasanya tetap
            terjaga sampai ke meja makan Anda.
          </motion.p>

          <motion.p
            variants={fadeRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-muted-foreground leading-relaxed"
          >
            Praktis disimpan, mudah dihangatkan, dan selalu nikmat — cocok untuk
            keluarga sibuk yang tetap ingin makan enak dan sehat.
          </motion.p>

          <motion.dl
            variants={fadeUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex justify-center gap-8 pt-2 md:justify-start"
          >
            {stats.map((stat) => (
              <div key={stat.id} className="text-center md:text-left">
                <dt className="text-primary font-serif text-3xl font-bold">
                  {stat.value}
                </dt>
                <dd className="text-muted-foreground text-sm">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

export default AboutView;
