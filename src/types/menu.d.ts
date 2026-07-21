export interface Menu {
  id: string;
  name: string;
  description: string;
  /** Price in IDR (rupiah), stored as a plain number for formatting. */
  price: number;
  image: string;
  /** Marks a highlighted / best-seller item for the UI. */
  featured?: boolean;
  category: string;
}
