import { ArrowRight, Lock, Mail, Eye, Zap, Star, LampFloor, } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useAuthContext } from "../context/Auth";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {

  const { authUser, setLogin } = useAuthContext();


  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({ mode: "onChange", });
  const password = watch("password");

  const [isEmail, setIsEmail] = useState(false)



  const navigate = useNavigate();

  const formHandle = (data) => {
    const user = authUser.find(obj => obj.email === data.email && obj.password === data.password);

    if (!user) {
      toast.error("Invalid Email or Password")
      setIsEmail(true);
      return
    }


    setLogin(user);

    localStorage.setItem('user', JSON.stringify(user));
    toast.success("User Login successfully");

    setTimeout(() => {
      navigate('/')
    }, 1500);

    setIsEmail(false);

    reset();


  };




  return (
    <section className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="border-r border-white/85 bg-[#111111]  flex flex-col px-8 lg:px-14 py-10">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-lime-400 flex items-center justify-center">
              <Zap className="text-black fill-black" size={24} />
            </div>

            <h1 className="text-2xl font-bold">
              <span className="text-white">Sky</span>
              <span className="text-lime-400">Mart</span>
            </h1>
          </div>

          {/* Hero Content */}
          <div className="max-w-xl  mt-30   ">

            <p className="uppercase tracking-widest text-lime-400 font-semibold mb-3">
              Welcome Back
            </p>

            <h2 className="text-6xl font-semibold leading-tight">
              Shop the future.
              <br />
              <span className="text-lime-400">Today.</span>
            </h2>

            <p className="text-zinc-500 text-xl mt-5 leading-9">
              Thousands of products, lightning-fast delivery,
              and prices that make your wallet happy.
            </p>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 mt-10 gap-5">

            <div className="border border-zinc-600 rounded-xl  py-3 text-center">
              <h3 className="text-lime-400 text-xl font-bold">
                20K+
              </h3>

              <p className="text-zinc-500 mt-1">
                Products
              </p>
            </div>

            <div className="border border-zinc-600 rounded-xl py-3  text-center">
              <h3 className="text-lime-400 text-xl font-bold">
                50K+
              </h3>

              <p className="text-zinc-500 mt-1">
                Users
              </p>
            </div>

            <div className="border border-zinc-600 rounded-xl  py-3 text-center">
              <h3 className="text-lime-400 text-xl font-bold flex items-center justify-center gap-1">
                4.9
                <Star size={28} fill="currentColor" />
              </h3>

              <p className="text-zinc-500 mt-1">
                Rating
              </p>
            </div>

          </div>


        </div>

        {/* RIGHT SIDE */}

        <div className="flex  justify-center items-center  px-6 py-10">

          <form onSubmit={handleSubmit(formHandle)} className="w-full max-w-112.5 rounded-3xl  border border-zinc-800 bg-[#111111] shadow-2xl p-8">

            <h2 className="text-xl font-bold">
              Sign in
            </h2>

            <p className="text-zinc-500 mt-2 mb-7 text-lg">
              Enter your credentials to continue
            </p>
            {isEmail && <p className=" text-center bg-[#77363649] rounded-md text-red-500 text-lg my-2 py-2 " >Invalid Email or Password</p>}


            {/* Email */}

            <div>
              <div className="relative mb-6">

                <Mail
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="email"
                  {...register('email', {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },

                  })}
                  placeholder="Email address"
                  className="w-full py-2 bg-[#242424] border-zinc-700 border  rounded-lg pl-14 pr-4 outline-none text-lg placeholder:text-zinc-500  outline-0 focus:shadow-[0_0_5px_3px]  focus:shadow-[#9ae600]   "
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}

            <div>


              <div className="relative mb-8">

                <Lock
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
                />

                <input
                  type="password"
                  {...register('password', {
                    required: {
                      value: true,
                      message: "Password is required"
                    },
                    maxLength: {
                      value: 8,
                      message: "Password must not exceed 9 characters"
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                  placeholder="Password"
                  className="w-full py-3 bg-[#242424] border border-zinc-700 rounded-lg pl-14 pr-14 outline-none text-lg placeholder:text-zinc-500  outline-0  focus:shadow-[0_0_5px_3px]  focus:shadow-[#9ae600]   "
                />

                <Eye
                  size={20}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer"
                />

              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}

            <button className="w-full py-3 cursor-pointer rounded-lg bg-lime-400 hover:bg-lime-300 transition-all text-black text-xl font-bold flex justify-center items-center gap-3">

              Sign in

              <ArrowRight size={24} />

            </button>

            <p className="text-center text-zinc-500 mt-10 text-lg">
              Don't have an account?{" "}
              <NavLink to={'/register'} className="text-lime-400 font-semibold cursor-pointer">
                Create one
              </NavLink>
            </p>

          </form>

        </div>

      </div>

      <ToastContainer />
    </section>
  );
};

export default Login;