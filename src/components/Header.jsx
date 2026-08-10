
import { Zap, ShoppingCart, LogOut, Menu, X, } from "lucide-react";
import { NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { showCartToggle } from '../redux/features/cart/cartSlice.js'
import { useAuthContext } from "../context/Auth.jsx";
import { useState } from "react";
const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cart);

  const { setLogin } = useAuthContext()

  const logout = () => {
    setLogin(null);
    localStorage.removeItem('user');
  }


  return (
    <>


      <header className="sticky top-0 z-30 transition-all duration-300 bg-[#0D0D0D] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 shrink-0  "
          >
            <div className="w-8 h-8 bg-lime-400 rounded-xl flex items-center justify-center">
              <Zap
                size={15}
                className="text-black fill-black"
              />
            </div>

            <span className="font-bold text-lg">
              Sky<span className="text-lime-400">Mart</span>
            </span>
          </NavLink>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) => ` ${isActive ? "text-lime-400 " : "text-white/70"}  hover:text-lime-400 transition `}
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) => ` ${isActive ? "text-lime-400 " : "text-white/70"}  hover:text-lime-400 transition `}
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => ` ${isActive ? "text-lime-400 " : "text-white/70"}  hover:text-lime-400 transition `}
            >
              About
            </NavLink>
          </nav>





          {/* Right Side */}
          <div className="flex items-center gap-2 shrink-0">

            {/* User */}
            <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
              <div className="w-6 h-6 bg-lime-400 rounded-lg flex items-center justify-center text-black text-xs font-bold">
                L
              </div>

              <span className="text-sm text-white/70 max-w-25 truncate">
                Lal Chand Meghwal
              </span>
            </div>

            {/* Cart */}
            <button
              onClick={() => dispatch(showCartToggle(true))}
              className="relative p-2.5 bg-white/5 cursor-pointer hover:bg-white/10 border border-white/10 rounded-xl transition-all"
              title="Cart"
            >
              <ShoppingCart size={18} />

              {cart.length != 0 && <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#c8f400] text-black text-[10px] font-bold rounded-full text-lg  flex items-center justify-center">{cart.length}+</span>}
            </button>

            {/* Logout */}
            <button
              title="Logout"

              onClick={logout}

              className="p-2.5 bg-white/5 cursor-pointer   hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400"
            >
              <LogOut size={16} />
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 bg-white/5  cursor-pointer  border border-white/10 rounded-xl"
              title="Menu"
            >
              {menuOpen ? <X /> : <Menu size={18} />}

            </button>

          </div>




        </div>
      </header>

      <MobileMenu
        menuOpen={menuOpen}
        onLogout={logout}
        onClose={() => setMenuOpen(false)}
      />

    </>
  );
};




const MobileMenu = ({ menuOpen, onLogout, onClose }) => {
  return (
    <div
      className={`
        md:hidden
        border-t border-white/8
        bg-[#111]
        px-4 py-4
        flex flex-col gap-3
        transition-all duration-700 ease-out
        origin-top
        ${menuOpen
          ? "translate-y-0 opacity-100 max-h-96"
          : "-translate-y-5 opacity-0 max-h-0 overflow-hidden"
        }
      `}
    >
      <NavLink
        to="/"
        onClick={onClose}
        className={({ isActive }) =>
          `text-base py-2 ${isActive
            ? "text-lime-400"
            : "text-white/70 hover:text-lime-400"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        onClick={onClose}
        className={({ isActive }) =>
          `text-base py-2 ${isActive
            ? "text-lime-400"
            : "text-white/70 hover:text-lime-400"
          }`
        }
      >
        Shop
      </NavLink>

      <NavLink
        to="/about"
        onClick={onClose}
        className={({ isActive }) =>
          `text-base py-2 ${isActive
            ? "text-lime-400"
            : "text-white/70 hover:text-lime-400"
          }`
        }
      >
        About
      </NavLink>

      <button
        onClick={onLogout}
        className="flex cursor-pointer items-center gap-2 text-red-400 text-sm mt-2 hover:text-red-300 transition-colors"
      >
        <LogOut size={14} />
        Logout
      </button>
    </div>
  );
};
export default Header;

