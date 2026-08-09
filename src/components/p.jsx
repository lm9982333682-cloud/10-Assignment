
import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  SlidersHorizontal,
  Search,
} from "lucide-react";

import products from "../data/product.json";

const Products = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-8">
          <div>
            <p className="text-volt text-xs uppercase tracking-widest font-body mb-2">
              Explore our collection
            </p>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white">
              All Products
            </h1>

            <p className="text-white/40 font-body text-sm mt-2">
              Discover products curated just for you.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="flex items-center gap-2 w-full sm:w-auto">

            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex-1 sm:w-64">
              <Search size={16} className="text-white/30" />

              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm text-white placeholder:text-white/30 w-full"
              />
            </div>

            <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white transition-all">
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* ================= CATEGORY FILTER ================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          <button className="px-4 py-2 rounded-xl bg-volt text-ink text-xs font-semibold whitespace-nowrap">
            All
          </button>

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white whitespace-nowrap text-xs">
            Electronics
          </button>

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white whitespace-nowrap text-xs">
            Clothing
          </button>

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white whitespace-nowrap text-xs">
            Furniture
          </button>

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white whitespace-nowrap text-xs">
            Home
          </button>

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white whitespace-nowrap text-xs">
            Sports
          </button>

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white whitespace-nowrap text-xs">
            Accessories
          </button>
        </div>

        {/* ================= PRODUCT COUNT ================= */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-white/40 text-sm font-body">
            Showing{" "}
            <span className="text-white">
              {products.length}
            </span>{" "}
            products
          </p>

          <select className="bg-[#111] border border-white/10 rounded-xl px-3 py-2 text-white/60 text-xs outline-none">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>

        {/* ================= PRODUCTS GRID ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

          {products.map((product) => (
            <Link
              to={`/ products / ${ product.id } `}
              key={product.id}
              className="product-card flex flex-col group bg-[#111] border border-white/8 rounded-2xl overflow-hidden hover:border-volt/30 transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative aspect-square bg-white overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />

                {/* CATEGORY */}
                <span className="absolute top-3 left-3 bg-black/60 text-white/80 backdrop-blur-sm rounded-lg px-2 py-1 capitalize text-[10px]">
                  {product.category}
                </span>

                {/* STOCK */}
                {!product.stock && (
                  <span className="absolute top-3 right-3 bg-red-500/80 text-white rounded-lg px-2 py-1 text-[10px]">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* PRODUCT INFO */}
              <div className="p-4 flex flex-col flex-1 gap-2">

                {/* CATEGORY */}
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-body capitalize">
                  {product.category}
                </p>

                {/* NAME */}
                <h3 className="font-body font-medium text-white/85 text-sm leading-snug line-clamp-2 flex-1">
                  {product.name}
                </h3>

                {/* RATING */}
                <div className="flex items-center gap-1.5">

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={10}
                        className={
                          index < Math.round(product.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-white/15 fill-white/15"
                        }
                      />
                    ))}
                  </div>

                  <span className="text-white/30 text-[10px]">
                    ({product.reviews})
                  </span>
                </div>

                {/* PRICE + CART */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/6">

                  <span className="font-heading font-bold text-volt text-lg">
                    ${product.price.toFixed(2)}
                  </span>

                  <button
                    disabled={!product.stock}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      console.log("Added to cart:", product);
                    }}
                    className={`flex items - center gap - 1.5 px - 3 py - 1.5 rounded - xl text - xs font - semibold font - body transition - all duration - 200 active: scale - 95 ${
    product.stock
        ? "bg-volt text-ink hover:bg-volt-light"
        : "bg-white/10 text-white/30 cursor-not-allowed"
} `}
                  >
                    <ShoppingCart size={12} />

                    {product.stock ? "Add" : "Sold Out"}
                  </button>

                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* ================= EMPTY STATE ================= */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <ShoppingCart
              size={40}
              className="mx-auto text-white/20 mb-4"
            />

            <h2 className="text-white font-heading font-bold text-xl">
              No Products Found
            </h2>

            <p className="text-white/30 text-sm mt-2">
              There are no products available right now.
            </p>
          </div>
        )}

      </div>
    </main>
  );
};
