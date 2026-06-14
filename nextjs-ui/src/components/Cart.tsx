"use client";
import Image from "next/image";
import { Products } from "../types/productTypes";
import { useCartStore } from "./zustand/cart-store";
import { ShoppingCartIcon } from "lucide-react";

export default function Cart() {
    const items = useCartStore((state) => state.items);
    const showCart = useCartStore((state) => state.showCart);
    const toggleCart = useCartStore((state) => state.toggleCart);
    if (items.length === 0) {
        return <div>Cart empty</div>;
    }

    return (
        <>
            <div
                className={`fixed inset-0 ${showCart ? "bg-black/20 translate-x-0" : "translate-x-full"} transition-all duration-300`}
                onClick={() => toggleCart()}
            ></div>
            <div
                className={`fixed top-10 right-0 ${showCart ? "translate-x-0" : "translate-x-full"} p-14 w-140 min-h-80 rounded-l-4xl [box-shadow:0px_0px_10px_rgba(0,0,0,0.4)] overflow-hidden bg-white transition-all duration-400`}
                onClick={(e) => e.stopPropagation()}
            >
                {items.map((i) => {
                    const primaryImage = i.images.find(
                        (i) => i.is_primary === true,
                    );
                    const fallbackImage = i.images[0];
                    return (
                        <div key={i.heading} className="flex justify-between">
                            <div className="flex items-center gap-5">
                                <div className="relative w-20 h-20 shrink-0">
                                    <div>
                                        <Image
                                            src={
                                                primaryImage?.image_url ||
                                                fallbackImage.image_url
                                            }
                                            alt={
                                                primaryImage?.image_url ||
                                                fallbackImage.image_url
                                            }
                                            className="object-cover"
                                            fill
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p>{i.heading}</p>
                                    <p>{i.description}</p>
                                </div>
                            </div>
                            <div>{i.qty}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

type ButtonProps = {
    product: Products[0];
};
export function AddToCart({ product }: ButtonProps) {
    const addItem = useCartStore((state) => state.addItem);
    const toggleCart = useCartStore((state) => state.toggleCart);

    return (
        <>
            <button onClick={() => addItem(product)}>Add to Cart</button>

            <button onClick={() => toggleCart()}>Toggle cart view</button>
        </>
    );
}

export function CartIcon() {
    const items = useCartStore((state) => state.items);
    const numOfItems = items.length;
    const toggleCart = useCartStore((state) => state.toggleCart);

    return (
        <button
            onClick={() => toggleCart()}
            className="relative cursor-pointer group"
        >
            <div className="p-1 px-1.5 rounded-sm group-hover:bg-gray-200 transition-colors duration-100">
                <ShoppingCartIcon className="w-5" />
            </div>
            <div className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full text-sm leading-4.5 text-center text-white bg-red-500">
                {numOfItems}
            </div>
        </button>
    );
}
