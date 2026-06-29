import { motion } from 'framer-motion';
import { IoBagHandleOutline } from 'react-icons/io5';

import heroImg from '@/assets/hero.png';
// import leafImg from '@/assets/leaf.png';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { fadeRight } from '@/lib/animation';

function HeroView() {
  return (
    <section
      id="home"
      className="from-secondary/10 relative overflow-hidden bg-gradient-to-b to-transparent pt-24"
    >
      {/* Decorative leaf */}
      {/* <motion.img
        src={leafImg}
        alt=""
        aria-hidden
        initial={{ opacity: 0, x: -120, rotate: 60 }}
        animate={{ opacity: 0.85, x: 0, rotate: 40 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="pointer-events-none absolute -top-6 right-1/2 w-[220px] max-w-none blur-[2px] md:w-[300px]"
      /> */}

      <div className="container relative grid min-h-[640px] grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Copy */}
        <div className="relative z-10 space-y-6 py-14 text-center md:py-0 md:text-left">
          <motion.div
            variants={fadeRight(0.3)}
            initial="hidden"
            animate="visible"
          >
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              🌿 Fresh &amp; Worthy
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeRight(0.5)}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl leading-tight font-bold text-balance lg:text-6xl"
          >
            Frozen Food Homemade{' '}
            <span className="text-primary">Kaka</span>{' '}
            <span className="text-secondary">Kana</span>
          </motion.h1>

          <motion.p
            variants={fadeRight(0.7)}
            initial="hidden"
            animate="visible"
            className="text-muted-foreground mx-auto max-w-md text-lg md:mx-0"
          >
            Pesan sekarang dan nikmati makanan terbaik kami — dibuat segar setiap
            hari dengan bahan pilihan dan resep rumahan.
          </motion.p>

          <motion.div
            variants={fadeRight(0.9)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <Button variant="brand" size="lg" asChild>
              <a href="#menu">
                <IoBagHandleOutline className="size-5" />
                Pesan Sekarang
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Pelajari Lebih</a>
            </Button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 160, rotate: 30 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={heroImg}
            alt="Sajian Kaka Kana"
            fetchPriority="high"
            className="drop-shadow-brand w-[320px] md:w-[520px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroView;
