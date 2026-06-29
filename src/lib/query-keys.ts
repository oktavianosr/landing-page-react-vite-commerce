/**
 * Central React Query key factory (single source of truth for cache keys).
 * Mirrors the pattern in docs/05-api-layer so invalidation stays consistent.
 */
export const queryKeys = {
  menus: {
    all: ['menus'] as const,
    list: () => [...queryKeys.menus.all, 'list'] as const,
  },
};
