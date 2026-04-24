
// import { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import API from '../api/axios';

// // ✅ fallback image (no error ever)
// const heroImg =
//   "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

// export default function RegisterPage() {
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/auth/signup', form);
//       setSuccess('Registration successful! Redirecting...');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#0B0F14] text-white">
//       <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

//         {/* LEFT SIDE */}
//         <aside className="hidden lg:flex flex-col">
//           <div
//             className="relative h-[68vh] bg-cover bg-center"
//             style={{ backgroundImage: `url(${heroImg})` }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/90" />

//             <div className="relative h-full px-12 pt-12">
//               <p className="text-[11px] tracking-[0.40em] text-white/55">
//                 THE SEREXA MEMBERSHIP
//               </p>

//               <h1 className="mt-8 text-[84px] font-extrabold leading-[0.92] tracking-tight">
//                 JOIN <br /> US
//               </h1>

//               <p className="mt-6 max-w-md text-sm text-white/60">
//                 Become part of an exclusive community of curated events and experiences.
//               </p>
//             </div>

//             <div className="absolute bottom-10 left-12">
//               <div className="h-[3px] w-28 bg-[#F5D000]" />
//             </div>
//           </div>

//           <div className="flex-1 bg-[#0B0F14]" />
//         </aside>

//         {/* RIGHT SIDE */}
//         <main className="flex items-center justify-center px-6 py-12 bg-[#0F141B]/55">
//           <div className="w-full max-w-md">

//             <h2 className="text-[34px] font-semibold">Create Account</h2>
//             <p className="mt-2 text-sm text-white/55">
//               Join The Serexa experience
//             </p>

//             {/* ERROR / SUCCESS */}
//             <div className="mt-6 min-h-[44px]">
//               {error && (
//                 <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
//                   {error}
//                 </div>
//               )}

//               {success && (
//                 <div className="border border-[#F5D000]/30 bg-[#F5D000]/10 px-4 py-3 text-sm text-[#F5D000]">
//                   {success}
//                 </div>
//               )}
//             </div>

//             <form onSubmit={handleSubmit} className="mt-10 space-y-8">

//               {/* NAME */}
//               <label className="block">
//                 <span className="text-[11px] tracking-[0.28em] text-white/45">FULL NAME</span>
//                 <input
//                   value={form.name}
//                   onChange={e => setForm({ ...form, name: e.target.value })}
//                   placeholder="Enter your name"
//                   className="mt-4 w-full bg-transparent pb-3 text-sm text-white/90
//                              placeholder:text-white/25 outline-none
//                              border-b border-white/10 focus:border-[#F5D000]"
//                   required
//                 />
//               </label>

//               {/* EMAIL */}
//               <label className="block">
//                 <span className="text-[11px] tracking-[0.28em] text-white/45">EMAIL</span>
//                 <input
//                   type="email"
//                   value={form.email}
//                   onChange={e => setForm({ ...form, email: e.target.value })}
//                   placeholder="name@domain.com"
//                   className="mt-4 w-full bg-transparent pb-3 text-sm text-white/90
//                              placeholder:text-white/25 outline-none
//                              border-b border-white/10 focus:border-[#F5D000]"
//                   required
//                 />
//               </label>

//               {/* PASSWORD */}
//               <label className="block">
//                 <span className="text-[11px] tracking-[0.28em] text-white/45">PASSWORD</span>
//                 <input
//                   type="password"
//                   value={form.password}
//                   onChange={e => setForm({ ...form, password: e.target.value })}
//                   placeholder="Create password"
//                   className="mt-4 w-full bg-transparent pb-3 text-sm text-white/90
//                              placeholder:text-white/25 outline-none
//                              border-b border-white/10 focus:border-[#F5D000]"
//                   required
//                 />
//               </label>

//               {/* BUTTON */}
//               <button
//                 type="submit"
//                 className="w-full rounded-xl bg-[#F5D000] py-4 text-sm font-semibold text-black
//                            hover:brightness-95 transition"
//               >
//                 REGISTER
//               </button>

//             </form>

//             <p className="text-center text-sm text-white/50 mt-6">
//               Already have account?{" "}
//               <Link to="/login" className="text-[#F5D000] hover:underline">
//                 Login
//               </Link>
//             </p>

