

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const heroImg =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, form);
      login(res.data);

      if (res.data.role === "admin") navigate("/admin");
      else navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0F14] text-white">
      <div className="min-h-screen grid grid-rows-[auto_1fr]">

        {/* ── BODY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">

          {/* ── LEFT SIDE ── */}
          <aside className="hidden lg:flex flex-col min-h-0">
            <div className="relative min-h-[65vh] bg-cover bg-center flex flex-col justify-end"
              style={{ backgroundImage: `url(${heroImg})` }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />

              {/* content — pushed to bottom */}
              <div className="relative z-10 px-12 pb-10">

                <p className="text-[11px] tracking-[0.40em] text-white/55">
                  ESTABLISHED IN COLOMBO
                </p>

                <h1 className="mt-4 text-[84px] font-extrabold leading-[0.92] tracking-tight">
                  THE
                  <br />
                  SEREXA
                </h1>

                <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                  Experience the finest events, cultural galas, and exclusive
                  retreats in Sri Lanka. Your journey into the extraordinary
                  begins with a single step.
                </p>

                {/* ✅ Yellow line at end of image */}
                <div className="mt-8 h-[3px] w-28 bg-[#F5D000]" />
              </div>
            </div>

            {/* black bottom */}
            <div className="flex-1 bg-[#0B0F14]" />
          </aside>

          {/* ── RIGHT SIDE ── */}
          <main className="flex min-h-0 items-center justify-center bg-[#0F141B]/55 px-6 py-12">
            <div className="w-full max-w-md">

              <h2 className="text-[38px] font-light tracking-tight text-white/90">
                Welcome Back
              </h2>
              <p className="mt-3 text-sm text-white/50 leading-6">
                Access the most exclusive experiences in the island.
              </p>

              {/* ERROR */}
              <div className="mt-6 min-h-[20px]">
                {error && (
                  <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200 rounded-lg">
                    {error}
                  </div>
                )}
              </div>

              <form onSubmit={onSubmit} className="mt-10 space-y-10">

                {/* EMAIL */}
                <label className="block">
                  <span className="text-[11px] tracking-[0.28em] text-white/45">
                    EMAIL ID
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="name@domain.com"
                    required
                    className="mt-4 w-full bg-transparent pb-3 text-[15px] text-white/80
                               placeholder:text-white/18 outline-none
                               border-b border-white/10 focus:border-[#F5D000]/80 transition"
                  />
                </label>

                {/* PASSWORD */}

                <label className="block">
                  <span className="text-[11px] tracking-[0.28em] text-white/45">
                    PASSWORD
                  </span>
                  <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    placeholder="••••••••"
                    required
                    className="mt-4 w-full bg-transparent pb-3 text-[15px] text-white/80
               placeholder:text-white/18 outline-none
               border-b border-white/10 focus:border-[#F5D000]/80 transition"
                  />
                </label>

                {/* 🔥 FORGOT PASSWORD LINK */}
                <div className="flex justify-end -mt-6">
                  <Link
                    to="/forgot-password"
                    className="text-xs text-white/40 hover:text-[#F5D000] transition"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* SIGN IN BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-[#F5D000] py-4 text-sm font-semibold text-black
                             shadow-[0_18px_45px_rgba(245,208,0,0.18)]
                             hover:brightness-95 active:brightness-90 transition disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Join Exclusive"}
                </button>
              </form>

              {/* DIVIDER */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[10px] tracking-[0.35em] text-white/30">
                  OR CONTINUE WITH
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* SOCIAL BUTTONS */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {/* Google */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/10
                             bg-transparent py-3.5 text-sm text-white/70 hover:bg-white/5 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>

                {/* Apple */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/10
                             bg-transparent py-3.5 text-sm text-white/70 hover:bg-white/5 transition"
                >
                  <svg width="16" height="18" viewBox="0 0 14 17" fill="currentColor">
                    <path d="M13.2 12.5c-.3.7-.6 1.3-1 1.9-.6.8-1.1 1.3-1.6 1.6-.6.4-1.3.6-2 .6-.5 0-1.1-.1-1.7-.4-.6-.3-1.2-.4-1.7-.4-.5 0-1.1.1-1.7.4C3.2 16.2 2.6 16.3 2.1 16.3c-.7 0-1.3-.2-1.9-.6C-.4 15.3-.9 14.8-1.4 14c-.6-.8-1-1.7-1.3-2.7-.3-1-.5-2-.5-3 0-1.1.2-2.1.7-3 .4-.8 1-1.4 1.7-1.9.7-.5 1.5-.7 2.3-.7.6 0 1.3.2 2.1.5.8.3 1.3.5 1.5.5.2 0 .7-.2 1.7-.6.9-.4 1.7-.5 2.3-.5 1.7 0 3 .8 3.9 2.4-1.6.9-2.3 2.2-2.3 3.9 0 1.3.5 2.4 1.4 3.2.4.4.9.7 1.4.9l-1.3 1.5ZM9.8.4c0 1-.4 2-1.1 2.8-.8 1-1.8 1.6-2.9 1.5 0-.1 0-.2 0-.4 0-1 .4-2 1.2-2.8.4-.4.8-.8 1.4-1 .6-.3 1.1-.4 1.4-.4 0 .1 0 .2 0 .3Z" />
                  </svg>
                  Apple
                </button>
              </div>

              {/* SIGNUP LINK */}
              <p className="mt-10 text-sm text-white/45">
                New to The Serexa?{" "}
                <Link to="/register" className="text-[#F5D000] hover:underline">
                  Request Membership
                </Link>
              </p>

            </div>
          </main>

        </div>
      </div>
    </div>
  );
}