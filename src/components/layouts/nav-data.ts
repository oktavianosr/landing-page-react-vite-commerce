import type { NavItem } from '@/types/component';

/** Single source of truth for primary navigation (anchors to page sections). */
export const navItems: NavItem[] = [
  { id: 1, title: 'Beranda', href: '#home' },
  { id: 2, title: 'Tentang', href: '#about' },
  { id: 3, title: 'Menu', href: '#menu' },
  { id: 4, title: 'Keunggulan', href: '#why-us' },
  { id: 5, title: 'Kontak', href: '#contact' },
];