//             <p className="text-center mt-3">
//               <Link to="/" className="text-white/20 text-xs hover:text-white/40 tracking-widest">
//                 ← BACK TO HOME
//               </Link>
//             </p>

//           </div>
//         </main>

//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../api/axios";

// const heroImg =
//   "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80";

// export default function MembershipRegisterPage() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     nic: "",
//     mobile: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       await API.post("/membership/request", form); // <-- update to your endpoint
//       setSuccess("Request submitted. Redirecting…");
//       setTimeout(() => navigate("/"), 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || "Request failed");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#0B0F14] text-white">
//       {/* FULL SCREEN LAYOUT: header + body */}
//       <div className="min-h-screen grid grid-rows-[auto_1fr]">
//         {/* TOP NAV (full width) */}
//         <header className="w-full flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/5 bg-[#0B0F14]/60 backdrop-blur">
//           <div className="text-[#F5D000] font-semibold tracking-wide">THE CURATOR</div>

//           <nav className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.35em] text-white/40">
//             <Link className="hover:text-white/70" to="/discover">DISCOVER</Link>
//             <Link className="hover:text-white/70" to="/archive">ARCHIVE</Link>
//           </nav>

//           <div className="flex items-center gap-6 text-[#F5D000]">
//             <button className="opacity-90 hover:opacity-100" aria-label="Notifications">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                 />
//                 <path
//                   d="M18.4 9.6a6.4 6.4 0 1 0-12.8 0c0 7.2-2.4 7.2-2.4 7.2h17.6s-2.4 0-2.4-7.2Z"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                 />
//               </svg>
//             </button>

//             <button className="opacity-90 hover:opacity-100" aria-label="Account">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M12 12a4.6 4.6 0 1 0-4.6-4.6A4.6 4.6 0 0 0 12 12Z"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                 />
//                 <path
//                   d="M20 21.2a8 8 0 0 0-16 0"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </header>

//         {/* BODY (full height) */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
//           {/* LEFT HERO (full height) */}
//           <aside className="relative hidden lg:block min-h-0">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${heroImg})` }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/55 to-[#0B0F14]" />
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.85))]" />

//             <div className="absolute bottom-10 left-10 right-10">
//               <p className="text-[11px] tracking-[0.40em] text-[#F5D000]/80">
//                 THE GOLDEN CIRCLE
//               </p>

//               <h2 className="mt-4 text-[76px] leading-[0.92] tracking-tight font-light">
//                 Ceylonese<span className="opacity-80">.</span>
//               </h2>

//               <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
//                 Access is reserved for those who seek the extraordinary. Our curated
//                 experiences are the heartbeat of the island’s elite social calendar.
//               </p>

//               <p className="mt-8 text-[11px] tracking-[0.35em] text-white/35">
//                 CEYLON MIDNIGHT EDITION
//               </p>
//             </div>

//             <div className="absolute bottom-10 right-10 flex items-center gap-3">
//               <span className="h-2 w-2 rounded-full bg-[#F5D000]" />
//               <span className="h-2 w-2 rounded-full bg-white/20" />
//               <span className="h-2 w-2 rounded-full bg-white/20" />
//             </div>
//           </aside>

//           {/* RIGHT FORM (full height, VERTICALLY CENTERED) */}
//           <main className="flex items-center justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-20 min-h-0">
//             <div className="w-full max-w-xl">
//               <h1 className="text-[44px] font-light tracking-tight text-white/90">
//                 Request Membership
//               </h1>
//               <p className="mt-3 text-sm text-white/55">
//                 Complete the formal application for concierge review.
//               </p>

//               <div className="mt-8 min-h-[44px]">
//                 {error && (
//                   <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
//                     {error}
//                   </div>
//                 )}
//                 {success && (
//                   <div className="rounded-lg border border-[#F5D000]/30 bg-[#F5D000]/10 px-4 py-3 text-sm text-[#F5D000]">
//                     {success}
//                   </div>
//                 )}
//               </div>

