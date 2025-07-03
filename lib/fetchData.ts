import { product } from "@/types/product";

export async function fetchProducts() {
  try {
    const respone = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });
    return (await respone.json()) as product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
