export type Product = {
    id: string;
    heading: string;
    description: string;
    price: number;
    content: string;
    url: string;
    featured_product: boolean;
    best_seller: boolean;
    images: [
        {
            image_url: string;
            image_alt: string;
            is_primary: boolean;
        },
    ];
};
