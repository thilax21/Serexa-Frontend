

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../api/axios";

// const heroImg =
//   "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80";

// export default function RegisterPage() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",  
//     password:"",      // ✅ added
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
//       await API.post("auth/signup", form);
//       setSuccess("Request submitted. Redirecting…");
//       login(res.data);
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
//                 <path d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z" stroke="currentColor" strokeWidth="1.6" />
//                 <path d="M18.4 9.6a6.4 6.4 0 1 0-12.8 0c0 7.2-2.4 7.2-2.4 7.2h17.6s-2.4 0-2.4-7.2Z" stroke="currentColor" strokeWidth="1.6" />
//               </svg>
//             </button>
//             <button className="opacity-90 hover:opacity-100" aria-label="Account">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                 <path d="M12 12a4.6 4.6 0 1 0-4.6-4.6A4.6 4.6 0 0 0 12 12Z" stroke="currentColor" strokeWidth="1.6" />
//                 <path d="M20 21.2a8 8 0 0 0-16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

//           {/* RIGHT FORM */}
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

//                 {/* ✅ EMAIL */}
//                 <label className="block">
//                   <span className="text-[10px] tracking-[0.32em] text-white/45">
//                     EMAIL
//                   </span>
//                   <input
//                     type="email"
//                     value={form.email}
//                     onChange={onChange("email")}
//                     placeholder="name@domain.com"
//                     className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
//                                placeholder:text-white/18 outline-none
//                                border-b border-white/10 focus:border-[#F5D000]"
//                     required
//                   />
//                 </label>
//                 {/* PASSWORD */}
//                 <label className="block">
//                   <span className="text-[10px] tracking-[0.32em] text-white/45">
//                     PASSWORD
//                   </span>
//                   <input
//                     type="password"
//                     value={form.password}
//                     onChange={onChange("password")}
//                     placeholder="••••••••"
//                     className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80
//                placeholder:text-white/18 outline-none
//                border-b border-white/10 focus:border-[#F5D000]"
//                     required
//                   />
//                 </label>
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
import { useAuth } from "../context/AuthContext"; // ✅ 1. IMPORT THIS

const heroImg =
  "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ 2. GET THE LOGIN FUNCTION

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    nic: "",
    mobile: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  // ✅ 3. THE CORRECT LOGIC IS HERE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Save the API response into the 'res' variable
      const res = await API.post("auth/signup", form);

      // Set the success message
      setSuccess("Registration successful! Redirecting…");

      // Call the login function with the data from the response
      login(res.data);

      // Redirect to homepage
      setTimeout(() => {
        navigate("/");
      }, 1500);
      
    } catch (err) {
      // This will now only run if there is a real error from the server
      setError(err.response?.data?.message || "Registration failed. Please check your details.");
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#0B0F14] text-white">
      <div className="h-screen w-screen grid grid-rows-[56px_1fr] overflow-hidden">
        {/* --- The rest of your beautiful UI is unchanged --- */}
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
            <button
              className="opacity-90 hover:opacity-100"
              aria-label="Notifications"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M18.4 9.6a6.4 6.4 0 1 0-12.8 0c0 7.2-2.4 7.2-2.4 7.2h17.6s-2.4 0-2.4-7.2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
            <button
              className="opacity-90 hover:opacity-100"
              aria-label="Account"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12a4.6 4.6 0 1 0-4.6-4.6A4.6 4.6 0 0 0 12 12Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M20 21.2a8 8 0 0 0-16 0"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0 overflow-hidden">
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
                Access is reserved for those who seek the extraordinary. Our
                curated experiences are the heartbeat of the island's elite
                social calendar.
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

          <main className="flex items-center justify-center px-6 sm:px-10 lg:px-14 min-h-0 overflow-y-auto py-8">
            <div className="w-full max-w-xl">
              <h1 className="text-[38px] font-light tracking-tight text-white/90">
                Request Membership
              </h1>
              <p className="mt-2 text-sm text-white/55">
                Complete the formal application for concierge review.
              </p>

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="block">
                    <span className="text-[10px] tracking-[0.32em] text-white/45">
                      FIRST NAME
                    </span>
                    <input
                      value={form.firstName}
                      onChange={onChange("firstName")}
                      placeholder="e.g. Arjuna"
                      className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80 placeholder:text-white/18 outline-none border-b border-white/10 focus:border-[#F5D000]"
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
                      className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80 placeholder:text-white/18 outline-none border-b border-white/10 focus:border-[#F5D000]"
                      required
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[10px] tracking-[0.32em] text-white/45">
                    EMAIL
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="name@domain.com"
                    className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80 placeholder:text-white/18 outline-none border-b border-white/10 focus:border-[#F5D000]"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.32em] text-white/45">
                    PASSWORD
                  </span>
                  <input
                    type="password"
                    value={form.password}
                    onChange={onChange("password")}
                    placeholder="••••••••"
                    className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80 placeholder:text-white/18 outline-none border-b border-white/10 focus:border-[#F5D000]"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.32em] text-white/45">
                    NIC NUMBER
                  </span>
                  <input
                    value={form.nic}
                    onChange={onChange("nic")}
                    placeholder="e.g. 199012345V or 200512301234"
                    className="mt-3 w-full bg-transparent pb-2 text-[14px] text-white/80 placeholder:text-white/18 outline-none border-b border-white/10 focus:border-[#F5D000]"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.32em] text-white/45">
                    MOBILE NUMBER
                  </span>
                  <div className="mt-3 flex items-end gap-4 border-b border-white/10 focus-within:border-[#F5D000] pb-2">
                    <span className="text-white/65 text-[14px] select-none">
                      +94
                    </span>
                    <input
                      value={form.mobile}
                      onChange={onChange("mobile")}
                      placeholder="771234567"
                      className="w-full bg-transparent text-[14px] text-white/80 placeholder:text-white/18 outline-none"
                      required
                      maxLength="9"
                    />
                  </div>
                </label>
                <p className="text-[11px] leading-5 text-white/30 italic">
                  By submitting this application, you acknowledge that
                  membership is subject to invitation and adherence to The
                  Curator's private club protocols.
                </p>
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
                    className="rounded-full bg-[#F5D000] px-14 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-black hover:brightness-95 transition"
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