import { fetchProductDetails } from "@/utils/api";
import React from "react";
import ListAllProduct from "../page";
import NotFound from "@/app/not-found";
import Link from "next/link";
interface DetailPageProps {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const product = await fetchProductDetails({ id: params.id });
  console.log("Product Details:", product);

  if (!product || Object.keys(product).length === 0) {
    return <NotFound />;
  }

  return (
    <div className="bg-gray-100 h-auto md:h-screen py-8 grid grid-cols-1 md:grid-cols-2 overflow-scroll md:overflow-hidden ">
      {/* detail page */}
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8  ">
        <Link
          href="/"
          className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          back to home
        </Link>
        <div className="bg-white rounded-xl shadow-lg overflow-y-scroll h-screen pb-[200px] mt-5 scrollbar-hidden">
          {/* Product Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>
            <div className="flex items-center mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(product.rating.rate)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.51 9.397c-.784-.57-.382-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          {/* Product Content */}
          <div className=" gap-8 p-6">
            {/* Image Gallery */}
            <div>
              <div className="flex justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain bg-gray-50 rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Description
                </h2>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Specifications
                </h2>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Category: {product.category}</li>
                  <li>
                    Rating: {product.rating.rate} ({product.rating.count}{" "}
                    reviews)
                  </li>
                  <li>Available Stock: 100</li>
                </ul>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-semibold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 capitalize">
                  {product.category}
                </span>
              </div>

              {/* Quantity Selector and Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Add to Wishlist
                </button>
                <button className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                  Compare
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Customer Reviews
            </h2>
            <div className="space-y-4">
              {/* Mock review, replace with actual review data */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center mb-2">
                  <span className="font-medium text-gray-800">John Doe</span>
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.51 9.397c-.784-.57-.382-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">
                  Great product! Really satisfied with the quality and fast
                  delivery.
                </p>
                <span className="text-sm text-gray-500">
                  Posted on July 1, 2025
                </span>
              </div>
            </div>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Write a Review
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto pb-[300px]">
        <ListAllProduct />
      </div>
    </div>
  );
};

export default DetailPage;
