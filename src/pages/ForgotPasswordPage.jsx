

import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    try {
      // 🔥 CALL OTP API
      const res = await api.post("/auth/forgot-password", { email });

      setMsg(res.data.message || "OTP sent to email");

      // 🔥 Save email (needed for next step)
      localStorage.setItem("resetEmail", email);

      // 🔥 Redirect to OTP page after 1.5 sec
      setTimeout(() => {
        navigate("/reset-password/:token");
      }, 1500);

    } catch (err) {
      setError(err?.response?.data?.message || "Request failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4">
      <div className="bg-[#1a1a1a] w-full max-w-md rounded-2xl border border-white/10 p-8">

        <p className="text-[#f5c518] text-[10px] tracking-[0.3em] mb-2">
          THE SEREXA
        </p>

        <h2 className="text-3xl font-black text-white mb-2">
          FORGOT PASSWORD
        </h2>

        {/* 🔥 TEXT CHANGE */}
        <p className="text-white/30 text-sm mb-8">
          Enter your email to receive OTP
        </p>

        {msg && (
          <p className="bg-green-500/10 text-green-400 text-sm rounded-xl px-4 py-3 mb-4 border border-green-500/20">
            {msg}
          </p>
        )}

        {error && (
          <p className="bg-red-500/10 text-red-400 text-sm rounded-xl px-4 py-3 mb-4 border border-red-500/20">
            {error}
          </p>
        )}

        <form onSubmit={onSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f5c518]/50 placeholder-white/20"
            required
          />

          {/* 🔥 BUTTON TEXT CHANGE */}
          <button
            type="submit"
            className="bg-[#f5c518] text-black py-3 rounded-xl font-black tracking-widest text-sm hover:bg-[#e6b800] transition-colors"
          >
            SEND OTP
          </button>

        </form>

        <p className="text-center text-white/30 text-sm mt-6">
          Remember password?{" "}
          <Link to="/login" className="text-[#f5c518] hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}