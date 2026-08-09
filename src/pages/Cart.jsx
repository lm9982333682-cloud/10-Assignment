import React from 'react'
import CartItem from '../components/CartItem';
import cartItems from '../data/products.json';
import { ShoppingBag, X, ArrowRight, PackageOpen } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { showCartToggle } from '../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router';


const Cart = () => {


    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart.cart);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);






    return (
        <div onClick={() => dispatch(showCartToggle(false))} className=' h-screen z-40 w-full fixed top-0 left-0 bg-black/50 '   >


            <div onClick={e => e.stopPropagation()} className=' bg-[#0D0D0D] absolute top-0 right-0 pl-4 h-screen  ' >

                <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                    <div className="flex items-center gap-3">
                        <ShoppingBag size={20} className="text-[#C8F400]" />
                        <h2 className="font-heading font-bold text-lg"> Cart </h2>
                        <span className="badge bg-volt/15 text-volt text-xs text-[#C8F400] bg-[#c7f40042] py-1 px-3 rounded-full "> {cart.length} items </span>
                    </div>

                    <button onClick={() => dispatch(showCartToggle(false))} className="p-2 hover:bg-white/8 cursor-pointer rounded-xl transition-colors text-white/50 hover:text-white" >
                        <X size={18} />
                    </button>
                </div>


                {cart.length === 0 ? <EmptyCart /> :
                    <>

                        <div className='cart-scroll h-125 w-100 overflow-y-scroll  ' >
                            {cart.map((item) => <CartItem key={item.id} product={item} />)}
                        </div>

                        <div className="px-6 py-2 border-t border-white/8 space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-white/50 text-sm font-body"> Total </span>
                                <span className="font-heading font-bold text-2xl text-white">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>

                            <button className="w-full bg-[#C8F400] hover:bg-[#c7f400a8] text-black cursor-pointer rounded-full flex items-center justify-center gap-2 py-3.5 text-base font-heading font-bold transition-all duration-700 " >
                                Checkout <ArrowRight size={18} />
                            </button>
                            <button className="w-full mt-0 text-center text-xs text-white/25 hover:text-red-400 transition-colors py-1" > Clear cart </button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
};



const EmptyCart = () => {


    const navigate = useNavigate();

    const dispatch = useDispatch()


    const browse = () => {
        navigate('/shop');
        dispatch(showCartToggle(false))
    }

    return (
        <div className="h-full w-100 flex flex-col items-center justify-center gap-4 text-center py-16">

            {/* Icon */}
            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
                <PackageOpen
                    size={36}
                    className="text-white/20"
                />
            </div>

            {/* Text */}
            <div>
                <p className="font-heading font-semibold text-white/70 text-lg">
                    Cart is empty
                </p>

                <p className="text-white/30 text-sm mt-1">
                    Go shop something cool!
                </p>
            </div>

            {/* Browse Products */}
            <button
                onClick={browse}
                className="btn-volt bg-[#c7f400a9] cursor-pointer mt-2 px-5 py-2.5 text-black rounded-xl font-heading font-semibold text-sm transition-all duration-200 active:scale-95"
            >
                Browse Products
            </button>

        </div>
    );
};






export default Cart
