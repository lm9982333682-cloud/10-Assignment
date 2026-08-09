
import React, { useEffect, useState } from "react";
import { Search, ChevronDown, Link, Star, ShoppingCart, CheckCheck, Check } from "lucide-react";

import products from '../data/products.json'
import { useNavigate, useSearchParams, } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQty, showCartToggle } from "../redux/features/cart/cartSlice";
import toast from "react-hot-toast";


const SearchProduct = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("default");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Search + Category Filter
    let filteredProducts = products.filter((product) => {
        const searchMatch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const categoryMatch =
            category === "all" ||
            product.category.toLowerCase() === category.toLowerCase();

        return searchMatch && categoryMatch;
    });

    // Sorting
    if (sort === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating-desc") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "rating-asc") {
        filteredProducts.sort((a, b) => a.rating - b.rating);
    };


    const categoryUrl = searchParams.get('category');
    const sortUrl = searchParams.get('sort');

    useEffect(() => {
        if (categoryUrl) {
            setCategory(categoryUrl)
        };

        if (sortUrl) {
            setSort("rating-desc");
        };

    }, [categoryUrl, sortUrl]);




    return (

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* ================= FILTER BOX ================= */}
            <div className="bg-[#111] border border-white/8 rounded-2xl p-4 mb-6">

                <div className="flex flex-col sm:flex-row gap-3">

                    {/* ================= SEARCH ================= */}
                    <div className="relative flex-1">

                        <Search
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
                        />

                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="bg-white/5 border border-white/10 rounded-xl h-10 w-full pl-10 pr-8 text-sm text-white outline-none placeholder:text-white/25 focus:border-volt/40 transition-all"
                        />

                    </div>

                    {/* ================= CATEGORY ================= */}
                    <div className="relative">

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-[#1D1D1D]  border border-white/10 rounded-xl h-10 pr-8 pl-3 appearance-none cursor-pointer min-w-40  text-sm text-white/70 outline-none focus:border-volt/40"
                        >

                            <option value="all">
                                All Categories
                            </option>

                            <option value="electronics">
                                Electronics
                            </option>

                            <option value="clothing">
                                Clothing
                            </option>

                            <option value="furniture">
                                Furniture
                            </option>

                            <option value="home">
                                Home
                            </option>

                            <option value="sports">
                                Sports
                            </option>

                            <option value="accessories">
                                Accessories
                            </option>

                        </select>

                        <ChevronDown
                            size={13}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
                        />

                    </div>

                    {/* ================= SORT ================= */}
                    <div className="relative">

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="bg-[#1D1D1D] border border-white/10 rounded-xl h-10 pr-8 pl-3 appearance-none cursor-pointer min-w-45 text-sm text-white/70 outline-none focus:border-volt/40"
                        >

                            <option value="default">
                                Featured
                            </option>

                            <option value="price-asc">
                                Price: Low → High
                            </option>

                            <option value="price-desc">
                                Price: High → Low
                            </option>

                            <option value="rating-desc">
                                Top Rated
                            </option>

                            <option value="rating-asc">
                                Lowest Rated
                            </option>

                        </select>

                        <ChevronDown
                            size={13}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none"
                        />

                    </div>

                </div>

                {search &&
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/6">
                        <span class="badge bg-[#23280F] rounded-full px-3 py-1  text-[#C8F400] border border-[#C8F400] flex items-center text-xs gap-1">
                            "{search}"
                            <button onClick={() => setSearch("")} className=" cursor-pointer " fdprocessedid="1ssyqb">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            </button>
                        </span>
                    </div>
                }


                {category && category !== "all" &&
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/6">
                        <span className="badge bg-[#23280F] capitalize rounded-full px-3 py-1  text-[#C8F400] border border-[#C8F400] flex items-center text-xs gap-1">
                            "{category}"
                            <button onClick={() => setCategory("all")} className=" cursor-pointer " fdprocessedid="1ssyqb">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            </button>
                        </span>
                    </div>
                }

            </div>

            {/* ================= RESULT COUNT ================= */}
            <div className="flex items-center justify-between mb-5">

                <p className="text-white/40 text-sm">
                    Showing{" "}
                    <span className="text-white">
                        {filteredProducts.length}
                    </span>{" "}
                    products
                </p>

            </div>

            {/* ================= PRODUCT GRID ================= */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

                {filteredProducts.map((product) => <CartItem product={product} key={product.id} />)}

            </div>

            {/* ================= NO RESULT ================= */}
            {filteredProducts.length === 0 && (

                <div className="text-center py-20">

                    <Search
                        size={40}
                        className="mx-auto text-white/20 mb-4"
                    />

                    <h2 className="text-white text-xl font-bold">
                        No Products Found
                    </h2>

                    <p className="text-white/30 text-sm mt-2">
                        Try another search or category.
                    </p>

                </div>

            )}

        </div>

    );
};




const CartItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.cart);

    const checkItem = cart.some(obj => obj.id === product.id);


    const btnChandQty = () => {
        toast.success('Quantity updated!')
        dispatch(showCartToggle(true));
        dispatch(changeQty({ type: "+", id: product.id }))
    };

    const addQty = () => {
        toast.success('Added to cart 🛒');
        dispatch(showCartToggle(true));
        dispatch(addToCart({ ...product, qty: 1 }))
    }



    return (<div
        onClick={() => navigate(`/products/${product.id}`)}
        className="product-card group cursor-pointer  bg-[#111]   rounded-2xl overflow-hidden  shadow-[#9ebf09] hover:shadow-[0px_0px_5px_1px] transition-all duration-700"
    >

        {/* IMAGE */}
        <div className="relative aspect-square bg-white">

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6  group-hover:scale-110 transition-transform duration-500"
            />

            <span className="absolute top-3 left-3 bg-black/60 text-white/80 backdrop-blur-sm capitalize text-[10px] px-2 py-1 rounded-lg">
                {product.category}
            </span>

        </div>

        {/* DETAILS */}
        <div className="p-4">

            <p className="text-white/30 text-[10px] uppercase tracking-widest">
                {product.category}
            </p>

            <h3 className="text-white/85 text-sm line-clamp-1 mt-2">
                {product.name}
            </h3>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-2">

                <span className="text-amber-400">
                    ⭐ {product.rating}
                </span>

                <span className="text-white/30 text-xs">
                    ({product.reviews})
                </span>

            </div>

            {/* PRICE */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/6">

                <span className="font-bold text-[#C8F400] text-lg">
                    ${product.price.toFixed(2)}
                </span>


                <div onClick={e => e.stopPropagation()} >

                    {checkItem ?
                        <button
                            onClick={btnChandQty}
                            className=" flex gap-1 items-center cursor-pointer  border-[0.1px] border-green-400/20  bg-green-400/10 text-green-400   px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-volt-light transition-all">
                            <Check size={15} />  Added
                        </button>
                        :
                        <button
                            onClick={addQty}
                            className=" flex gap-1 items-center cursor-pointer  bg-[#C8F400] text-black px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-volt-light transition-all">
                            <ShoppingCart size={15} />  Add
                        </button>
                    }
                </div>


            </div>

        </div>

    </div>)
}











export default SearchProduct


