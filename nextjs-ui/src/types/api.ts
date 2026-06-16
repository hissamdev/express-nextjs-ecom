import { Product } from "./productTypes";

export type ApiResponse = {
    success: boolean;
    message: string;
    error?: string;
};

export type ApiWithProduct = ApiResponse & {
    data: Product;
};
