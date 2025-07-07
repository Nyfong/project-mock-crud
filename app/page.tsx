import Image from "next/image";
import ListAllProduct from "./(listing)/prod/page";
import Category from "@/components/category/Category";
import { fetchProducts } from "@/lib/fetchData";

export default async function Home() {
  const product = await fetchProducts();
  return (
    <>
      <Category product={product} />
      <ListAllProduct />
    </>
  );
}
