import React from "react";
import { ArrowRight, Package, TrendingUp, Star, Tag, ShoppingBag, Zap, Shield, } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { useAuthContext } from "../context/Auth";
const Home = () => {

  const categories = [
    { name: "electronics", emoji: "💻", items: 17 },
    { name: "clothing", emoji: "📦", items: 2 },
    { name: "furniture", emoji: "📦", items: 3 },
    { name: "home", emoji: "📦", items: 14 },
    { name: "sports", emoji: "📦", items: 8 },
    { name: "accessories", emoji: "📦", items: 6 },
  ];

  const topRated = [
    {
      id: 6,
      name: "Professional Camera Lens",
      price: "$599.99",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    },
    {
      id: 13,
      name: "4K Ultra HD Monitor",
      price: "$349.99",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    },
    {
      id: 9,
      name: "Aromatherapy Essential Oil Diffuser",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    },
    {
      id: 14,
      name: "Mechanical Keyboard",
      price: "$149.99",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    },
  ];

  const newArrivals = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: "$99.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: "$299.99",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: 3,
      name: "Comfortable Cotton T-Shirt",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      price: "$34.99",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    },
  ];

  const ProductList = ({ products }) => {
    return (
      <div className="space-y-2">
        {products.map((product) => (
          <NavLink 
            key={product.id}
            to={`/products/${product.id}`}
            className="group flex items-center gap-3 p-3 bg-black/5  hover:bg-black/10 border border-black/10 hover:border-lime-400/30 rounded-2xl transition-all duration-200"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 p-1.5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-black/80 text-xs truncate">
                {product.name}
              </p>

              <p className="text-lime-500 font-bold text-sm mt-0.5">
                {product.price}
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 w-7 h-7 bg-lime-400/10 hover:bg-lime-400 text-lime-500 hover:text-black rounded-lg flex items-center justify-center transition-all"
            >
              <ShoppingBag size={13} />
            </button>
          </NavLink>
        ))}
      </div>
    );
  };
  
  const { login } = useAuthContext();






  const navigate = useNavigate();

  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-[#111] border border-white/10 p-8 sm:p-12 mb-10">

          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-lime-400/10 rounded-full blur-3xl" />

            <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-lime-400/5 rounded-full blur-3xl" />

            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(200, 244, 0) 1px, transparent 1px), linear-gradient(90deg, rgb(200, 244, 0) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

            {/* Hero Content */}
            <div>
              <p className="text-lime-400/70 text-sm tracking-widest uppercase mb-3">
                Good morning 👋
              </p>

              <h1 className="font-bold text-4xl sm:text-5xl text-white leading-tight mb-4">
                Welcome back,
                <br />
                <span className="text-lime-400 capitalize ">{login.name}!</span>
              </h1>

              <p className="text-white/40 max-w-md">
                Discover today's picks — hand-curated products across
                electronics, fashion, and more.
              </p>

              <div className="flex gap-3 mt-6 flex-wrap">
                <NavLink
                  to="/shop"
                  className="flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-semibold px-5 py-3 rounded-xl transition"
                >
                  Shop Now
                  <ArrowRight size={16} />
                </NavLink>

                <NavLink
                  to="/shop"
                  className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-5 py-3 rounded-xl transition"
                >
                  View All Products
                </NavLink>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="shrink-0 flex flex-col grid grid-cols-2 gap-3">
              <div className="bg-lime-400/10 border border-lime-400/20 rounded-2xl px-6 py-4 text-center">
                <p className="font-bold text-4xl text-lime-400">
                  20+
                </p>

                <p className="text-white/40 text-xs mt-1">
                  Products Available
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
                <p className="font-bold text-2xl text-white">
                  Free
                </p>

                <p className="text-white/40 text-xs mt-1">
                  Delivery on ₹999+
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">

          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-lime-400/10 text-lime-400">
              <Package size={22} />
            </div>

            <div>
              <p className="font-bold text-2xl text-white">0</p>
              <p className="text-white/50 text-sm">Cart Items</p>
              <p className="text-white/25 text-xs mt-0.5">
                In your bag
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-blue-500/10 text-blue-400">
              <TrendingUp size={22} />
            </div>

            <div>
              <p className="font-bold text-2xl text-white">
                $0.00
              </p>
              <p className="text-white/50 text-sm">Cart Value</p>
              <p className="text-white/25 text-xs mt-0.5">
                Ready to checkout
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-400">
              <Star size={22} />
            </div>

            <div>
              <p className="font-bold text-2xl text-white">5</p>
              <p className="text-white/50 text-sm">Top Products</p>
              <p className="text-white/25 text-xs mt-0.5">
                Highly rated
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-purple-500/10 text-purple-400">
              <Tag size={22} />
            </div>

            <div>
              <p className="font-bold text-2xl text-white">6</p>
              <p className="text-white/50 text-sm">Categories</p>
              <p className="text-white/25 text-xs mt-0.5">
                To explore
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-xl text-white">
              Shop by Category
            </h2>

            <NavLink
              to="/shop"
              className="text-lime-400 text-sm hover:text-lime-300 transition-colors flex items-center gap-1"
            >
              View All
              <ArrowRight size={14} />
            </NavLink>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map((category) => (
              <NavLink
                key={category.name}

                to={`/shop?category=${category.name}`}
                className="group bg-white border border-white/20 hover:border-white/40 hover:bg-white/95 rounded-2xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-3">
                  {category.emoji}
                </div>

                <p className="font-semibold text-black/80 text-sm capitalize">
                  {category.name}
                </p>

                <p className="text-black/50 text-xs mt-1">
                  {category.items} items
                </p>
              </NavLink>
            ))}
          </div>
        </section>

        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          {/* Top Rated */}
          <div className="bg-white border border-white/20 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-lg flex items-center gap-2 text-black">
                <Star
                  size={18}
                  className="text-amber-400 fill-amber-400"
                />
                Top Rated
              </h2>

              <NavLink
                to="/shop?sort=rating"
                className="text-lime-500 text-xs hover:text-lime-400 flex items-center gap-1"
              >
                See all
                <ArrowRight size={12} />
              </NavLink>
            </div>

            <ProductList products={topRated} />
          </div>

          {/* New Arrivals */}
          <div className="bg-white border border-white/20 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-lg flex items-center gap-2 text-black">
                <Zap
                  size={18}
                  className="text-lime-400 fill-lime-400"
                />
                New Arrivals
              </h2>

              <NavLink
                to="/shop"
                className="text-lime-500 text-xs hover:text-lime-400 flex items-center gap-1"
              >
                See all
                <ArrowRight size={12} />
              </NavLink>
            </div>

            <ProductList products={newArrivals} />
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-[#111] border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <Zap size={24} className="text-lime-400" />

            <div>
              <p className="font-semibold text-white/80 text-sm">
                Fast Delivery
              </p>

              <p className="text-white/30 text-xs">
                Same-day on select items
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <Shield size={24} className="text-blue-400" />

            <div>
              <p className="font-semibold text-white/80 text-sm">
                Secure Payments
              </p>

              <p className="text-white/30 text-xs">
                100% encrypted checkout
              </p>
            </div>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-2xl p-5 flex items-center gap-4">
            <Tag size={24} className="text-green-400" />

            <div>
              <p className="font-semibold text-white/80 text-sm">
                Best Prices
              </p>

              <p className="text-white/30 text-xs">
                Price-match guarantee
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );



}

export default Home