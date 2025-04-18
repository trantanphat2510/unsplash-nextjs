"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Facebook } from "lucide-react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt with:", { email, password })
  }

  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
      <p className="text-center text-gray-600 mb-6">Welcome back.</p>

      <button className="w-full flex items-center justify-center gap-2 bg-[#1877f2] text-white py-3 rounded-md font-medium mb-6">
        <Facebook className="h-5 w-5" />
        Login with Facebook
      </button>

      <div className="flex items-center justify-center mb-6">
        <div className="h-px bg-gray-200 flex-1"></div>
        <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Link href="/forgot-password" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot your password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 transition-colors"
        >
          Login
        </button>
      </form>

      <div className="mt-8 border border-gray-200 rounded-md p-6 relative">
        <div className="flex justify-between items-center">
          <p className="text-sm">Don&apos;t have an account?</p>
          <Link href="/join" className="text-sm font-medium text-black hover:underline">
            Join
          </Link>
        </div>

        {/* Decorative arrows */}
        <svg
          className="absolute -top-4 right-12 text-gray-300 w-16 h-16 rotate-[210deg]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 80 C 40 60, 60 60, 80 20" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M70 20 L 80 20 L 80 30" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>

        <svg
          className="absolute -bottom-4 left-12 text-gray-300 w-16 h-16 rotate-[30deg]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 80 C 40 60, 60 60, 80 20" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M70 20 L 80 20 L 80 30" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  )
}
