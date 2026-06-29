/** Generic API envelope returned by the backend (mirrors docs/05-api-layer). */
export interface ApiResponse<TData, TMeta = unknown> {
  success: boolean;
  message: string | null;
  data: TData;
  meta?: TMeta | null;
}

export interface ApiPagination {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}
