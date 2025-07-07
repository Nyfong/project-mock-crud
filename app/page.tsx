import Image from "next/image";
import ListAllProduct from "./(listing)/prod/page";
import Category from "@/components/category/Category";
import { fetchProducts } from "@/lib/fetchData";
import SectionLanding from "@/components/landing/SectionLanding";
import Footer from "@/components/layout/Footer";

export default async function Home() {
  const product = await fetchProducts();
  return (
    <>
      <SectionLanding />
      <Category product={product} />
      <div className="p-4  max-w-screen-xl mx-auto">
        <ListAllProduct />
      </div>
      <Footer />
    </>
  );
}
