import { ArrowRight, Lock, Mail, User, Eye, Zap } from "lucide-react";
import { useAuthContext } from "../context/Auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {

  const { authUser, setAuthUser,  } = useAuthContext();


  console.log(authUser);
  
  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm({ mode: "onChange", });
  const password = watch("password");

  const [isEmail, setIsEmail] = useState(false)


  const navigate = useNavigate();

  const formHandle = (data) => {

    const checkEmail = authUser.find(obj => obj.email === data.email);

    if (checkEmail) {
      toast.error("Email Already Exist...")
      setIsEmail(true);
      return
    }

    const updatedUsers = [...authUser, data];

    setAuthUser(updatedUsers);
    localStorage.setItem('register', JSON.stringify(updatedUsers));
    toast.success("User Create successfully");

    setTimeout(() => {
      navigate('/login')
    }, 1500);
    reset();


  };

  return (
    <section className="min-h-screen bg-[#0B0B0B] text-white flex flex-col gap-5 items-center justify-center px-4 py-10">
      <div className=" flex items-center gap-3 " >
        <div className="w-10 h-10 rounded-3xl bg-lime-400 flex items-center justify-center">
          <Zap className="text-black" size={28} />
        </div>
        <div className=" text-3xl font-semibold " >Sky<span className=" text-lime-400 " >Mart</span></div>
      </div>

      <form onSubmit={handleSubmit(formHandle)} className="w-full max-w-md rounded-4xl border border-zinc-800 bg-[#111111]/95 shadow-2xl p-8 py-4 ">
        <div className=" mb-3 text-start ">
          <h1 className="text-xl my-1  font-bold">Create account</h1>
          <p className="text-zinc-500  text-sm sm:text-base">
            Join SkyMart and start shopping
          </p>

        </div>

        {isEmail && <p className=" text-center bg-[#77363649] rounded-md text-red-500 text-lg my-2 py-2 " >Email Already Exist</p>}

        <div className="space-y-3">


          <div>
            <div className="relative">
              <User size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                {...register('name', {
                  required: {
                    value: true,
                    message: "Name is required"
                  },
                  maxLength: {
                    value: 30,
                    message: "Name must not exceed 30 characters"
                  },
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters"
                  }
                })}
                type="text"
                placeholder="Full name"
                className="w-full rounded-lg border border-zinc-700 bg-[#181818] px-14 py-3 text-lg text-white placeholder:text-zinc-500 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-500/20"
              />

            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>


          <div>

            <div className="relative ">
              <Mail size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />
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
                className="w-full rounded-lg border border-zinc-700 bg-[#181818] px-14 py-3 text-lg text-white placeholder:text-zinc-500 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-500/20"
              />

            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>


            <div className="relative">
              <Lock size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />
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
                placeholder="Password (min 6 chars)"
                className="w-full rounded-lg border border-zinc-700 bg-[#181818] px-14 py-3 text-lg text-white placeholder:text-zinc-500 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-500/20"
              />
              <Eye size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer" />

            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>


            <div className="relative">
              <Lock size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="password"
                {...register('confirmPassword', {
                  required: {
                    value: true,
                    message: "Password is required"
                  },
                  maxLength: {
                    value: 8,
                    message: "Password must not exceed 8 characters"
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  },
                  validate: (value) => value === password || "Passwords do not match"
                })}
                placeholder="Confirm password"
                className="w-full rounded-lg border border-zinc-700 bg-[#181818] px-14 py-3 text-lg text-white placeholder:text-zinc-500 outline-none focus:border-lime-400 focus:ring-2 focus:ring-lime-500/20"
              />

            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <button className="mt-4 w-full rounded-lg cursor-pointer bg-lime-400 py-4 text-lg font-semibold text-black transition hover:bg-lime-300 flex items-center justify-center gap-3">
          Create Account
          <ArrowRight size={20} />
        </button>

        <p className="mt-3 text-center text-zinc-500">
          Already have an account?{' '}
          <a href="/login" className="text-lime-400 font-semibold hover:text-lime-300">
            Sign in
          </a>
        </p>
      </form>

      <ToastContainer />
    </section>
  );
};

export default Register;
