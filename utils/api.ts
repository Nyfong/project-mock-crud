const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://fakestoreapi.com/products";

export async function fetchProductDetails({ id }: { id: string }) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
}
