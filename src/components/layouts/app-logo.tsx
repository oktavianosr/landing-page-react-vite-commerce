import { FaLeaf } from 'react-icons/fa';

import { cn } from '@/lib/utils';

interface AppLogoProps {
  className?: string;
}

/** Kaka Kana wordmark + leaf accent. */
function AppLogo({ className }: AppLogoProps) {
  return (
    <a
      href="#home"
      className={cn(
        'flex items-center gap-1.5 text-2xl font-bold uppercase tracking-tight',
        className
      )}
    >
      <span className="text-primary">Kaka</span>
      <span className="text-secondary">Kana</span>
      <FaLeaf className="text-secondary" aria-hidden />
    </a>
  );
}

export default AppLogo;
