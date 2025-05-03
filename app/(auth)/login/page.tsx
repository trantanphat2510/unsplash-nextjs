"use client";

import LoginForm from "@/components/auth/login-form";

export const dynamic = "force-static";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12">
      <LoginForm />
    </div>
  );
}
