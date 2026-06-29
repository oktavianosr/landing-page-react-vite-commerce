const rupiahFormatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** Format a number as Indonesian Rupiah, e.g. 20000 -> "Rp20.000". */
export function formatRupiah(value: number): string {
  return rupiahFormatter.format(value).replace(/\s/g, '');
}
