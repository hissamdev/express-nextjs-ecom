import { Heart, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { CartIcon } from "../Cart";

export default function Header() {
    const linkStyles =
        "p-2 hover:underline hover:underline-offset-10 cursor-pointer ";

    return (
        <header>
            <div className="max-w-[80%] mx-auto px-10 py-8 grid grid-cols-3 items-center">
                <div className="p-3 text-lg font-semibold text-gray-700 uppercase tracking-wider cursor-pointer">
                    Icon
                </div>
                <nav className="justify-self-center">
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link href="/" className={linkStyles}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://hissam.org"
                                className={linkStyles}
                            >
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="justify-self-end flex gap-4">
                    <div className="relative cursor-pointer group">
                        <div className="p-1 px-1.5 rounded-sm group-hover:bg-gray-200 transition-colors duration-100">
                            <Heart className="w-5" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full text-sm leading-4.5 text-center text-white bg-red-500">
                            3
                        </div>
                    </div>
                    <CartIcon />
                </div>
            </div>
        </header>
    );
}