//               <form onSubmit={handleSubmit} className="mt-10 space-y-10">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                   <label className="block">
//                     <span className="text-[11px] tracking-[0.32em] text-white/45">
//                       FIRST NAME
//                     </span>
//                     <input
//                       value={form.firstName}
//                       onChange={onChange("firstName")}
//                       placeholder="e.g. Arjuna"
//                       className="mt-5 w-full bg-transparent pb-3 text-[15px] text-white/80
//                                  placeholder:text-white/18 outline-none
//                                  border-b border-white/10 focus:border-[#F5D000]"
//                       required
//                     />
//                   </label>

//                   <label className="block">
//                     <span className="text-[11px] tracking-[0.32em] text-white/45">
//                       LAST NAME
//                     </span>
//                     <input
//                       value={form.lastName}
//                       onChange={onChange("lastName")}
//                       placeholder="e.g. Ratnayake"
//                       className="mt-5 w-full bg-transparent pb-3 text-[15px] text-white/80
//                                  placeholder:text-white/18 outline-none
//                                  border-b border-white/10 focus:border-[#F5D000]"
//                       required
//                     />
//                   </label>
//                 </div>

//                 <label className="block">
//                   <span className="text-[11px] tracking-[0.32em] text-white/45">
//                     NIC NUMBER
//                   </span>
//                   <input
//                     value={form.nic}
//                     onChange={onChange("nic")}
//                     placeholder="9xxxxxxxxV"
//                     className="mt-5 w-full bg-transparent pb-3 text-[15px] text-white/80
//                                placeholder:text-white/18 outline-none
//                                border-b border-white/10 focus:border-[#F5D000]"
//                     required
//                   />
//                 </label>

//                 <label className="block">
//                   <span className="text-[11px] tracking-[0.32em] text-white/45">
//                     MOBILE NUMBER
//                   </span>
//                   <div className="mt-5 flex items-end gap-4 border-b border-white/10 focus-within:border-[#F5D000] pb-3">
//                     <span className="text-white/65 text-[15px] select-none">+94</span>
//                     <input
//                       value={form.mobile}
//                       onChange={onChange("mobile")}
//                       placeholder="7x xxx xxxx"
//                       className="w-full bg-transparent text-[15px] text-white/80
//                                  placeholder:text-white/18 outline-none"
//                       required
//                     />
//                   </div>
//                 </label>

//                 <p className="pt-2 text-xs leading-6 text-white/35 max-w-lg italic">
//                   By submitting this application, you acknowledge that membership is
//                   subject to invitation and adherence to The Curator’s private club
//                   protocols.
//                 </p>

//                 <div className="pt-2 flex items-center justify-between">
//                   <button
//                     type="button"
//                     onClick={() => navigate(-1)}
//                     className="text-[12px] tracking-[0.35em] text-white/35 hover:text-white/55"
//                   >
//                     CANCEL
//                   </button>

//                   <button
//                     type="submit"
//                     className="rounded-full bg-[#F5D000] px-14 py-4 text-[12px] font-semibold
//                                tracking-[0.22em] text-black hover:brightness-95 transition"
//                   >
//                     CONTINUE
//                   </button>
//                 </div>

//                 <div className="pt-6 text-xs text-white/25">
//                   <Link to="/" className="hover:text-white/40 tracking-[0.28em]">
//                     ← BACK TO HOME
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../api/axios";

// const heroImg =
//   "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80";

// export default function MembershipRegisterPage() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",

//     nic: "",
//     mobile: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const onChange = (key) => (e) =>
//     setForm((p) => ({ ...p, [key]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       await API.post("/membership/request", form);
//       setSuccess("Request submitted. Redirecting…");
//       setTimeout(() => navigate("/"), 1500);
//     } catch (err) {
//       setError(err.response?.data?.message || "Request failed");
//     }
//   };

//   return (
//     <div className="h-screen w-screen overflow-hidden bg-[#0B0F14] text-white">
//       <div className="h-screen w-screen grid grid-rows-[56px_1fr] overflow-hidden">

//         {/* ── TOP NAV ── */}
//         <header className="w-full flex items-center justify-between px-6 md:px-10 border-b border-white/5 bg-[#0B0F14]/60 backdrop-blur">
//           <div className="text-[#F5D000] font-semibold tracking-wide text-sm">
//             THE SEREXA
//           </div>

//           <nav className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.35em] text-white/40">
//             <Link className="hover:text-white/70" to="/discover">
//               DISCOVER
//             </Link>
//             <Link className="hover:text-white/70" to="/archive">
//               ARCHIVE
//             </Link>
//           </nav>

