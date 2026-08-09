import React from "react";
import { Link, useNavigate, useParams } from "react-router";

import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, Heart, RotateCcw, Shield, ShoppingCart, Star, Truck, } from "lucide-react";

import products from "../data/products.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, changeQty, showCartToggle } from "../redux/features/cart/cartSlice";
import toast from "react-hot-toast";

const ProductDetails = () => {
    const { id } = useParams();




    const product = products.find(
        (item) => Number(item.id) === Number(id)
    );

    // Product not found
    if (!product) {
        return (
            <main className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-3">
                        Product Not Found
                    </h1>

                    <p className="text-white/40 mb-6">
                        The product you are looking for does not exist.
                    </p>

                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 bg-volt text-ink px-6 py-3 rounded-xl font-bold"
                    >
                        <ArrowLeft size={18} />
                        Back to Products
                    </Link>
                </div>
            </main>
        );
    }

    // Current product index
    const currentIndex = products.findIndex(
        (item) => Number(item.id) === Number(id)
    );

    // Previous & Next product
    const previousProduct = currentIndex > 0 ? products[currentIndex - 1] : null;

    const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

    // Related products
    const relatedProducts = products.filter((item) =>
        item.category.toLowerCase() === product.category.toLowerCase() &&
        Number(item.id) !== Number(product.id)
    ).slice(0, 5);

    // Rating stars
    const renderStars = (rating, size = 14) => {
        return (
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={size}
                        className={
                            star <= Math.round(rating)
                                ? "text-amber-400 fill-amber-400"
                                : "text-white/15 fill-white/15"
                        }
                    />
                ))}
            </div>
        );
    };



    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const checkItem = cart.some(obj => obj.id === product.id);
    const btnChandQty = () => {
        toast.success("Quantity updated!")
        dispatch(showCartToggle(true));
        dispatch(changeQty({ type: "+", id: product.id }))
    };




    const addQty = () => {
        toast.success("Added to cart 🛒")
        dispatch(showCartToggle(true));
        dispatch(addToCart({ ...product, qty: 1 }))
    }







    return (
        <main className="min-h-screen bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* ================= BREADCRUMB ================= */}

                <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">

                    <Link
                        to="/shop"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Products
                    </Link>

                    <span>/</span>

                    <span className="capitalize text-white/50">
                        {product.category}
                    </span>

                    <span>/</span>

                    <span className="text-white/70 truncate max-w-55">
                        {product.name}
                    </span>
                </nav>

                {/* ================= MAIN PRODUCT ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">

                    {/* PRODUCT IMAGE */}

                    <div className="bg-white rounded-3xl p-8 sm:p-10 aspect-square flex items-center justify-center overflow-hidden group">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />

                    </div>

                    {/* PRODUCT INFORMATION */}

                    <div className="flex flex-col gap-5">

                        {/* CATEGORY */}

                        <span className="bg-volt/10 text-volt border border-volt/20 rounded-full px-3 py-1.5 capitalize text-xs font-semibold w-fit">
                            {product.category}
                        </span>

                        {/* TITLE */}

                        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                            {product.name}
                        </h1>

                        {/* RATING */}

                        <div className="flex items-center gap-3">

                            {renderStars(product.rating)}

                            <span className="font-semibold text-white/70 text-sm">
                                {product.rating}
                            </span>

                            <span className="text-white/30 text-sm">
                                ({product.reviews} reviews)
                            </span>

                        </div>

                        {/* PRICE */}

                        <div className="py-5 border-y border-[#ffffff53] ">

                            <span className="text-4xl text-[#C8F400] font-bold text-volt">
                                ${Number(product.price).toFixed(2)}
                            </span>

                        </div>

                        {/* DESCRIPTION */}

                        <p className="text-white/50 text-sm leading-relaxed">
                            {product.description}
                        </p>

                        {/* FEATURES */}

                        {product.features && product.features.length > 0 && (
                            <div className="space-y-2">

                                <h3 className="text-sm font-semibold text-white">
                                    Key Features
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-white/50">
                                            <span className="w-1.5 h-1.5 bg-volt rounded-full" />
                                            {feature}
                                        </div>
                                    ))}

                                </div>

                            </div>
                        )}

                        {/* BUTTONS */}



                        <div className="flex gap-3">

                            {checkItem ?
                                <button onClick={btnChandQty} className=" border-[0.1px] border-green-400/20  bg-green-400/10 hover:bg-green-400/15 text-green-400    flex-1  cursor-pointer   flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-volt text-ink font-bold text-base hover:bg-volt-light active:scale-95 transition-all">
                                    <Check size={18} /> Added to Cart
                                </button>
                                :
                                <button onClick={addQty} className=" flex-1 bg-[#C8F400] cursor-pointer text-black hover:bg-[#c7f400a9] flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-volt text-ink font-bold text-base hover:bg-volt-light active:scale-95 transition-all">
                                    <ShoppingCart size={18} /> Add to Cart
                                </button>
                            }
                            <button className=" p-3.5 rounded-2xl border border-white/10 text-white/40 hover:text-red-400 hover:border-red-500/30 transition-all">
                                <Heart size={20} />
                            </button>

                        </div>

                        {/* ================= SERVICE CARDS ================= */}

                        <div className="grid grid-cols-3 gap-3 mt-1">

                            {/* DELIVERY */}

                            <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">

                                <Truck size={17} className="text-volt mx-auto mb-2" />

                                <p className="text-white/70 text-[11px] font-semibold">
                                    {product.delivery?.title || "Free Delivery"}
                                </p>

                                <p className="text-white/25 text-[10px] mt-1">
                                    {product.delivery?.condition || "On orders $50+"}
                                </p>

                            </div>

                            {/* SECURITY */}

                            <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">

                                <Shield size={17} className="text-volt mx-auto mb-2" />
                                <p className="text-white/70 text-[11px] font-semibold">
                                    {product.security?.title || "Secure Pay"}
                                </p>
                                <p className="text-white/25 text-[10px] mt-1">
                                    {product.security?.description || "256-bit SSL"}
                                </p>
                            </div>

                            {/* RETURNS */}

                            <div className="bg-white/3 border border-white/6 rounded-2xl p-3 text-center">
                                <RotateCcw size={17} className="text-volt mx-auto mb-2" />
                                <p className="text-white/70 text-[11px] font-semibold">
                                    {product.returns?.title || "Easy Returns"}
                                </p>
                                <p className="text-white/25 text-[10px] mt-1">
                                    {product.returns?.description || "30-day policy"}
                                </p>
                            </div>

                        </div>

                        {/* ================= PREVIOUS NEXT ================= */}

                        <div className="flex gap-3 mt-5">

                            {previousProduct ? (
                                <Link to={`/products/${previousProduct.id}`}
                                    className=" flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white/70 text-sm transition-all">
                                    <ChevronLeft size={16} /> Previous
                                </Link>
                            ) : (
                                <div className="flex-1" />
                            )}

                            {nextProduct && (
                                <Link
                                    to={`/products/${nextProduct.id}`}
                                    className=" flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-volt hover:bg-volt-light text-ink border border-volt rounded-2xl font-semibold text-sm transition-all">
                                    Next<ChevronRight size={16} />
                                </Link>
                            )}

                        </div>

                    </div>
                </div>

                {/* ================= RELATED PRODUCTS ================= */}

                {relatedProducts.length > 0 && (
                    <section className="mb-12">

                        <div className="flex items-center justify-between mb-6">

                            <div>
                                <p className="text-volt text-xs uppercase tracking-[0.2em] font-semibold mb-1">
                                    You may also like
                                </p>

                                <h2 className="text-2xl font-bold">
                                    Related Products
                                </h2>
                            </div>

                            <Link to="/shop"
                                className="text-sm text-white/40 hover:text-volt flex items-center gap-1 transition-colors">
                                View All
                                <ArrowRight size={14} />
                            </Link>

                        </div>

                        {/* PRODUCTS GRID */}

                        <div className="grid  sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                            {relatedProducts.map((item) => (<RelatedProducts item={item} renderStars={renderStars} checkItem={checkItem} key={item.id} />))}

                        </div>

                    </section>
                )}

            </div>
        </main>
    );
};



