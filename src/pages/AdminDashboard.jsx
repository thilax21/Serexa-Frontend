// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import API from '../api/axios';

// const statusStyles = {
//   pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
//   approved: 'bg-green-500/10 text-green-400 border-green-500/20',
//   rejected: 'bg-red-500/10 text-red-400 border-red-500/20',
// };

// export default function AdminDashboard() {
//   const [events, setEvents] = useState([]);
//   const [filter, setFilter] = useState('all');

//   const fetchAll = async () => {
//     const { data } = await API.get('/events/admin/all');
//     setEvents(data);
//   };

//   useEffect(() => { fetchAll(); }, []);

//   const updateStatus = async (id, status) => {
//     await API.put(`/events/admin/status/${id}`, { status });
//     fetchAll();
//   };

//   const deleteEvent = async (id) => {
//     if (!window.confirm('Delete this event?')) return;
//     await API.delete(`/events/delete/${id}`);
//     fetchAll();
//   };

//   const filtered = filter === 'all' ? events : events.filter(e => e.status === filter);

//   const counts = {
//     all: events.length,
//     pending: events.filter(e => e.status === 'pending').length,
//     approved: events.filter(e => e.status === 'approved').length,
//     rejected: events.filter(e => e.status === 'rejected').length,
//   };

//   return (
//     <div className="min-h-screen bg-[#0e0e0e] py-10 px-4">
//       <div className="max-w-5xl mx-auto">
//         <Link to="/" className="text-white/20 text-xs hover:text-white/40 tracking-widest mb-8 inline-block">← BACK TO HOME</Link>
//         <div className="mb-8">
//           <p className="text-[#f5c518] text-[10px] tracking-[0.3em] mb-1">THE CURATOR</p>
//           <h2 className="text-3xl font-black text-white">ADMIN DASHBOARD</h2>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-4 gap-4 mb-8">
//           {['all','pending','approved','rejected'].map(tab => (
//             <div key={tab} className="bg-[#1a1a1a] rounded-xl border border-white/5 p-4 text-center">
//               <p className="text-3xl font-black text-white">{counts[tab]}</p>
//               <p className="text-white/30 text-[10px] tracking-widest mt-1">{tab.toUpperCase()}</p>
//             </div>
//           ))}
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex gap-2 mb-6">
//           {['all','pending','approved','rejected'].map(tab => (
//             <button key={tab} onClick={() => setFilter(tab)}
//               className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-widest capitalize transition-all ${
//                 filter === tab ? 'bg-[#f5c518] text-black' : 'bg-white/5 text-white/40 hover:text-white'
//               }`}>
//               {tab.toUpperCase()}
//             </button>
//           ))}
//         </div>

//         {/* Events */}
//         <div className="flex flex-col gap-4">
//           {filtered.map(event => (
//             <div key={event._id} className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-6">
//               <div className="flex justify-between items-start gap-4">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-2 flex-wrap">
//                     <h3 className="text-white font-black text-xl">{event.name}</h3>
//                     <span className={`text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest ${statusStyles[event.status]}`}>
//                       {event.status.toUpperCase()}
//                     </span>
//                   </div>
//                   <p className="text-white/40 text-sm">📍 {event.place} &nbsp;|&nbsp; 📅 {new Date(event.date).toLocaleDateString()} &nbsp;|&nbsp; 🏷️ {event.category}</p>
//                   <p className="text-white/30 text-sm mt-1">👤 {event.createdBy?.name} &nbsp;({event.createdBy?.email})</p>
//                   <p className="text-white/50 text-sm mt-3">{event.description}</p>
//                 </div>
//                 {event.image && (
//                   <img src={event.image} alt={event.name} className="w-24 h-24 rounded-xl object-cover flex-shrink-0" />
//                 )}
//               </div>

//               <div className="flex gap-3 mt-5 pt-4 border-t border-white/5 flex-wrap">
//                 {event.status !== 'approved' && (
//                   <button onClick={() => updateStatus(event._id, 'approved')}
//                     className="bg-green-500/10 text-green-400 border border-green-500/20 px-5 py-2 rounded-xl text-[11px] font-bold tracking-widest hover:bg-green-500/20 transition-colors">
//                     ✅ APPROVE
//                   </button>
//                 )}
//                 {event.status !== 'rejected' && (
//                   <button onClick={() => updateStatus(event._id, 'rejected')}
//                     className="bg-red-500/10 text-red-400 border border-red-500/20 px-5 py-2 rounded-xl text-[11px] font-bold tracking-widest hover:bg-red-500/20 transition-colors">
//                     ❌ REJECT
//                   </button>
//                 )}
//                 <button onClick={() => deleteEvent(event._id)}
//                   className="ml-auto bg-white/5 text-white/40 border border-white/10 px-5 py-2 rounded-xl text-[11px] font-bold tracking-widest hover:bg-white/10 transition-colors">
//                   🗑️ DELETE
//                 </button>
//               </div>
//             </div>
//           ))}