//           <div className="flex items-center gap-6 text-[#F5D000]">
//             <button className="opacity-90 hover:opacity-100" aria-label="Notifications">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                 />
//                 <path
//                   d="M18.4 9.6a6.4 6.4 0 1 0-12.8 0c0 7.2-2.4 7.2-2.4 7.2h17.6s-2.4 0-2.4-7.2Z"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                 />
//               </svg>
//             </button>
//             <button className="opacity-90 hover:opacity-100" aria-label="Account">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M12 12a4.6 4.6 0 1 0-4.6-4.6A4.6 4.6 0 0 0 12 12Z"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                 />
//                 <path
//                   d="M20 21.2a8 8 0 0 0-16 0"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </header>

//         {/* ── BODY ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 overflow-hidden">

//           {/* LEFT HERO */}
//           <aside className="relative hidden lg:block min-h-0 overflow-hidden">
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{ backgroundImage: `url(${heroImg})` }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/55 to-[#0B0F14]" />
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.85))]" />

//             <div className="absolute bottom-10 left-10 right-10">
//               <p className="text-[11px] tracking-[0.40em] text-[#F5D000]/80">
//                 THE GOLDEN CIRCLE
//               </p>
//               <h2 className="mt-4 text-[76px] leading-[0.92] tracking-tight font-light">
//                 Ceylonese<span className="opacity-80">.</span>
//               </h2>
//               <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
//                 Access is reserved for those who seek the extraordinary. Our curated
//                 experiences are the heartbeat of the island's elite social calendar.
//               </p>
//               <p className="mt-8 text-[11px] tracking-[0.35em] text-white/35">
//                 CEYLON MIDNIGHT EDITION
//               </p>
//             </div>

//             <div className="absolute bottom-10 right-10 flex items-center gap-3">
//               <span className="h-2 w-2 rounded-full bg-[#F5D000]" />
//               <span className="h-2 w-2 rounded-full bg-white/20" />
//               <span className="h-2 w-2 rounded-full bg-white/20" />
//             </div>
//           </aside>

//           {/* RIGHT FORM — NO SCROLL */}
//           <main className="flex items-center justify-center px-6 sm:px-10 lg:px-14 min-h-0 overflow-hidden">
//             <div className="w-full max-w-xl overflow-hidden">

//               <h1 className="text-[38px] font-light tracking-tight text-white/90">
//                 Request Membership
//               </h1>
//               <p className="mt-2 text-sm text-white/55">
//                 Complete the formal application for concierge review.
//               </p>

//               {/* ERROR / SUCCESS */}
//               {error && (
//                 <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
//                   {error}
//                 </div>
//               )}
//               {success && (
//                 <div className="mt-4 rounded-lg border border-[#F5D000]/30 bg-[#F5D000]/10 px-4 py-2 text-sm text-[#F5D000]">
//                   {success}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="mt-8 space-y-6">

//                 {/* FIRST / LAST */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <label className="block">
//                     <span className="text-[10px] tracking-[0.32em] text-white/45">
//                       FIRST NAME
//                     </span>
//                     <input
//                       value={form.firstName}
//                       onChange={onChange("firstName")}
//                       placeholder="e.g. Arjuna"
//                       className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
//                                  placeholder:text-white/18 outline-none
//                                  border-b border-white/10 focus:border-[#F5D000]"
//                       required
//                     />
//                   </label>
//                   <label className="block">
//                     <span className="text-[10px] tracking-[0.32em] text-white/45">
//                       LAST NAME
//                     </span>
//                     <input
//                       value={form.lastName}
//                       onChange={onChange("lastName")}
//                       placeholder="e.g. Ratnayake"
//                       className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
//                                  placeholder:text-white/18 outline-none
//                                  border-b border-white/10 focus:border-[#F5D000]"
//                       required
//                     />
//                   </label>
//                 </div>



//                 {/* NIC */}
//                 <label className="block">
//                   <span className="text-[10px] tracking-[0.32em] text-white/45">
//                     NIC NUMBER
//                   </span>
//                   <input
//                     value={form.nic}
//                     onChange={onChange("nic")}
//                     placeholder="9xxxxxxxxV"
//                     className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
//                                placeholder:text-white/18 outline-none
//                                border-b border-white/10 focus:border-[#F5D000]"
//                     required
//                   />
//                 </label>

