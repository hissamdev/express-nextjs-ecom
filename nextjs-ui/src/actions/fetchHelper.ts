import { ApiWithProduct } from "../types/api";

export async function getProduct(slug: string) {
    if (!slug) {
        console.error("Invalid product slug");
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/products/${slug}`,
        );
        if (!res.ok) {
            console.error(res.status, res.statusText);
            return null;
        }
        const parsed: ApiWithProduct = await res.json();
        if (!parsed.success) {
            console.error(parsed.error);
            return null;
        }
        console.log("Action logging", parsed.data);
        return parsed.data;
    } catch (e) {
        console.error(e);
        return null;
    }
}