//           {filtered.length === 0 && (
//             <div className="text-center py-16 text-white/20">
//               <p className="text-5xl mb-4">◌</p>
//               <p className="tracking-widest text-sm">NO {filter.toUpperCase()} EVENTS</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axios';

const statusStyles = {
  pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  approved: 'bg-green-500/10 text-green-400 border-green-500/20',
  rejected: 'bg-red-500/10 text-red-400 border-red-500/20',
};

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');

  // GET ALL EVENTS
  const fetchAll = async () => {
    try {
      const { data } = await API.get('/events/admin/all');
      setEvents(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      await API.put(`/events/admin/status/${id}`, { status });
      fetchAll();
    } catch (err) {
      console.log(err);
      alert("Status update failed");
    }
  };

  // DELETE EVENT ✅ FIXED
  const deleteEvent = async (id) => {
    if (!window.confirm("Delete this event?")) return;

    try {
        await API.delete(`/events/delete/${id}`);
        fetchAll();
    } catch (err) {
        console.log(err.response?.data);
        alert(err.response?.data?.message || "Delete failed");
    }
};

  const filtered =
    filter === 'all' ? events : events.filter(e => e.status === filter);

  const counts = {
    all: events.length,
    pending: events.filter(e => e.status === 'pending').length,
    approved: events.filter(e => e.status === 'approved').length,
    rejected: events.filter(e => e.status === 'rejected').length,
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/"
          className="text-white/20 text-xs hover:text-white/40 tracking-widest mb-8 inline-block"
        >
          ← BACK TO HOME
        </Link>

        {/* HEADER */}
        <div className="mb-8">
          <p className="text-[#f5c518] text-[10px] tracking-[0.3em] mb-1">
            THE SEREXA
          </p>
          <h2 className="text-3xl font-black text-white">
            ADMIN DASHBOARD
          </h2>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {['all', 'pending', 'approved', 'rejected'].map(tab => (
            <div
              key={tab}
              className="bg-[#1a1a1a] rounded-xl border border-white/5 p-4 text-center"
            >
              <p className="text-3xl font-black text-white">
                {counts[tab]}
              </p>
              <p className="text-white/30 text-[10px] tracking-widest mt-1">
                {tab.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        {/* FILTER */}
        <div className="flex gap-2 mb-6">
          {['all', 'pending', 'approved', 'rejected'].map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold tracking-widest capitalize transition-all ${
                filter === tab
                  ? 'bg-[#f5c518] text-black'
                  : 'bg-white/5 text-white/40 hover:text-white'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* EVENTS */}
        <div className="flex flex-col gap-4">
          {filtered.map(event => (
            <div
              key={event._id}
              className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-6"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-white font-black text-xl">
                      {event.name}
                    </h3>

                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest ${
                        statusStyles[event.status]
                      }`}
                    >
                      {event.status.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-white/40 text-sm">
                    📍 {event.place} | 📅{' '}
                    {new Date(event.date).toLocaleDateString()} | 🏷️{' '}
                    {event.category}
                  </p>

                  <p className="text-white/30 text-sm mt-1">
                    👤 {event.createdBy?.name} ({event.createdBy?.email})
                  </p>

                  <p className="text-white/50 text-sm mt-3">
                    {event.description}
                  </p>
                </div>

                {event.image && (
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                )}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-5 pt-4 border-t border-white/5 flex-wrap">
                {event.status !== 'approved' && (
                  <button
                    onClick={() => updateStatus(event._id, 'approved')}
                    className="bg-green-500/10 text-green-400 border border-green-500/20 px-5 py-2 rounded-xl text-[11px] font-bold tracking-widest"
                  >
                    ✅ APPROVE
                  </button>
                )}

                {event.status !== 'rejected' && (
                  <button
                    onClick={() => updateStatus(event._id, 'rejected')}
                    className="bg-red-500/10 text-red-400 border border-red-500/20 px-5 py-2 rounded-xl text-[11px] font-bold tracking-widest"
                  >
                    ❌ REJECT
                  </button>
                )}

                <button
                  onClick={() => deleteEvent(event._id)}
                  className="ml-auto bg-white/5 text-white/40 border border-white/10 px-5 py-2 rounded-xl text-[11px] font-bold tracking-widest hover:bg-white/10"
                >
                  🗑️ DELETE
                </button>
              </div>
            </div>
          ))}

          {/* EMPTY */}
          {filtered.length === 0 && (
            <div className="text-center py-16 text-white/20">
              <p className="text-5xl mb-4">◌</p>
              <p className="tracking-widest text-sm">
                NO {filter.toUpperCase()} EVENTS
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}