//                 {/* MOBILE */}
//                 <label className="block">
//                   <span className="text-[10px] tracking-[0.32em] text-white/45">
//                     MOBILE NUMBER
//                   </span>
//                   <div className="mt-3 flex items-end gap-4 border-b border-white/10 focus-within:border-[#F5D000] pb-2">
//                     <span className="text-white/65 text-[14px] select-none">+94</span>
//                     <input
//                       value={form.mobile}
//                       onChange={onChange("mobile")}
//                       placeholder="7x xxx xxxx"
//                       className="w-full bg-transparent text-[14px] text-white/80
//                                  placeholder:text-white/18 outline-none"
//                       required
//                     />
//                   </div>
//                 </label>

//                 {/* DISCLAIMER */}
//                 <p className="text-[11px] leading-5 text-white/30 italic">
//                   By submitting this application, you acknowledge that membership is
//                   subject to invitation and adherence to The Curator's private club
//                   protocols.
//                 </p>

//                 {/* ACTIONS */}
//                 <div className="flex items-center justify-between pt-1">
//                   <button
//                     type="button"
//                     onClick={() => navigate(-1)}
//                     className="text-[11px] tracking-[0.35em] text-white/35 hover:text-white/55"
//                   >
//                     CANCEL
//                   </button>

//                   <button
//                     type="submit"
//                     className="rounded-full bg-[#F5D000] px-14 py-3.5 text-[11px] font-semibold
//                                tracking-[0.22em] text-black hover:brightness-95 transition"
//                   >
//                     CONTINUE
//                   </button>
//                 </div>

//                 <div className="text-center text-[11px] text-white/20 tracking-[0.28em]">
//                   <Link to="/" className="hover:text-white/40">
//                     ← BACK TO HOME
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </main>

//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

