import React from "react";

import { fetchProducts } from "@/lib/fetchData";
import Link from "next/link";
// testing sending
export default async function ListAllProduct() {
  const data = await fetchProducts();
  console.log("data", data);
  return (
    <>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((product) => (
          <Link href={`/prod/${product.id}`} key={product.id}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain p-4 bg-gray-50"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 capitalize">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center">
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
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-..784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.51 9.397c-.784-.57-.382-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
