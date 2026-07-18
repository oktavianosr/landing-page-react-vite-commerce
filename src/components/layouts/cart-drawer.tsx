import { notifin } from '@khencahyo13/notifin-react';
import { useForm } from '@tanstack/react-form';
import type { AnyFieldApi } from '@tanstack/react-form';
import { ArrowLeft, MessageCircle, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { checkoutFormDefaultValues, checkoutFormSchema } from '@/features/checkout/schema';
import { formatRupiah } from '@/lib/number';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { useCartStore } from '@/stores/cart-store';
import { useUiStore } from '@/stores/ui-store';

function FieldError({ errors }: { errors: unknown[] }) {
  const messages = errors
    .map((error) =>
      typeof error === 'string' ? error : ((error as { message?: string } | null)?.message ?? null)
    )
    .filter((message): message is string => Boolean(message));

  if (messages.length === 0) return null;
  return <p className="text-destructive text-sm">{messages[0]}</p>;
}

function CartDrawer() {
  const { cartOpen, setCartOpen } = useUiStore();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total());
  const { addItem, decrementItem, removeItem, clear } = useCartStore();

  const [view, setView] = useState<'cart' | 'form'>('cart');
  const [formStartTime, setFormStartTime] = useState<number>(0);

  const form = useForm({
    defaultValues: checkoutFormDefaultValues,
    validators: {
      onSubmit: checkoutFormSchema,
    },
    onSubmit: async ({ value }) => {
      const elapsed = Date.now() - formStartTime;

      if (value.honeypot) {
        notifin.error('Verifikasi gagal', {
          description: 'Silakan coba lagi.',
        });
        return;
      }

      if (elapsed < 3000) {
        notifin.error('Verifikasi gagal', {
          description: 'Form dikirim terlalu cepat. Silakan coba lagi.',
        });
        return;
      }

      try {
        const customerInfo = {
          name: value.name,
          address: value.address,
          paymentMethod: value.paymentMethod as 'QRIS' | 'Tunai',
        };

        const waUrl = buildWhatsAppUrl(items, customerInfo);
        window.open(waUrl, '_blank');

        notifin.success('Pesanan diterima!', {
          description: `${items.length} item • ${formatRupiah(total)}. Kami akan menghubungi Anda.`,
        });

        clear();
        form.reset();
        setView('cart');
        setCartOpen(false);
      } catch (error) {
        notifin.error('Gagal mengirim pesanan', {
          description: 'Nomor WhatsApp belum dikonfigurasi.',
        });
      }
    },
  });

  const handleCheckout = () => {
    setFormStartTime(Date.now());
    setView('form');
  };

  const handleBackToCart = () => {
    setView('cart');
    form.reset();
  };

  return (
    <Sheet
      open={cartOpen}
      onOpenChange={(open) => {
        setCartOpen(open);
        if (!open) {
          setView('cart');
          form.reset();
        }
      }}
    >
      <SheetContent side="right" className="w-full gap-0 sm:max-w-md">
        {view === 'cart' ? (
          <>
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-left text-lg">
                <ShoppingCart className="size-5" />
                Keranjang Belanja
              </SheetTitle>
            </SheetHeader>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="bg-muted text-muted-foreground flex size-16 items-center justify-center rounded-full">
                  <ShoppingCart className="size-7" />
                </span>
                <p className="font-semibold">Keranjang masih kosong</p>
                <p className="text-muted-foreground text-sm">
                  Yuk pilih menu favoritmu dan tambahkan ke keranjang.
                </p>
                <Button variant="outline" className="mt-2" onClick={() => setCartOpen(false)} asChild>
                  <a href="#menu">Lihat Menu</a>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-16 shrink-0 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-semibold leading-tight">{item.name}</p>
                          <button
                            type="button"
                            aria-label={`Hapus ${item.name}`}
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                        <p className="text-primary text-sm font-semibold">
                          {formatRupiah(item.price)}
                        </p>
                        <div className="mt-auto flex items-center gap-2 pt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="size-7"
                            aria-label="Kurangi"
                            onClick={() => decrementItem(item.id)}
                          >
                            <Minus className="size-3.5" />
                          </Button>
                          <span className="w-6 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="size-7"
                            aria-label="Tambah"
                            onClick={() => addItem(item)}
                          >
                            <Plus className="size-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6">
                  <Separator />
                  <div className="flex items-center justify-between py-4">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-primary text-xl font-bold">{formatRupiah(total)}</span>
                  </div>
                  <Button variant="brand" size="lg" className="mb-6 w-full" onClick={handleCheckout}>
                    Checkout
                  </Button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-left text-lg">
                <Button variant="ghost" size="icon" className="size-8" onClick={handleBackToCart}>
                  <ArrowLeft className="size-4" />
                </Button>
                Data Pemesanan
              </SheetTitle>
            </SheetHeader>

            <form
              className="flex flex-1 flex-col gap-5 overflow-y-auto px-6 py-4"
              onSubmit={(event) => {
                event.preventDefault();
                form.handleSubmit();
              }}
            >
              <form.Field name="honeypot">
                {(field: AnyFieldApi) => (
                  <input
                    type="text"
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      opacity: 0,
                      pointerEvents: 'none',
                    }}
                    aria-hidden="true"
                  />
                )}
              </form.Field>

              <form.Field name="name">
                {(field: AnyFieldApi) => (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={field.name}>Nama</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Nama Anda"
                      aria-invalid={field.state.meta.errors.length > 0}
                    />
                    <FieldError errors={field.state.meta.errors} />
                  </div>
                )}
              </form.Field>

              <form.Field name="address">
                {(field: AnyFieldApi) => (
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={field.name}>Alamat</Label>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Alamat lengkap untuk pengiriman"
                      rows={3}
                      aria-invalid={field.state.meta.errors.length > 0}
                    />
                    <FieldError errors={field.state.meta.errors} />
                  </div>
                )}
              </form.Field>

              <form.Field name="paymentMethod">
                {(field: AnyFieldApi) => (
                  <div className="flex flex-col gap-2">
                    <Label>Metode Pembayaran</Label>
                    <div className="flex gap-3">
                      <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border p-3 transition-colors hover:bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                        <input
                          type="radio"
                          name={field.name}
                          value="QRIS"
                          checked={field.state.value === 'QRIS'}
                          onChange={() => field.handleChange('QRIS')}
                          className="accent-primary"
                        />
                        <span className="text-sm font-medium">QRIS</span>
                      </label>
                      <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border p-3 transition-colors hover:bg-muted/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                        <input
                          type="radio"
                          name={field.name}
                          value="Tunai"
                          checked={field.state.value === 'Tunai'}
                          onChange={() => field.handleChange('Tunai')}
                          className="accent-primary"
                        />
                        <span className="text-sm font-medium">Tunai</span>
                      </label>
                    </div>
                    <FieldError errors={field.state.meta.errors} />
                  </div>
                )}
              </form.Field>

              <div className="mt-auto pt-4">
                <Button type="submit" variant="brand" size="lg" className="w-full">
                  <MessageCircle className="size-4" />
                  Kirim Pesanan via WhatsApp
                </Button>
              </div>
            </form>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
