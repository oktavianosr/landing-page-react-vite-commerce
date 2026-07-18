import type { CartItem } from '@/stores/cart-store';
import { formatRupiah } from '@/lib/number';

export interface CustomerInfo {
  name: string;
  address: string;
  paymentMethod: 'QRIS' | 'Tunai';
}

export function buildWhatsAppMessage(items: CartItem[], customer: CustomerInfo): string {
  const orderLines = items
    .map((item) => {
      const subtotal = item.price * item.quantity;
      return `• ${item.name} - ${item.quantity}x ${formatRupiah(item.price)} = ${formatRupiah(subtotal)}`;
    })
    .join('\n');

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return `Halo, saya ingin memesan:

*Nama:* ${customer.name}
*Alamat:* ${customer.address}

*Pesanan:*
${orderLines}

*Total:* ${formatRupiah(total)}
*Pembayaran:* ${customer.paymentMethod}

Terima kasih!`;
}

export function buildWhatsAppUrl(items: CartItem[], customer: CustomerInfo): string {
  const phoneNumber = import.meta.env.VITE_WA_NUMBER;

  if (!phoneNumber) {
    throw new Error('VITE_WA_NUMBER environment variable is not set');
  }

  const message = buildWhatsAppMessage(items, customer);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
