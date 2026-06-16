import { Product } from "@/src/types/productTypes";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartProduct = Product & {
    qty: number;
};

type CartStore = {
    items: CartProduct[];
    showCart: boolean;
    addItem: (product: Product) => void;
    toggleCart: () => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            showCart: false,
            addItem: (product) => {
                const cartProducts = get().items;
                const exists = cartProducts.find((i) => i.id === product.id);
                if (exists) {
                    set({
                        items: cartProducts.map((item) =>
                            item.id === product.id
                                ? { ...item, qty: (item.qty += 1) }
                                : item,
                        ),
                    });
                } else {
                    set({
                        items: [...cartProducts, { ...product, qty: 1 }],
                    });
                }
            },
            toggleCart: () => {
                const prev = get().showCart;
                set({
                    showCart: !prev,
                });
            },
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
