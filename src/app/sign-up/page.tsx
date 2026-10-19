
"use client";

import Link from "next/link";
import { useState } from "react";
import { FrontendLayout } from "@/components/layouts/FrontendLayout";
import Button from "@/components/ui/Button";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Connect your registration API here.
  }

  return (
    <FrontendLayout>
      <main className="min-h-[calc(100vh-80px)] bg-white px-4 py-14 text-[#202631] sm:py-16">
        <div className="mx-auto w-full max-w-[398px]">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight sm:text-[28px]">
              Create Account
            </h1>

            <p className="mt-3 text-[15px] text-gray-500">
              Join us and start shopping your favorite styles.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-[13px] font-medium"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-[45px] w-full rounded-lg border border-gray-200 bg-white px-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#202631] focus:ring-1 focus:ring-[#202631]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[13px] font-medium"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="john@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[45px] w-full rounded-lg border border-gray-200 bg-white px-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#202631] focus:ring-1 focus:ring-[#202631]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[13px] font-medium"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a Password"
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-[45px] w-full rounded-lg border border-gray-200 bg-white px-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#202631] focus:ring-1 focus:ring-[#202631]"
              />
            </div>

            <Button
              type="submit"
              fullWidth
              paddingX="px-4"
              className="h-[45px] rounded-lg bg-[#202631] text-sm font-semibold text-white hover:bg-[#303947]"
            >
              Create Account
            </Button>

            <button
              type="button"
              onClick={() => {
                // Connect Google OAuth here.
              }}
              className="flex h-[45px] w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white text-sm font-medium transition hover:bg-gray-50"
            >
              <svg
                viewBox="0 0 48 48"
                className="h-[17px] w-[17px]"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-1.9 4.6-4.1 6v5h6.6c3.9-3.6 6.1-8.8 6.1-14.7Z"
                />
                <path
                  fill="#34A853"
                  d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5c-1.8 1.2-4 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.1C9.2 39.5 16 44 24 44Z"
                />
                <path
                  fill="#FBBC05"
                  d="M12.6 27.8a12 12 0 0 1 0-7.6v-5.1H5.8a20 20 0 0 0 0 17.8l6.8-5.1Z"
                />
                <path
                  fill="#EA4335"
                  d="M24 11.8c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.8 29.5 4 24 4 16 4 9.2 8.5 5.8 15.1l6.8 5.1c1.6-4.8 6.1-8.4 11.4-8.4Z"
                />
              </svg>

              Continue with Google
            </button>

            <p className="pt-2 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-semibold text-gray-600 hover:text-[#202631] hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </main>
    </FrontendLayout>
  );
}
