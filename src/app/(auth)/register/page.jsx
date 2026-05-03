"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegForm = async (data) => {
    const { name, Photo_Url, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: Photo_Url,
      callbackURL: "/",
    });

    if (error) {
      toast(`${error.message}`);
    }
    if (res) {
      toast("Successfully registered to Skillsphere");
      router.push("/login");
    }
  };

  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Join Us Today</h1>
          <p className="text-slate-400">
            Create your account to start learning
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit(handleRegForm)} className="p-8">
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.name.message || "Name is required"}
                </span>
              )}
            </div>

            {/* Photo URL Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Photo URL
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Enter your photo URL"
                {...register("Photo_Url", {
                  required: "Photo URL is required",
                })}
              />
              {errors.Photo_Url && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.Photo_Url.message || "Photo URL is required"}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.email.message || "Email is required"}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.password.message || "Password is required"}
                </span>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 mb-4"
            >
              Sign up
            </button>

            {/* Google Sign Up Button */}
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3 rounded-lg transition duration-200"
            >
              <FcGoogle />
              <p>Continue with Google</p>
            </button>
          </form>

          {/* Sign In Link */}
          <div className="bg-slate-50 px-8 py-4 text-center border-t border-slate-200">
            <p className="text-slate-600">
              Already have an account?
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-700 font-semibold ml-2 transition"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