const RelatedProducts = ({ item, renderStars }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const checkItem = cart.some(obj => obj.id === item.id);

    const btnChandQty = () => {
        toast.success("Quantity updated!")
        dispatch(showCartToggle(true));
        dispatch(changeQty({ type: "+", id: item.id }))
    };




    const addQty = () => {
        toast.success("Added to cart 🛒")
        dispatch(showCartToggle(true));
        dispatch(addToCart({ ...item, qty: 1 }))
    }




    return (<div
        onClick={() => navigate(`/products/${item.id}`)}
        className=" cursor-pointer group flex flex-col bg-[#111] border border-white/8 rounded-2xl overflow-hidden hover:border-volt/30 hover:-translate-y-1 transition-all duration-300">

        {/* IMAGE */}

        <div
            className="relative aspect-square bg-white overflow-hidden">

            <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className=" w-full h-full object-contain p-5 group-hover:scale-110 transition-transform duration-500" />

            {/* CATEGORY BADGE */}

            <span className=" absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/70 text-[10px] capitalize">
                {item.category}
            </span>
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col gap-2 flex-1">

            <p className="text-white/30 text-[10px] uppercase tracking-widest">
                {item.category}
            </p>

            <p
                className=" text-white/85 text-sm font-medium leading-snug line-clamp-2 hover:text-volt transition-colors">
                {item.name}
            </p>

            {/* RATING */}

            <div className="flex items-center gap-1.5">
                {renderStars(item.rating, 10)}
                <span className="text-white/30 text-[10px]">
                    ({item.reviews})
                </span>
            </div>

            {/* PRICE + CART */}

            <div className=" flex items-center justify-between gap-2 mt-auto pt-3 border-t border-white/6">
                <span className="text-volt text-lg font-bold">
                    ${Number(item.price).toFixed(2)}
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

};







export default ProductDetails;