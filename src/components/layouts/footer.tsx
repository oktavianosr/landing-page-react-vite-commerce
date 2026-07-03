import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLeaf, FaTiktok, FaWhatsapp } from 'react-icons/fa';

import { fadeUp, viewportOnce } from '@/lib/animation';

import { navItems } from './nav-data';

const socials = [
  { id: 1, label: 'Instagram', icon: FaInstagram, href: '#' },
  { id: 2, label: 'TikTok', icon: FaTiktok, href: '#' },
  { id: 3, label: 'WhatsApp', icon: FaWhatsapp, href: '#' },
  { id: 4, label: 'Facebook', icon: FaFacebookF, href: '#' },
];

function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Brand */}
        <div className="space-y-4 lg:col-span-1">
          <div className="flex items-center gap-1.5 text-2xl font-bold uppercase">
            <span className="text-primary">Kaka</span>
            <span className="text-secondary">Kana</span>
            <FaLeaf className="text-secondary" aria-hidden />
          </div>
          <p className="text-background/70 max-w-xs text-sm leading-relaxed">
            Frozen food & makanan homemade yang fresh, higienis, dan worthy. Dibuat dengan bahan
            pilihan untuk keluarga Anda.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 font-semibold">Navigasi</h3>
          <ul className="space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-background/70 hover:text-secondary transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold">Kontak</h3>
          <ul className="text-background/70 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>Jl. Contoh No. 123, Surabaya, Indonesia</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 font-semibold">Ikuti Kami</h3>
          <div className="flex items-center gap-3">
            {socials.map(({ id, label, icon: Icon, href }) => (
              <a
                key={id}
                href={href}
                aria-label={label}
                className="bg-background/10 hover:bg-primary flex size-10 items-center justify-center rounded-full text-lg transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="border-background/10 border-t">
        <div className="container text-background/60 py-6 text-center text-sm">
          © {new Date().getFullYear()} Kaka Kana. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
