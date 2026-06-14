import { Products } from "@/src/types/productTypes";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic"; 

export default async function Home() {
    let products = null;

    try {
        console.log("Sending fetch from root");
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/products`,
        );
        if (!res.ok) {
            console.error("Failed", res.status, res.statusText);
        }
        const { data }: { data: Products } = await res.json();
        products = data;
    } catch (e) {
        console.error("Fetch failed", e);
    }

    return (
        <section>
            <main>
                <div className="mt-20 max-w-300 mx-auto h-120">
                    <h1 className="text-xl font-semibold">Products</h1>
                    <h2 className="mt-4">
                        Explore our list of products that suit your needs
                    </h2>
                    <div className="mt-10 grid grid-cols-3 gap-x-5 gap-y-12">
                        {products &&
                            products.map((product) => (
                                <div
                                    key={product.heading}
                                    className="border border-gray-700 rounded-lg overflow-hidden"
                                >
                                    <div className="relative w-full h-50 bg-gray-700 rounded-t-lg overflow-hidden">
                                        <Image
                                            src={product.images[0]?.image_url}
                                            alt="Alt text here"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="py-8 px-4 min-h-42">
                                        <h2 className="text-lg font-semibold">
                                            {product.heading}
                                        </h2>
                                        <p className="mt-4">
                                            {product.description}
                                        </p>
                                        <Link href={product.url}>
                                            Learn more
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </main>
        </section>
    );
}
