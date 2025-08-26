import { Product } from "@/types/product";

export async function fetchProducts() {
  try {
    const respone = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });
    return (await respone.json()) as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
