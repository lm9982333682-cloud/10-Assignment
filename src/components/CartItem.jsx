import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { changeQty, deleteToCart } from "../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const CartItem = ({ product }) => {


  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 p-3 mt-2 bg-white/4 border border-white/8 rounded-2xl animate-fade-in">

      {/* Product Image */}
      <div className="w-18 h-18 bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">

        <p className="text-sm text-white/80 font-body clamp-2 leading-snug">
          {product.title}
        </p>

        <p className="text-[#C8F400] font-heading font-bold text-base mt-1">
          ${(product.price *  product.qty ).toFixed(2)}
        </p>

        <p className="text-white text-xs">
          ${product.price.toFixed(2)} each
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-2">

          {/* Minus */}
          <button onClick={() => dispatch(changeQty({ type: "-", id: product.id }))} className="w-7 h-7 cursor-pointer flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10">
            <Minus size={11} />
          </button>

          {/* Quantity */}
          <span className="text-sm font-bold font-body w-5 text-center">
            {product.qty}
          </span>

          {/* Plus */}
          <button onClick={() => dispatch(changeQty({ type: "+", id: product.id }))} className="w-7 h-7 cursor-pointer flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10">
            <Plus size={11} />
          </button>

          {/* Delete */}
          <button
            onClick={() => {
              dispatch(deleteToCart(product.id))
              toast.error('Removed from cart');
            }}
            className="ml-auto cursor-pointer text-red-400/60 hover:text-red-400 transition-colors">
            <Trash2 size={14} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default CartItem;