const heroImg =
  "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",  
    password:"",      // ✅ added
    nic: "",
    mobileNumber: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await API.post("auth/signup", form);
      setSuccess("Request submitted. Redirecting…");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Request failed");
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0B0F14] text-white">
      <div className="h-screen w-screen grid grid-rows-[56px_1fr] overflow-hidden">

        {/* ── TOP NAV ── */}
        <header className="w-full flex items-center justify-between px-6 md:px-10 border-b border-white/5 bg-[#0B0F14]/60 backdrop-blur">
          <div className="text-[#F5D000] font-semibold tracking-wide text-sm">
            THE SEREXA
          </div>

          <nav className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.35em] text-white/40">
            <Link className="hover:text-white/70" to="/discover">
              DISCOVER
            </Link>
            <Link className="hover:text-white/70" to="/archive">
              ARCHIVE
            </Link>
          </nav>

          <div className="flex items-center gap-6 text-[#F5D000]">
            <button className="opacity-90 hover:opacity-100" aria-label="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z" stroke="currentColor" strokeWidth="1.6" />
                <path d="M18.4 9.6a6.4 6.4 0 1 0-12.8 0c0 7.2-2.4 7.2-2.4 7.2h17.6s-2.4 0-2.4-7.2Z" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            <button className="opacity-90 hover:opacity-100" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 12a4.6 4.6 0 1 0-4.6-4.6A4.6 4.6 0 0 0 12 12Z" stroke="currentColor" strokeWidth="1.6" />
                <path d="M20 21.2a8 8 0 0 0-16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </header>

        {/* ── BODY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 overflow-hidden">

          {/* LEFT HERO */}
          <aside className="relative hidden lg:block min-h-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/55 to-[#0B0F14]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.85))]" />

            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-[11px] tracking-[0.40em] text-[#F5D000]/80">
                THE GOLDEN CIRCLE
              </p>
              <h2 className="mt-4 text-[76px] leading-[0.92] tracking-tight font-light">
                Ceylonese<span className="opacity-80">.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                Access is reserved for those who seek the extraordinary. Our curated
                experiences are the heartbeat of the island's elite social calendar.
              </p>
              <p className="mt-8 text-[11px] tracking-[0.35em] text-white/35">
                CEYLON MIDNIGHT EDITION
              </p>
            </div>

            <div className="absolute bottom-10 right-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#F5D000]" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
          </aside>

          {/* RIGHT FORM */}
          <main className="flex items-center justify-center px-6 sm:px-10 lg:px-14 min-h-0 overflow-hidden">
            <div className="w-full max-w-xl overflow-hidden">

              <h1 className="text-[38px] font-light tracking-tight text-white/90">
                Request Membership
              </h1>
              <p className="mt-2 text-sm text-white/55">
                Complete the formal application for concierge review.
              </p>

              {/* ERROR / SUCCESS */}
              {error && (
                <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
                  {error}
                </div>
              )}
              {success && (
                <div className="mt-4 rounded-lg border border-[#F5D000]/30 bg-[#F5D000]/10 px-4 py-2 text-sm text-[#F5D000]">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                {/* FIRST / LAST */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="block">
                    <span className="text-[10px] tracking-[0.32em] text-white/45">
                      FIRST NAME
                    </span>
                    <input
                      value={form.firstName}
                      onChange={onChange("firstName")}
                      placeholder="e.g. Arjuna"
                      className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
                                 placeholder:text-white/18 outline-none
                                 border-b border-white/10 focus:border-[#F5D000]"
                      required
                    />
                  </label>
                  <label className="block">
                    <span className="text-[10px] tracking-[0.32em] text-white/45">
                      LAST NAME
                    </span>
                    <input
                      value={form.lastName}
                      onChange={onChange("lastName")}
                      placeholder="e.g. Ratnayake"
                      className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
                                 placeholder:text-white/18 outline-none
                                 border-b border-white/10 focus:border-[#F5D000]"
                      required
                    />
                  </label>
                </div>

                {/* ✅ EMAIL */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.32em] text-white/45">
                    EMAIL
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="name@domain.com"
                    className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
                               placeholder:text-white/18 outline-none
                               border-b border-white/10 focus:border-[#F5D000]"
                    required
                  />
                </label>
                {/* PASSWORD */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.32em] text-white/45">
                    PASSWORD
                  </span>
                  <input
                    type="password"
                    value={form.password}
                    onChange={onChange("password")}
                    placeholder="••••••••"
                    className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
               placeholder:text-white/18 outline-none
               border-b border-white/10 focus:border-[#F5D000]"
                    required
                  />
                </label>
                {/* NIC */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.32em] text-white/45">
                    NIC NUMBER
                  </span>
                  <input
                    value={form.nic}
                    onChange={onChange("nic")}
                    placeholder="9xxxxxxxxV"
                    className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
                               placeholder:text-white/18 outline-none
                               border-b border-white/10 focus:border-[#F5D000]"
                    required
                  />
                </label>

                {/* MOBILE */}
                <label className="block">
                  <span className="text-[10px] tracking-[0.32em] text-white/45">
                    MOBILE NUMBER
                  </span>
                  <div className="mt-3 flex items-end gap-4 border-b border-white/10 focus-within:border-[#F5D000] pb-2">
                    <span className="text-white/65 text-[14px] select-none">+94</span>
                    <input
                      value={form.mobile}
                      onChange={onChange("mobileNumber")}
                      placeholder="7x xxx xxxx"
                      className="w-full bg-transparent text-[14px] text-white/80
                                 placeholder:text-white/18 outline-none"
                      required
                    />
                  </div>
                </label>

                {/* DISCLAIMER */}
                <p className="text-[11px] leading-5 text-white/30 italic">
                  By submitting this application, you acknowledge that membership is
                  subject to invitation and adherence to The Curator's private club
                  protocols.
                </p>

                {/* ACTIONS */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="text-[11px] tracking-[0.35em] text-white/35 hover:text-white/55"
                  >
                    CANCEL
                  </button>

                  <button
                    type="submit"
                    className="rounded-full bg-[#F5D000] px-14 py-3.5 text-[11px] font-semibold
                               tracking-[0.22em] text-black hover:brightness-95 transition"
                  >
                    CONTINUE
                  </button>
                </div>

                <div className="text-center text-[11px] text-white/20 tracking-[0.28em]">
                  <Link to="/" className="hover:text-white/40">
                    ← BACK TO HOME
                  </Link>
                </div>
              </form>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}