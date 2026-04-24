

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import API from "../api/axios";

// export default function CreateEventPage() {
//   const [form, setForm] = useState({
//     name: "",
//     place: "",
//     date: "",
//     category: "",
//     description: ""
//   });

//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   // ✅ FIX: no base64, only file object
//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   // ✅ FIX: FormData (IMPORTANT)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const data = new FormData();

//       data.append("name", form.name);
//       data.append("place", form.place);
//       data.append("date", form.date);
//       data.append("category", form.category);
//       data.append("description", form.description);

//       if (image) {
//         data.append("image", image);
//       }

//       await API.post("/events/post", data, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });

//       setMsg("✅ Event submitted for admin approval!");
//       setTimeout(() => navigate("/my-events"), 2000);

//     } catch (err) {
//       setMsg(err.response?.data?.message || "Failed to create event");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClass =
//     "bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f5c518]/50 placeholder-white/20 w-full";

//   return (
//     <div className="min-h-screen bg-[#0e0e0e] py-10 px-4">
//       <div className="max-w-lg mx-auto">

//         <Link
//           to="/"
//           className="text-white/20 text-xs hover:text-white/40 tracking-widest mb-8 inline-block"
//         >
//           ← BACK TO HOME
//         </Link>

//         <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-8">

//           <p className="text-[#f5c518] text-[10px] tracking-[0.3em] mb-2">
//             THE CURATOR
//           </p>

//           <h2 className="text-3xl font-black text-white mb-8">
//             CREATE EVENT
//           </h2>

//           {msg && (
//             <p className="bg-[#f5c518]/10 text-[#f5c518] rounded-xl px-4 py-3 mb-5 text-sm border border-[#f5c518]/20">
//               {msg}
//             </p>
//           )}

//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//             <input
//               placeholder="Event Name"
//               value={form.name}
//               onChange={(e) =>
//                 setForm({ ...form, name: e.target.value })
//               }
//               className={inputClass}
//               required
//             />

//             <input
//               placeholder="Place / Venue"
//               value={form.place}
//               onChange={(e) =>
//                 setForm({ ...form, place: e.target.value })
//               }
//               className={inputClass}
//               required
//             />

//             <input
//               type="date"
//               value={form.date}
//               onChange={(e) =>
//                 setForm({ ...form, date: e.target.value })
//               }
//               className={inputClass}
//               required
//             />

//             <select
//               value={form.category}
//               onChange={(e) =>
//                 setForm({ ...form, category: e.target.value })
//               }
//               className={`${inputClass} cursor-pointer`}
//               required
//             >
//               <option value="">Select Category</option>
//               {["Music", "Sports", "Tech", "Food", "Art", "Other"].map(
//                 (c) => (
//                   <option key={c} value={c}>
//                     {c}
//                   </option>
//                 )
//               )}
//             </select>

//             <textarea
//               placeholder="Description"
//               value={form.description}
//               onChange={(e) =>
//                 setForm({ ...form, description: e.target.value })
//               }
//               className={`${inputClass} h-28 resize-none`}
//               required
//             />

//             {/* IMAGE UPLOAD */}
//             <label className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center cursor-pointer hover:border-[#f5c518]/30 transition-colors">

//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImage}
//                 className="hidden"
//               />

//               {preview ? (
//                 <img
//                   src={preview}
//                   alt="preview"
//                   className="w-full h-40 object-cover rounded-lg"
//                 />
//               ) : (
//                 <p className="text-white/25 text-sm tracking-widest">
//                   📷 UPLOAD IMAGE (OPTIONAL)
//                 </p>
//               )}
//             </label>

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#f5c518] text-black py-3 rounded-xl font-black tracking-widest text-sm hover:bg-[#e6b800] transition-colors disabled:opacity-50 mt-2"
//             >
//               {loading ? "SUBMITTING..." : "SUBMIT EVENT"}
//             </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

export default function CreateEventPage() {
  const [form, setForm] = useState({
    name: "",
    place: "",
    date: "",
    category: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // ✅ Image handler
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // ✅ Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("place", form.place);
      formData.append("date", form.date);
      formData.append("category", form.category);
      formData.append("description", form.description);

      if (image) {
        formData.append("image", image);
      }

      // ❌ DO NOT set Content-Type manually (important fix)
      await API.post("/events/post", formData);

      setMsg("✅ Event submitted for admin approval!");

      setTimeout(() => navigate("/my-events"), 1500);
    } catch (err) {
      console.log(err);
      setMsg(err.response?.data?.message || "❌ Failed to create event");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f5c518]/50 placeholder-white/20 w-full";

  return (
    <div className="min-h-screen bg-[#0e0e0e] py-10 px-4">
      <div className="max-w-lg mx-auto">

        <Link
          to="/"
          className="text-white/20 text-xs hover:text-white/40 tracking-widest mb-8 inline-block"
        >
          ← BACK TO HOME
        </Link>

        <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-8">

          <h2 className="text-3xl font-black text-white mb-6">
            CREATE EVENT
          </h2>

          {msg && (
            <p className="bg-[#f5c518]/10 text-[#f5c518] rounded-xl px-4 py-3 mb-5 text-sm border border-[#f5c518]/20">
              {msg}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              placeholder="Event Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              required
            />

            <input
              placeholder="Place / Venue"
              value={form.place}
              onChange={(e) => setForm({ ...form, place: e.target.value })}
              className={inputClass}
              required
            />

            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className={inputClass}
              required
            />

            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
              className={inputClass}
              required
            >
              <option value="">Select Category</option>
              <option>Music</option>
              <option>Sports</option>
              <option>Tech</option>
              <option>Food</option>
              <option>Art</option>
              <option>Other</option>
            </select>

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className={`${inputClass} h-28 resize-none`}
              required
            />

            {/* IMAGE */}
            <label className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />

              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-40 object-cover rounded-lg"
                />
              ) : (
                <p className="text-white/25 text-sm tracking-widest">
                  📷 UPLOAD IMAGE (OPTIONAL)
                </p>
              )}
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#f5c518] text-black py-3 rounded-xl font-black tracking-widest text-sm"
            >
              {loading ? "SUBMITTING..." : "SUBMIT EVENT"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}