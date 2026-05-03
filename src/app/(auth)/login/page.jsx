"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormFunction = async (data) => {
    setIsLoading(true);
    try {
      const { email, password } = data;
      const { data: res, error } = await authClient.signIn.email({
        email: email,
        password: password,
        callbackURL: "/",
      });
      if (error) {
        alert(`${error.message}`);
      }
      if (res) {
        alert("Successfully logged in");
      }
    } catch (err) {
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      alert("Google login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Sign in to your account to continue</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit(handleFormFunction)} className="p-8">
            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition duration-200 mb-4"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 disabled:bg-slate-100 text-slate-700 font-semibold py-3 rounded-lg transition duration-200"
            >
              <FcGoogle />
              <p> Continue with Google</p>
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="bg-slate-50 px-8 py-4 text-center border-t border-slate-200">
            <p className="text-slate-600">
              Dont have an account?
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-700 font-semibold ml-2 transition"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
