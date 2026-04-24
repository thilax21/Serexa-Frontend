import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/axios';

const statusStyles = {
  pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  approved: 'bg-green-500/10 text-green-400 border-green-500/20',
  rejected: 'bg-red-500/10 text-red-400 border-red-500/20',
};

export default function MyEventsPage() {
  const [events, setEvents] = useState([]);

  const fetchMyEvents = async () => {
    const { data } = await API.get('/events/my');
    setEvents(data);
  };

  useEffect(() => { fetchMyEvents(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    await API.delete(`/events/delete/${id}`);
    fetchMyEvents();
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-white/20 text-xs hover:text-white/40 tracking-widest mb-8 inline-block">← BACK TO HOME</Link>
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-[#f5c518] text-[10px] tracking-[0.3em] mb-1">THE CURATOR</p>
            <h2 className="text-3xl font-black text-white">MY EVENTS</h2>
          </div>
          <Link to="/create-event" className="border border-[#f5c518] text-[#f5c518] text-[11px] font-bold tracking-widest px-5 py-3 rounded hover:bg-[#f5c518] hover:text-black transition-all">
            + NEW EVENT
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-24 text-white/20">
            <p className="text-5xl mb-4">◌</p>
            <p className="tracking-widest text-sm mb-4">NO EVENTS POSTED YET</p>
            <Link to="/create-event" className="text-[#f5c518] text-xs tracking-widest hover:underline">POST YOUR FIRST EVENT →</Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {events.map(event => (
              <div key={event._id} className="bg-[#1a1a1a] rounded-2xl border border-white/10 p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold text-lg">{event.name}</h3>
                  <p className="text-white/40 text-sm mt-1">📍 {event.place} &nbsp;|&nbsp; 📅 {new Date(event.date).toLocaleDateString()}</p>
                  <span className={`inline-block mt-3 text-[10px] font-bold px-3 py-1 rounded-full border tracking-widest ${statusStyles[event.status]}`}>
                    {event.status.toUpperCase()}
                  </span>
                </div>
                <button onClick={() => handleDelete(event._id)}
                  className="bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-red-500/20 transition-colors">
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}