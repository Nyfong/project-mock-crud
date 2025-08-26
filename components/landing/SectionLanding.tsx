import React from "react";

export default function SectionLanding() {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <nav className="w-full rounded-lg border shadow-lg overflow-hidden p-5 bg-background/10 dark:bg-background/80 border-transparent shadow-transparent px-0">
            <div className="flex items-center relative">
              <div className="hidden lg:block  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center px-5">
                  <li>
                    <a
                      href="#"
                      className="font-sans antialiased text-sm text-inherit flex items-center gap-x-2 p-1 hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-sans antialiased text-sm text-inherit flex items-center gap-x-2 p-1 hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-sans antialiased text-sm text-inherit flex items-center gap-x-2 p-1 hover:text-primary"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="gap-2 items-center hidden lg:ml-auto lg:flex">
                <button
                  className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-secondary border-secondary text-secondary-foreground hover:bg-secondary-light hover:border-secondary-light"
                  data-shape="default"
                  data-width="default"
                >
                  Sign In
                </button>
                <button
                  className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed data-[shape=pill]:rounded-full data-[width=full]:w-full focus:shadow-none text-sm rounded-md py-1.5 px-3 shadow-sm hover:shadow bg-primary border-primary text-primary-foreground hover:bg-primary-light hover:border-primary-light"
                  data-shape="default"
                  data-width="default"
                >
                  Buy Now
                </button>
              </div>
              <button
                className="place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none data-[shape=circular]:rounded-full text-sm min-w-[34px] min-h-[34px] rounded-md bg-transparent border-transparent text-secondary-foreground hover:bg-secondary/10 hover:border-secondary/10 shadow-none hover:shadow-none ml-auto grid lg:hidden"
                data-shape="default"
              >
                <i className="fas fa-bars h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
        <div className="container px-5 py-12 md:py-20 mx-auto grid h-full w-full grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div>
            <h1 className="font-sans antialiased font-bold text-3xl md:text-4xl lg:text-5xl text-inherit dark:text-white mb-4">
              Welcome to Krypton Shop
            </h1>
            <p className="font-sans antialiased text-base md:text-lg text-foreground [text-wrap:_balance] max-w-2xl">
              Buy the most advanced and secure products in the market.
              <br />
              bring all the emotion to products
            </p>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="hidden md:block">
              <img
                src="https://www.shipbob.com/wp-content/uploads/2022/06/PRODUCT-RANGE.jpg?w=1024"
                alt="3d illustration"
                className="w-full h-full rounded-lg min-h-[250px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="https://bucket.material-tailwind.com/magic-ai/b23d788054f53f0ca1983ebe2c56c41826cfac4546665556814022a3b6d1cf21.jpg"
                alt="3d illustration"
                className="w-full h-full rounded-lg min-h-[250px] object-cover"
              />
              <img
                src="https://bucket.material-tailwind.com/magic-ai/7b6be91d32713520f0e528849d8c4afeec0029de746a24ea30bc21e323491ac2.jpg"
                alt="3d illustration"
                className="w-full h-full rounded-lg min-h-[250px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 md:mt-24">
              <img
                src="https://www.adobe.com/uk/creativecloud/photography/discover/media_143a8f6f465ad139eaf4520156450f78cacd69123.png?width=750&format=png&optimize=medium"
                alt="3d illustration"
                className="w-full h-full rounded-lg min-h-[250px] object-cover"
              />
              <img
                src="https://bucket.material-tailwind.com/magic-ai/68092a80d4487fad9cb97e8e71bd1d1cd55c59fdf772ff0bfc50e94331573a33.jpg"
                alt="3d illustration"
                className="w-full h-full rounded-lg min-h-[250px] object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 md:mt-24 md:hidden">
              <img
                src="https://assets.aboutamazon.com/dims4/default/0411fb9/2147483647/strip/true/crop/2548x1434+2+0/resize/2640x1486!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F47%2Fd3%2F0a8b30f64b6e912f235b8f984d50%2Faa-sep2024-aishoppingexp-featured-hero-v1-600kb-2550-x1125-2.jpg"
                alt="3d illustration"
                className="w-full h-full rounded-lg min-h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
