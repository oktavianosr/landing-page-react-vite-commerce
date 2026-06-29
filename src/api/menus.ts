import heroImg from '@/assets/hero.png';
import tahuAyamImg from '@/assets/TahuAyamSuwir.jpg';
import tahuBaksoImg from '@/assets/TahuBakso.jpg';
import type { ApiResponse } from '@/types/api';
import type { Menu } from '@/types/menu';

/**
 * Local mock menu data. Shaped exactly like a backend `ApiResponse<Menu[]>`
 * so swapping to a real endpoint later only changes the body of `fetchMenus`
 * (e.g. `publicApi.get('/menus')`) — no component changes needed.
 */
const MENUS: Menu[] = [
  {
    id: 1,
    name: 'Tahu Ayam Suwir',
    description: 'Tahu lembut isi ayam suwir berbumbu, gurih dan mengenyangkan.',
    price: 20000,
    image: tahuAyamImg,
    category: 'Frozen Food',
    featured: true,
  },
  {
    id: 2,
    name: 'Tahu Bakso',
    description: 'Tahu padat dengan bakso sapi pilihan, favorit segala usia.',
    price: 10000,
    image: tahuBaksoImg,
    category: 'Frozen Food',
    featured: true,
  },
  {
    id: 3,
    name: 'Ceker Nyonyor',
    description: 'Ceker empuk dengan bumbu pedas nampol bikin nagih.',
    price: 15000,
    image: heroImg,
    category: 'Ready to Eat',
  },
  {
    id: 4,
    name: 'Krengsengan Ceker',
    description: 'Ceker bumbu krengsengan manis-gurih khas rumahan.',
    price: 25000,
    image: heroImg,
    category: 'Ready to Eat',
  },
];

/** Simulate a small network delay so loading states are demonstrable. */
export function fetchMenus(): Promise<ApiResponse<Menu[]>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: null,
        data: MENUS,
      });
    }, 400);
  });
}
