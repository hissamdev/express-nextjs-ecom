import { getProduct } from "@/src/actions/fetchHelper";
import { AddToCart } from "@/src/components/Cart";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
    params,
}: {
    params: Promise<{ product: string }>;
}) {
    const { product } = await params;
    const productInfo = await getProduct(product);
    console.log("Logging product", productInfo);
    if (!productInfo) {
        notFound();
    }

    const { heading, description, content, images } = productInfo;
    const primaryImage = images.find((i) => i.is_primary === true);
    const fallbackImage = images[0];

    return (
        <main>
            <article className="mt-40 max-w-7xl mx-auto h-190 relative">
                <Link href="/">Home</Link>
                <div className="product-top flex justify-between">
                    <div className="product-top-left flex flex-col w-full max-w-[45%]">
                        <div className="product-metadata flex justify-between">
                            <div>
                                <span className="font-semibold">319 sold </span>
                                this month
                            </div>
                            <span className="font-semibold">4.7 stars</span>
                            <Link href="/" className="font-semibold">
                                View Sale Statistics
                            </Link>
                        </div>

                        <div>
                            <div className="product-display mt-4 relative w-full aspect-12/11">
                                <Image
                                    src={
                                        primaryImage?.image_url ||
                                        fallbackImage.image_url
                                    }
                                    alt={
                                        primaryImage?.image_url ||
                                        fallbackImage.image_url
                                    }
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-4 flex gap-2">
                                {images.length > 0 &&
                                    images.map((image) => (
                                        <div
                                            key={image.image_url}
                                            className="product-display relative w-20 aspect-square"
                                        >
                                            <Image
                                                src={image.image_url}
                                                alt={image.image_alt}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 w-1/2">
                        <h1 className="text-[29px] leading-8.75">{heading}</h1>
                        <p className="mt-4 text-[18px] leading-5.5">
                            {description}
                        </p>

                        <div className="mt-5">
                            <h3>Select a variant</h3>
                            <div className="mt-3 flex gap-3">
                                <div className="w-12 h-12 bg-gray-500"></div>
                                <div className="w-12 h-12 bg-gray-500"></div>
                                <div className="w-12 h-12 bg-gray-500"></div>
                            </div>
                        </div>
                        <AddToCart product={productInfo} />
                    </div>
                </div>

                <div className="mt-8">
                    <p>{content}</p>
                </div>
            </article>
        </main>
    );
}
