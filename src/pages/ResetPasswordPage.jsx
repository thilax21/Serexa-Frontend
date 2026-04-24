
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    const email = localStorage.getItem("resetEmail");

    if (!email) {
      setError("Session expired. Please try again.");
      return;
    }

    setMsg("");
    setError("");
    setLoading(true);

    try {
      const res = await api.put("/auth/reset-password", {
        email,
        otp,
        password,
      });

      setMsg(res.data.message || "Password reset success");

      // clear stored email
      localStorage.removeItem("resetEmail");

      setTimeout(() => navigate("/login"), 2500);
    } catch (err) {
      setError(err?.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4">

      <div className="bg-[#1a1a1a] w-full max-w-md rounded-2xl border border-white/10 p-8">

        <p className="text-[#f5c518] text-[10px] tracking-[0.3em] mb-2">
          THE SEREXA
        </p>

        <h2 className="text-3xl font-black text-white mb-2">
          RESET PASSWORD
        </h2>

        <p className="text-white/30 text-sm mb-8">
          Enter OTP and set new password
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

          {/* 🔥 NEW OTP INPUT */}
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f5c518]/50 placeholder-white/20"
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f5c518]/50 placeholder-white/20"
            required
            minLength={6}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f5c518]/50 placeholder-white/20"
            required
            minLength={6}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#f5c518] text-black py-3 rounded-xl font-black tracking-widest text-sm hover:bg-[#e6b800] transition-colors disabled:opacity-50"
          >
            {loading ? "RESETTING..." : "RESET PASSWORD"}
          </button>

        </form>

        <p className="text-center text-white/30 text-sm mt-6">
          <Link to="/login" className="text-[#f5c518] hover:underline">
            ← BACK TO LOGIN
          </Link>
        </p>

      </div>
    </div>
  );
}