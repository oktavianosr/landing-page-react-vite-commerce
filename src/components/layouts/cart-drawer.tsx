import { notifin } from '@khencahyo13/notifin-react';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { formatRupiah } from '@/lib/number';
import { useCartStore } from '@/stores/cart-store';
import { useUiStore } from '@/stores/ui-store';

function CartDrawer() {
  const { cartOpen, setCartOpen } = useUiStore();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total());
  const { addItem, decrementItem, removeItem, clear } = useCartStore();

  const handleCheckout = () => {
    notifin.success('Pesanan diterima!', {
      description: `${items.length} item • ${formatRupiah(total)}. Kami akan menghubungi Anda.`,
    });
    clear();
    setCartOpen(false);
  };

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent side="right" className="w-full gap-0 sm:max-w-md">
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
            <Button
              variant="outline"
              className="mt-2"
              onClick={() => setCartOpen(false)}
              asChild
            >
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
                <span className="text-primary text-xl font-bold">
                  {formatRupiah(total)}
                </span>
              </div>
              <Button
                variant="brand"
                size="lg"
                className="mb-6 w-full"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
