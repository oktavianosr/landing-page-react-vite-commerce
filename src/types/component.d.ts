import type { ComponentType, SVGProps } from 'react';

/** Generic select / list option. */
export interface Option<T = string> {
  label: string;
  value: T;
}

/** A navigation entry used by the navbar / footer. */
export interface NavItem {
  id: number;
  title: string;
  /** Anchor (e.g. "#menu") or route path. */
  href: string;
}

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;
