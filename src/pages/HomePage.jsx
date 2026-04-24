
// }

import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../api/axios';

const CATEGORIES = ['All', 'Music', 'Sports', 'Tech', 'Food', 'Art', 'Other'];
const DISTRICTS = [
  'All', 'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
  'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya',
  'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam',
  'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Ratnapura', 'Kegalle',
];

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [heroIndex, setHeroIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/events/approved').then(({ data }) => {
      setEvents(data);
      setFiltered(data);
    });
  }, []);

  // Always cycle through 5 slides (repeat if less than 5 events)
  useEffect(() => {
    if (events.length === 0) return;
    const timer = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(timer);
  }, [events]);

  useEffect(() => {
    let result = events;
    if (selectedCategory !== 'All')
      result = result.filter(e => e.category === selectedCategory);
    if (selectedDistrict !== 'All')
      result = result.filter(e => e.place?.toLowerCase().includes(selectedDistrict.toLowerCase()));
    if (selectedDate)
      result = result.filter(e => new Date(e.date).toISOString().split('T')[0] === selectedDate);
    if (searchQuery)
      result = result.filter(e =>
        e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.place.toLowerCase().includes(searchQuery.toLowerCase())
      );
    setFiltered(result);
  }, [selectedCategory, selectedDistrict, selectedDate, searchQuery, events]);

  const handlePostClick = () => {
    if (!user) navigate('/register');
    else navigate('/create-event');
  };

  // Always get 5 slides (repeat if less than 5 events)
  const slides = [];
  for (let i = 0; i < 5; i++) {
    slides.push(events[i % events.length]);
  }
  const heroEvent = slides[heroIndex];
  const totalSlides = 5;

  const navItems = [
    { icon: '◎', label: 'DISCOVER', active: true },
    { icon: '⊞', label: 'THE COLLECTION' },
    { icon: '⌂', label: 'PRIVATE VENUES' },
    { icon: '✦', label: 'ARTISANS' },
    { icon: '◈', label: 'CONCIERGE' },
  ];

  return (
    <div className="flex h-screen bg-[#0e0e0e] text-white overflow-hidden font-sans">

      {/* ═══ SIDEBAR ═══ */}
      <aside className="w-56 flex-shrink-0 bg-[#0e0e0e] border-r border-white/[0.06] flex flex-col py-7 px-5">
        <div className="mb-10">
          <p className="text-[#F5C518] font-black text-[15px] tracking-[0.12em] leading-none">
            THE SEREXA
          </p>
          <p className="text-white/30 text-[9px] tracking-[0.22em] mt-1.5 font-medium">
            SRI LANKAN EXPERIENCE
          </p>
        </div>

        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                item.active
                  ? 'text-[#F5C518] bg-[#F5C518]/[0.06]'
                  : 'text-white/35 hover:text-white/60 hover:bg-white/[0.03]'
              }`}
            >
              {item.active && (
                <span className="w-[3px] h-4 bg-[#F5C518] rounded-full -ml-3 mr-0.5" />
              )}
              <span className="text-[11px] w-4 text-center opacity-70">{item.icon}</span>
              <span className="text-[10px] tracking-[0.18em] font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-6">
          {user ? (
            <div className="space-y-2">
              <p className="text-white/35 text-[9px] tracking-[0.2em] text-center">
                Hi, {user.name}
              </p>
              {user.role === 'admin' ? (
                <Link to="/admin" className="block text-center text-[10px] text-[#F5C518] tracking-widest hover:underline">
                  ADMIN PANEL
                </Link>
              ) : (
                <Link to="/my-events" className="block text-center text-[10px] text-white/40 tracking-widest hover:text-white/60">
                  MY EVENTS
                </Link>
              )}
              <button
                onClick={() => { logout(); navigate('/'); }}
                className="w-full text-center text-[9px] text-white/20 hover:text-white/40 tracking-widest"
              >
                SIGN OUT
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="w-full rounded-lg bg-[#F5C518] text-black text-[11px] font-bold tracking-[0.15em] py-3 transition-all hover:brightness-95"
            >
              SIGN IN / SIGN UP
            </button>
          )}
        </div>
      </aside>

      {/* ═══ MAIN ═══ */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">

        {/* ── TOP BAR ── */}
        <header className="flex-shrink-0 flex items-center justify-end px-6 py-4 border-b border-white/[0.04] bg-[#0e0e0e]">
          <div className="flex items-center gap-5">
            <button className="text-white/35 hover:text-white/60 transition-colors" aria-label="Notifications">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22a2.2 2.2 0 0 0 2.2-2.2H9.8A2.2 2.2 0 0 0 12 22Z" />
                <path d="M18.4 9.6a6.4 6.4 0 1 0-12.8 0c0 7.2-2.4 7.2-2.4 7.2h17.6s-2.4 0-2.4-7.2Z" />
              </svg>
            </button>
            <button className="text-white/35 hover:text-white/60 transition-colors" aria-label="Saved">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18l-7-4-7 4V4Z" />
              </svg>
            </button>
            {user ? (
              <Link
                to={user.role === 'admin' ? '/admin' : '/my-events'}
                className="w-9 h-9 rounded-full bg-[#F5C518] flex items-center justify-center text-black font-black text-xs hover:brightness-95 transition-all"
              >
                {user.name?.[0]?.toUpperCase()}
              </Link>
            ) : (
              <Link
                to="/login"
                className="w-9 h-9 rounded-full bg-[#F5C518] flex items-center justify-center text-black text-xs hover:brightness-95 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 12a4.6 4.6 0 1 0-4.6-4.6A4.6 4.6 0 0 0 12 12Z" />
                  <path d="M20 21.2a8 8 0 0 0-16 0" strokeLinecap="round" />
                </svg>
              </Link>
            )}
          </div>
        </header>

        {/* ── SCROLLABLE CONTENT ── */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">

            {/* ═══ HERO CAROUSEL (always 5 slides) ═══ */}
            {events.length > 0 ? (
              <div className="relative rounded-2xl overflow-hidden h-[440px] group">

                {/* All 5 slides with crossfade */}
                {slides.map((evt, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === heroIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
                    }`}
                  >
                    {evt.image ? (
                      <img
                        src={evt.image}
                        alt={evt.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-900/60 via-stone-800 to-stone-900" />
                    )}
                  </div>
                ))}

                {/* Gradient — bottom only for text */}
                <div className="absolute inset-0 z-[2] pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/25 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-[3] flex flex-col justify-end p-8">
                  <p className="text-[#F5C518] text-[10px] tracking-[0.3em] font-semibold mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#F5C518] inline-block" />
                    FEATURED EXPERIENCE
                  </p>
                  <h1 className="text-[48px] font-black uppercase leading-[0.92] mb-3 max-w-lg tracking-tight">
                    {heroEvent.name}
                  </h1>
                  <p className="text-white/60 text-[13px] mb-6 max-w-md leading-relaxed line-clamp-2">
                    {heroEvent.description}
                  </p>
                  <div className="flex items-center gap-5">
                    <button
                      onClick={handlePostClick}
                      className="bg-[#F5C518] text-black text-[11px] font-bold tracking-[0.18em] px-7 py-3.5 rounded hover:brightness-95 transition-all"
                    >
                      REQUEST INVITATION
                    </button>
                    <span className="text-white/30 text-xs tracking-[0.2em] font-medium">
                      {String(heroIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Number indicators 1 2 3 4 5 */}
                {/* <div className="absolute top-5 right-5 z-[4] flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setHeroIndex(i)}
                      className={`flex items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300 ${
                        i === heroIndex
                          ? 'w-7 h-7 bg-[#F5C518] text-black shadow-lg shadow-[#F5C518]/20'
                          : 'w-7 h-7 bg-white/15 text-white/50 hover:bg-white/25 hover:text-white/70 backdrop-blur-sm'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div> */}

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 z-[4] h-[3px] bg-white/10">
                  <div
                    key={heroIndex}
                    className="h-full bg-[#F5C518] transition-all duration-[5000ms] ease-linear"
                    style={{ width: `${((heroIndex + 1) / totalSlides) * 100}%` }}
                  />
                </div>

                {/* Arrows */}
                <button
                  onClick={() => setHeroIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-[4] w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 text-xl backdrop-blur-sm"
                >
                  ‹
                </button>
                <button
                  onClick={() => setHeroIndex(prev => (prev + 1) % totalSlides)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-[4] w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 text-xl backdrop-blur-sm"
                >
                  ›
                </button>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden h-[440px] bg-gradient-to-br from-amber-900/40 via-stone-800 to-stone-900 flex items-end p-8">
                <div>
                  <p className="text-[#F5C518] text-[10px] tracking-[0.3em] mb-3">FEATURED EXPERIENCE</p>
                  <h1 className="text-[48px] font-black uppercase mb-4 tracking-tight">YOUR EVENT HERE</h1>
                  <button
                    onClick={handlePostClick}
                    className="bg-[#F5C518] text-black text-[11px] font-bold tracking-[0.18em] px-7 py-3.5 rounded hover:brightness-95 transition-all"
                  >
                    POST FIRST EVENT
                  </button>
                </div>
              </div>
            )}

            {/* ═══ FILTER BAR ═══ */}
            <div className="flex items-center gap-3">

              {/* District */}
              <div className="relative">
                <div className="flex items-center gap-2.5 bg-[#1c1c1c] rounded-xl px-4 py-3 border border-white/[0.06] hover:border-white/[0.12] transition-all min-w-[160px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#F5C518] flex-shrink-0">
                    <path d="M3 21h18M5.5 17l1-12h11l1 12M9 17v4M15 17v4M9 3l1.5 4M14.5 3L16 7" />
                  </svg>
                  <select
                    value={selectedDistrict}
                    onChange={e => setSelectedDistrict(e.target.value)}
                    className="appearance-none bg-transparent text-white/70 text-[11px] tracking-[0.1em] font-semibold cursor-pointer focus:outline-none"
                  >
                    {DISTRICTS.map(d => (
                      <option key={d} value={d} className="bg-[#1c1c1c] text-white">
                        {d === 'All' ? 'DISTRICT' : d.toUpperCase()}
                      </option>
                    ))}
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/30 flex-shrink-0">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <div className="flex items-center gap-2.5 bg-[#1c1c1c] rounded-xl px-4 py-3 border border-white/[0.06] hover:border-white/[0.12] transition-all min-w-[160px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 flex-shrink-0">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    className="bg-transparent text-white/70 text-[11px] tracking-[0.1em] font-semibold focus:outline-none [color-scheme:dark] cursor-pointer"
                  />
                  {selectedDate && (
                    <button
                      onClick={() => setSelectedDate('')}
                      className="text-white/30 hover:text-white/60 text-[10px] flex-shrink-0"
                    >✕</button>
                  )}
                  {!selectedDate && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/30 flex-shrink-0">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Category */}
              <div className="relative">
                <div className="flex items-center gap-2.5 bg-[#1c1c1c] rounded-xl px-4 py-3 border border-white/[0.06] hover:border-white/[0.12] transition-all min-w-[170px]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40 flex-shrink-0">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-transparent text-white/70 text-[11px] tracking-[0.1em] font-semibold cursor-pointer focus:outline-none"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c} className="bg-[#1c1c1c] text-white">
                        {c === 'All' ? 'CATEGORY' : c.toUpperCase()}
                      </option>
                    ))}
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white/30 flex-shrink-0">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Search */}
              <div className="flex-1">
                <div className="flex items-center gap-2.5 bg-[#1c1c1c] rounded-xl px-4 py-3 border border-white/[0.06] hover:border-white/[0.12] focus-within:border-[#F5C518]/40 transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/30 flex-shrink-0">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    placeholder="SEARCH SEREXA EXPERIENCES..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white/70 text-[11px] tracking-[0.1em] placeholder-white/25 focus:outline-none w-full font-semibold"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-white/30 hover:text-white/60 text-[10px] flex-shrink-0"
                    >✕</button>
                  )}
                </div>
              </div>
            </div>

            {/* ═══ EVENT GRID (4 columns) ═══ */}
            {filtered.length === 0 ? (
              <div className="text-center py-24 text-white/15">
                <p className="text-6xl mb-4">◌</p>
                <p className="tracking-[0.3em] text-[11px] font-semibold">NO EXPERIENCES FOUND</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}

function EventCard({ event }) {
  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer bg-stone-900">
      <div className="relative h-56 overflow-hidden">
        {event.image ? (
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
            <span className="text-white/8 text-6xl font-black">{event.category?.[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-start">
          <button className="w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-white/60 hover:text-white text-xs transition-colors backdrop-blur-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>
          <button className="w-7 h-7 rounded-full bg-black/50 flex items-center justify-center text-[#F5C518] text-[10px] transition-colors backdrop-blur-sm">
            ★
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3">
          <span className="text-[#F5C518] text-[8px] tracking-[0.18em] font-bold">
            {event.category?.toUpperCase()}
          </span>
          <h3 className="text-white font-bold text-[13px] mt-0.5 leading-tight line-clamp-1">
            {event.name}
          </h3>
          <div className="flex items-center justify-between mt-1.5">
            <p className="text-white/40 text-[10px] truncate pr-2">📍 {event.place}</p>
            <p className="text-white/30 text-[9px] tracking-wider flex-shrink-0">
              {new Date(event.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}