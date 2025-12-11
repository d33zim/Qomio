'use client'

import { useState, useMemo } from 'react'
import { Calendar as CalendarIcon, Search, MapPin, TrendingUp, ShoppingCart, ArrowRight, Loader2, Star, Filter, Heart, MoreHorizontal, CheckSquare, Plus, Clock, ChevronLeft, ChevronRight, X, BarChart3, Users, DollarSign, Activity, CreditCard, Trash2 } from 'lucide-react'

// --- HELPER ---
const formatDate = (d: Date) => d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })
// Fix: Ensure we count days correctly, inclusive or difference based on typical hotel logic (nights)
const getDaysDiff = (start: Date, end: Date) => {
    const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
    return Math.max(1, diff)
}

// --- 1. INTERACTIVE BOOKING WIDGET (DEUTSCH + CORRECT PLURAL) ---
export function BookingWidget() {
    const [step, setStep] = useState<'search' | 'loading' | 'results' | 'details' | 'success'>('search')
    const [guests, setGuests] = useState(2)
    const [destination, setDestination] = useState('Santorini, Griechenland')
    const [selectedHotel, setSelectedHotel] = useState<number | null>(null)

    // Date Logic
    const [showCalendar, setShowCalendar] = useState(false)
    const today = new Date()
    const [dateRange, setDateRange] = useState<{ start: Date, end: Date }>({
        start: new Date(today.getFullYear(), today.getMonth(), 24),
        end: new Date(today.getFullYear(), today.getMonth(), 31)
    })

    const nights = useMemo(() => getDaysDiff(dateRange.start, dateRange.end), [dateRange])

    // Pluralization Helper
    const nightLabel = nights === 1 ? 'Nacht' : 'Nächte'
    const searchButtonText = nights === 1 ? '1 Nacht suchen' : `${nights} Nächte suchen`
    const loadingText = nights === 1 ? 'Suche für eine Nacht...' : `Suche für ${nights} Nächte...`

    const hotels = [
        { id: 1, name: 'Villa Sunset Oia', price: 380, rating: 4.9, loc: 'Küste', image: 'from-blue-100 to-slate-50' },
        { id: 2, name: 'Grand Royal Hotel', price: 290, rating: 4.8, loc: 'Zentrum', image: 'from-indigo-100 to-blue-50' },
        { id: 3, name: 'Palm Beach Resort', price: 150, rating: 4.5, loc: 'Strand', image: 'from-cyan-100 to-blue-50' }
    ]

    const selectedHotelData = hotels.find(h => h.id === selectedHotel)

    const handleSearch = () => {
        setStep('loading')
        setTimeout(() => setStep('results'), 800)
    }

    const selectHotel = (id: number) => {
        setSelectedHotel(id)
        setStep('details')
    }

    const confirmBooking = () => {
        setStep('loading')
        setTimeout(() => setStep('success'), 1500)
    }

    const reset = () => {
        setStep('search')
        setSelectedHotel(null)
        setGuests(2)
        // Reset dates slightly to ensure fresh start feel if needed, or keep current
    }

    // Mini Calendar Component
    const MiniCalendar = () => {
        const [viewDate, setViewDate] = useState(new Date(dateRange.start))
        const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate()
        const startDayOffset = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay() || 7

        const handleDayClick = (day: number) => {
            const clickedDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
            // Just for demo: simple logic
            if (clickedDate.getTime() === dateRange.start.getTime()) return

            if (clickedDate > dateRange.start) {
                setDateRange(prev => ({ ...prev, end: clickedDate }))
                setShowCalendar(false)
            } else {
                const nextDay = new Date(clickedDate)
                nextDay.setDate(clickedDate.getDate() + 1)
                setDateRange({ start: clickedDate, end: nextDay })
            }
        }

        return (
            <div className="absolute top-16 left-4 right-4 bg-white rounded-xl shadow-xl border border-slate-200 p-4 z-50 animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-slate-700">{viewDate.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</span>
                    <button onClick={() => setShowCalendar(false)} className="p-1 hover:bg-slate-100 rounded-lg"><X size={14} /></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(d => <span key={d} className="text-[10px] text-slate-400 font-bold">{d}</span>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: startDayOffset - 1 }).map((_, i) => <div key={`empty-${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1
                        const current = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
                        const isStart = current.getTime() === dateRange.start.getTime()
                        const isEnd = current.getTime() === dateRange.end.getTime()
                        const isInRange = current > dateRange.start && current < dateRange.end

                        return (
                            <button
                                key={day}
                                onClick={() => handleDayClick(day)}
                                className={`text-xs w-8 h-8 rounded-full flex items-center justify-center transition-all
                                    ${isStart || isEnd ? 'bg-accent text-white font-bold shadow-md' : isInRange ? 'bg-accent/10 text-accent font-medium' : 'text-slate-600 hover:bg-slate-100'}
                                `}
                            >
                                {day}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-full bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden flex flex-col font-sans select-none relative group/widget">
            {/* Header */}
            <div className="h-12 border-b border-black/5 flex items-center px-4 justify-between bg-slate-50/80 backdrop-blur-sm z-10 sticky top-0">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Horizon Reisen</div>
            </div>

            {/* Content */}
            <div className="flex-1 relative overflow-hidden bg-slate-50/30">
                {step === 'search' && (
                    <div className="p-6 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-y-auto custom-scrollbar h-full">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Reiseziel</label>
                            <div className="flex items-center gap-2 h-10 px-3 rounded-lg bg-white border border-slate-200 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/10 transition-all shadow-sm">
                                <MapPin size={14} className="text-accent" />
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="flex-1 bg-transparent border-none text-sm text-slate-700 font-medium placeholder:text-slate-300 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 relative">
                            <div className="flex-1 space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Datum</label>
                                <button
                                    onClick={() => setShowCalendar(!showCalendar)}
                                    className={`w-full flex items-center gap-2 h-10 px-3 rounded-lg bg-white border cursor-pointer transition-all shadow-sm text-slate-700 ${showCalendar ? 'border-accent ring-2 ring-accent/10' : 'border-slate-200 hover:border-accent/30'}`}
                                >
                                    <CalendarIcon size={14} className="text-accent" />
                                    <span className="text-xs font-medium truncate">
                                        {dateRange.start.getDate()}. - {formatDate(dateRange.end)}
                                    </span>
                                </button>
                            </div>
                            <div className="w-1/3 space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Gäste</label>
                                <div className="flex items-center justify-between h-10 px-1 rounded-lg bg-white border border-slate-200 shadow-sm">
                                    <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-6 h-full hover:bg-slate-50 text-slate-400 hover:text-accent rounded-md transition-colors font-bold">-</button>
                                    <span className="text-sm font-bold text-slate-700">{guests}</span>
                                    <button onClick={() => setGuests(Math.min(10, guests + 1))} className="w-6 h-full hover:bg-slate-50 text-slate-400 hover:text-accent rounded-md transition-colors font-bold">+</button>
                                </div>
                            </div>
                        </div>

                        {showCalendar && <MiniCalendar />}

                        <button
                            onClick={handleSearch}
                            className="w-full h-11 mt-4 bg-accent hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <Search size={16} />
                            <span>{searchButtonText}</span>
                        </button>
                    </div>
                )}

                {step === 'loading' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/60 backdrop-blur-md z-20 animate-in fade-in duration-300">
                        <div className="relative">
                            <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Search size={14} className="text-accent/50" />
                            </div>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 tracking-wide animate-pulse">
                            {selectedHotel ? 'Buche Reise...' : loadingText}
                        </span>
                    </div>
                )}

                {step === 'results' && (
                    <div className="h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50/50">
                        <div className="p-3 border-b border-white/50 flex items-center justify-between bg-white/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <span className="bg-accent/10 text-accent text-[10px] font-bold px-2 py-0.5 rounded-full">{hotels.length} Treffer</span>
                                <span className="text-xs text-slate-400 font-medium truncate max-w-[120px]">{destination.split(',')[0]}</span>
                            </div>
                            <button onClick={reset} className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                                <Filter size={14} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                            {hotels.map((hotel) => (
                                <div key={hotel.id} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all cursor-pointer group" onClick={() => selectHotel(hotel.id)}>
                                    <div className="flex gap-3">
                                        <div className="w-16 h-16 rounded-lg bg-slate-100 overflow-hidden relative shrink-0">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${hotel.image}`} />
                                            <div className="absolute top-1 right-1 bg-white/90 rounded-full p-1 shadow-sm">
                                                <Heart size={8} className="text-slate-400 group-hover:text-accent group-hover:fill-accent transition-colors" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-0.5">
                                                <h5 className="text-xs font-bold text-slate-800 truncate pr-2">{hotel.name}</h5>
                                                <div className="flex items-center gap-0.5 text-[10px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded-full">
                                                    <Star size={8} className="fill-slate-700" />
                                                    {hotel.rating}
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-slate-500 flex items-center gap-1 mb-2">
                                                <MapPin size={8} />
                                                {hotel.loc}
                                            </p>
                                            <div className="flex items-end justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-slate-400 line-through">€{Math.round(hotel.price * 1.2)}</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-sm font-bold text-slate-900">€{hotel.price}</span>
                                                        <span className="text-[10px] font-normal text-slate-400">/ P. & Nacht</span>
                                                    </div>
                                                </div>
                                                <button className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg group-hover:bg-accent transition-colors">
                                                    Wählen
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 'details' && selectedHotelData && (
                    <div className="h-full flex flex-col p-6 animate-in slide-in-from-right-8 duration-500 overflow-y-auto custom-scrollbar">
                        <div className="flex items-center gap-3 mb-6 shrink-0">
                            <button onClick={() => setStep('results')} className="p-1 -ml-1 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                                <ArrowRight className="rotate-180" size={16} />
                            </button>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Übersicht</span>
                        </div>

                        <div className="flex-1 space-y-4">
                            <div className="flex gap-4">
                                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${selectedHotelData.image} shadow-sm shrink-0`} />
                                <div>
                                    <h4 className="font-bold text-slate-900">{selectedHotelData.name}</h4>
                                    <p className="text-xs text-slate-500 mb-2">{selectedHotelData.loc}</p>
                                    <div className="flex gap-1 text-[10px] font-bold text-amber-500">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} size={10} fill={i < Math.floor(selectedHotelData.rating) ? "currentColor" : "none"} className={i >= Math.floor(selectedHotelData.rating) ? "text-slate-300" : ""} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Zeitraum ({nights} {nightLabel})</span>
                                    <span className="font-bold text-slate-700">{formatDate(dateRange.start)} - {formatDate(dateRange.end)}</span>
                                </div>
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-500">Gäste</span>
                                    <span className="font-bold text-slate-700">{guests} Personen</span>
                                </div>
                                <div className="w-full h-px bg-slate-200 my-2" />
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>{nights}x {guests}P × €{selectedHotelData.price}</span>
                                    <span>€ {nights * guests * selectedHotelData.price}</span>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>Servicegebühr</span>
                                    <span>€ {Math.round(nights * guests * selectedHotelData.price * 0.05)}</span>
                                </div>
                                <div className="w-full h-px bg-slate-200 my-1" />
                                <div className="flex justify-between text-sm">
                                    <span className="font-bold text-slate-900">Gesamt</span>
                                    <span className="font-bold text-accent">€ {Math.round((nights * guests * selectedHotelData.price) * 1.05)}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={confirmBooking}
                            className="w-full h-11 mt-4 bg-slate-900 hover:bg-accent active:scale-[0.98] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-slate-900/10 shrink-0"
                        >
                            <CheckSquare size={16} />
                            Verbindlich buchen
                        </button>
                    </div>
                )}

                {step === 'success' && (
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-500">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4 shadow-sm">
                            <CheckSquare size={32} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Buchung bestätigt!</h4>
                        <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                            Vielen Dank! Ihre Reise ins <b>{selectedHotelData?.name}</b> ist gebucht. Wir haben die Bestätigung an Ihre E-Mail gesendet.
                        </p>
                        <button onClick={reset} className="text-xs font-bold text-accent hover:text-blue-700">
                            Neue Suche starten
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

// --- 2. INTERACTIVE ANALYTICS WIDGET ---
export function AnalyticsWidget() {
    const [timeframe, setTimeframe] = useState<'week' | 'month' | 'year'>('month')
    const [hoveredBar, setHoveredBar] = useState<number | null>(null)
    const [selectedBar, setSelectedBar] = useState<number | null>(null)

    const allData = {
        week: [45, 30, 60, 45, 80, 55, 90],
        month: [35, 60, 45, 80, 55, 75, 60, 90, 40, 50, 65, 85],
        year: [20, 30, 45, 40, 55, 60, 75, 80, 95, 85, 90, 100]
    }

    const labels = {
        week: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
        month: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        year: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
    }

    const data = allData[timeframe]
    const maxVal = Math.max(...data)

    const handleBarClick = (index: number) => setSelectedBar(index)
    const closeDetail = () => setSelectedBar(null)

    return (
        <div className="w-full h-full bg-[#0F172A] rounded-xl shadow-xl border border-slate-800 overflow-hidden flex flex-col font-sans select-none relative">
            {/* Header */}
            <div className="p-5 flex items-start justify-between border-b border-slate-800/50 bg-[#0F172A] z-10 sticky top-0">
                <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        Gesamtumsatz
                    </div>
                    <div className="text-3xl font-bold text-white flex items-center gap-2 tracking-tight">
                        {timeframe === 'week' ? '€ 12.4k' : timeframe === 'month' ? '€ 48.2k' : '€ 524k'}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                            <TrendingUp size={10} /> +12.5%
                        </span>
                        <span className="text-[10px] text-slate-500">vs letzte {timeframe === 'week' ? 'Woche' : timeframe === 'month' ? 'Monat' : 'Jahr'}</span>
                    </div>
                </div>

                {/* Timeframe Switcher */}
                <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    {(['week', 'month', 'year'] as const).map(t => (
                        <button
                            key={t}
                            onClick={() => { setTimeframe(t); setSelectedBar(null); }}
                            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${timeframe === t ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-400'}`}
                        >
                            {t === 'week' ? 'Wo' : t === 'month' ? 'Mo' : 'Jr'}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 p-5 pt-8 flex items-end justify-between gap-1.5 relative group/chart">
                <div className="absolute inset-x-5 inset-y-5 flex flex-col justify-between pointer-events-none opacity-10">
                    <div className="border-t border-blue-200 w-full" />
                    <div className="border-t border-blue-200 w-full" />
                    <div className="border-t border-blue-200 w-full" />
                </div>

                {data.map((val, i) => {
                    const heightPercent = (val / maxVal) * 100
                    return (
                        <div
                            key={i}
                            className="relative flex-1 h-full flex items-end group/bar cursor-pointer"
                            onMouseEnter={() => setHoveredBar(i)}
                            onMouseLeave={() => setHoveredBar(null)}
                            onClick={() => handleBarClick(i)}
                        >
                            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg pointer-events-none transition-all duration-200 z-10 whitespace-nowrap ${hoveredBar === i ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}>
                                € {val}k
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-[1px] border-4 border-transparent border-t-blue-600" />
                            </div>

                            <div
                                className="w-full bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-400 rounded-t-sm transition-all duration-500 ease-out relative overflow-hidden"
                                style={{
                                    height: `${heightPercent}%`,
                                    opacity: hoveredBar !== null && hoveredBar !== i ? 0.3 : 1
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-y-full group-hover/bar:translate-y-0 transition-transform duration-500" />
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Detail Overlay */}
            {selectedBar !== null && (
                <div className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-md z-20 p-6 flex flex-col animate-in slide-in-from-bottom-10 duration-300">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <button onClick={closeDetail} className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition-colors">
                                <ArrowRight className="rotate-180" size={16} />
                            </button>
                            <div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Detailanalyse</p>
                                <h4 className="text-xl font-bold text-white">{labels[timeframe][selectedBar]} Report</h4>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="bg-slate-800/50 p-3 rounded-lg flex items-center justify-between border border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/20 rounded-md text-blue-400"><DollarSign size={16} /></div>
                                <div className="text-sm">
                                    <p className="text-slate-400 text-xs">Umsatz</p>
                                    <p className="text-white font-bold">€ {data[selectedBar]}k</p>
                                </div>
                            </div>
                            <span className="text-xs text-green-400 font-bold">+12%</span>
                        </div>
                        <div className="bg-slate-800/50 p-3 rounded-lg flex items-center justify-between border border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-md text-purple-400"><Users size={16} /></div>
                                <div className="text-sm">
                                    <p className="text-slate-400 text-xs">Kunden</p>
                                    <p className="text-white font-bold">{Math.round(data[selectedBar] * 1.5)}</p>
                                </div>
                            </div>
                            <span className="text-xs text-green-400 font-bold">+5%</span>
                        </div>
                        <div className="bg-slate-800/50 p-3 rounded-lg flex items-center justify-between border border-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-pink-500/20 rounded-md text-pink-400"><Activity size={16} /></div>
                                <div className="text-sm">
                                    <p className="text-slate-400 text-xs">Conv. Rate</p>
                                    <p className="text-white font-bold">3.2%</p>
                                </div>
                            </div>
                            <span className="text-xs text-slate-500 font-bold">-1%</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// --- 3. INTERACTIVE ECOMMERCE WIDGET (DEUTSCH + FIXES) ---
export function EcommerceWidget() {
    // VIew State: product -> cart -> success
    const [view, setView] = useState<'product' | 'cart' | 'success'>('product')
    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState('42')
    const [color, setColor] = useState('blue')
    const [cartItems, setCartItems] = useState<any[]>([])
    const [isAdded, setIsAdded] = useState(false)

    const colors = [
        { name: 'blue', class: 'bg-blue-600', bgFrom: 'from-blue-100', bgTo: 'to-slate-50' },
        { name: 'dark', class: 'bg-slate-900', bgFrom: 'from-slate-200', bgTo: 'to-gray-100' }
    ]
    const currentColor = colors.find(c => c.name === color) || colors[0]

    const addToCart = () => {
        if (loading) return
        setLoading(true)
        // Simulate add delay
        setTimeout(() => {
            setLoading(false)
            setCartItems(prev => [...prev, { id: 1, name: 'Qomio Laufschuh', price: 149, size, color }])
            setIsAdded(true)
            setTimeout(() => setIsAdded(false), 2000)
            // DO NOT switch to cart automatically
        }, 600)
    }

    const checkout = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setView('success')
        }, 1200)
    }

    const reset = () => {
        setView('product')
        setCartItems([])
    }

    return (
        <div className="w-full h-full bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden flex flex-col font-sans relative select-none">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 pointer-events-none">
                {view === 'product' && <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ring-1 ring-black/5 text-slate-800">Neu</span>}
                {view !== 'product' && (
                    <button onClick={() => setView('product')} className="pointer-events-auto p-2 bg-white rounded-full shadow-sm ring-1 ring-black/5">
                        <ArrowRight className="rotate-180 text-slate-600" size={16} />
                    </button>
                )}
                {/* Cart Icon - Clickable to go to cart */}
                <div className="relative pointer-events-auto cursor-pointer group" onClick={() => cartItems.length > 0 && setView('cart')}>
                    <div className="w-9 h-9 rounded-full bg-white shadow-md ring-1 ring-black/5 flex items-center justify-center text-slate-800 transition-transform active:scale-95 hover:text-accent">
                        <ShoppingCart size={16} />
                    </div>
                    <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white ring-2 ring-white text-[10px] font-bold flex items-center justify-center transition-all duration-300 ${cartItems.length > 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                        {cartItems.length}
                    </span>
                </div>
            </div>

            {/* PRODUCT VIEW */}
            {view === 'product' && (
                <>
                    <div className="h-48 relative overflow-hidden transition-colors duration-700 animate-in fade-in">
                        <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${currentColor.bgFrom} ${currentColor.bgTo}`} />
                        <div className="absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={() => setColor(color === 'blue' ? 'dark' : 'blue')}>
                            <div className={`w-40 h-24 rounded-2xl shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 -rotate-12 translate-y-0 group-hover:-rotate-6' : 'bg-gradient-to-r from-slate-700 to-slate-900 -rotate-6 translate-y-2'} flex items-center justify-center relative`}>
                                <div className="text-white/20 font-display font-black text-4xl italic tracking-tighter mix-blend-overlay">RUN</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 p-5 flex flex-col bg-white animate-in slide-in-from-bottom-4 duration-500">
                        <div className="flex justify-between items-start mb-1">
                            <div>
                                <h4 className="font-display font-bold text-slate-900 text-lg tracking-tight">Qomio Laufschuh</h4>
                                <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">Performance Serie</div>
                            </div>
                            <span className="font-mono font-bold text-slate-800 text-lg">€149</span>
                        </div>

                        <div className="mt-4 mb-5 space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-slate-400 uppercase w-12">Farbe</span>
                                <div className="flex gap-2">
                                    {colors.map(c => (
                                        <button
                                            key={c.name}
                                            onClick={() => setColor(c.name)}
                                            className={`w-6 h-6 rounded-full ${c.class} shadow-sm ring-2 ring-offset-1 transition-all ${color === c.name ? 'ring-slate-300 scale-110' : 'ring-transparent hover:scale-105'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            {/* Size Selector - Explicit w-12 should be enough for 'Größe' */}
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-slate-400 uppercase w-12">Größe</span>
                                <div className="flex gap-1.5">
                                    {['41', '42', '43', '44'].map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all border ${size === s ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={addToCart}
                            disabled={loading}
                            className={`mt-auto w-full h-11 transition-all active:scale-[0.98] rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 ${isAdded ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-[#2563EB] hover:bg-blue-700 text-white'}`}
                        >
                            {loading ? (
                                <Loader2 size={16} className="animate-spin" />
                            ) : isAdded ? (
                                <><span className="animate-in fade-in">Hinzugefügt</span><CheckSquare size={16} /></>
                            ) : (
                                <><span>In den Warenkorb</span><ArrowRight size={14} /></>
                            )}
                        </button>
                    </div>
                </>
            )}

            {/* CART VIEW */}
            {view === 'cart' && (
                <div className="flex-1 p-6 flex flex-col animate-in slide-in-from-right-8 duration-500 overflow-hidden">
                    <h4 className="text-lg font-bold text-slate-900 mb-6 mt-8">Warenkorb</h4>

                    <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar min-h-0">
                        {cartItems.map((item, i) => (
                            <div key={i} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color === 'blue' ? 'from-blue-500 to-indigo-600' : 'from-slate-700 to-slate-900'} shadow-sm shrink-0`} />
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <h5 className="font-bold text-slate-800 text-sm">{item.name}</h5>
                                        <span className="font-mono text-xs font-bold">€{item.price}</span>
                                    </div>
                                    <p className="text-xs text-slate-500">Größe {item.size}</p>
                                    <button onClick={() => setCartItems(prev => prev.filter((_, idx) => idx !== i))} className="text-[10px] text-red-500 flex items-center gap-1 mt-2 hover:underline">
                                        <Trash2 size={10} /> Entfernen
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-slate-100 pt-4 space-y-2 mt-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Zwischensumme</span>
                            <span className="font-bold text-slate-900">€{cartItems.reduce((acc, item) => acc + item.price, 0)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Versand</span>
                            <span className="text-green-600 font-bold text-xs uppercase">Gratis</span>
                        </div>
                    </div>

                    <button
                        onClick={checkout}
                        className="mt-6 w-full h-11 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    >
                        {loading ? <Loader2 size={16} className="animate-spin" /> : <><span>Zur Kasse</span><CreditCard size={14} /></>}
                    </button>
                </div>
            )}

            {/* SUCCESS VIEW */}
            {view === 'success' && (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-500">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                        <CheckSquare size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Bestellung erfolgreich!</h4>
                    <p className="text-xs text-slate-500 mb-6">
                        Deine Bestellung #40291 wurde aufgenommen. Wir bereiten den Versand vor.
                    </p>
                    <button onClick={reset} className="text-xs font-bold text-blue-600 hover:text-blue-800">
                        Weiter shoppen
                    </button>
                </div>
            )}
        </div>
    )
}

// --- 4. INTERACTIVE ENTERPRISE WIDGET ---
export function EnterpriseWidget() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'API Integration', status: 'done', tag: 'Backend', desc: 'Anbindung der Payment-Schnittstelle an das Core-System.' },
        { id: 2, title: 'User Migration', status: 'review', tag: 'Database', desc: 'Transfer der Altdaten in die neue Cloud-Struktur.' },
        { id: 3, title: 'Q3 Reporting', status: 'todo', tag: 'Finance', desc: 'Vorbereitung der Quartalszahlen für das Board Meeting.' }
    ])

    // Task Detail Modal State
    const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)
    const selectedTask = tasks.find(t => t.id === selectedTaskId)

    const updateStatus = (id: number, newStatus: string) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t))
        setSelectedTaskId(null)
    }

    const getStatusColor = (s: string) => {
        if (s === 'done') return 'bg-emerald-50 text-emerald-600 border-emerald-200'
        if (s === 'review') return 'bg-amber-50 text-amber-600 border-amber-200'
        return 'bg-slate-50 text-slate-500 border-slate-200'
    }

    const getColConfig = (status: string) => tasks.filter(t => t.status === status)

    return (
        <div className="w-full h-full bg-slate-50 rounded-xl shadow-sm border border-black/5 overflow-hidden flex flex-col font-sans select-none relative">
            {/* Toolbar */}
            <div className="h-12 border-b border-black/5 flex items-center px-4 justify-between bg-white pl-16 relative">
                {/* Sidebar dummy */}
                <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-black/5 bg-slate-100/50 flex flex-col items-center py-3 gap-3">
                    <div className="w-6 h-6 rounded bg-slate-200" />
                    <div className="w-6 h-6 rounded bg-blue-100 border border-blue-200" />
                    <div className="w-6 h-6 rounded bg-slate-200" />
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-700">Projekt Board</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-500">v2.4</span>
                </div>
                <button className="bg-[#2563EB] text-white p-1.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                    <Plus size={14} />
                </button>
            </div>

            {/* Kanban Board */}
            <div className="flex-1 p-4 overflow-x-auto">
                <div className="grid grid-cols-3 gap-3 min-w-[360px] h-full">
                    {['todo', 'review', 'done'].map((status) => (
                        <div key={status} className="flex flex-col h-full">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    {status === 'todo' ? 'Offen' : status === 'review' ? 'Review' : 'Fertig'}
                                </span>
                                <span className="text-[10px] font-mono text-slate-300 bg-slate-100 px-1.5 rounded-full">{getColConfig(status).length}</span>
                            </div>

                            <div className="flex-1 bg-slate-100/50 rounded-lg p-2 space-y-2 border border-black/5">
                                {getColConfig(status).map(task => (
                                    <div
                                        key={task.id}
                                        onClick={() => setSelectedTaskId(task.id)}
                                        className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-blue-300 transition-all group"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${getStatusColor(task.status)}`}>
                                                {task.tag}
                                            </span>
                                            <MoreHorizontal size={12} className="text-slate-300" />
                                        </div>
                                        <p className="text-xs font-bold text-slate-700 leading-tight mb-2 group-hover:text-blue-600 transition-colors">{task.title}</p>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-4 h-4 rounded-full bg-slate-200 border border-white" />
                                            <span className="text-[9px] text-slate-400 font-medium">Heute fällig</span>
                                        </div>
                                    </div>
                                ))}
                                {status === 'todo' && (
                                    <div className="border border-dashed border-slate-300 rounded-lg p-2 flex items-center justify-center text-slate-400 hover:bg-white hover:text-blue-500 hover:border-blue-300 cursor-pointer transition-colors">
                                        <Plus size={14} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Task Detail Overlay */}
            {selectedTask && (
                <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px] z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-[300px] rounded-xl shadow-2xl border border-black/5 p-5 animate-in zoom-in-95">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`text-[10px] font-bold px-2 py-1 rounded border uppercase ${getStatusColor(selectedTask.status)}`}>{selectedTask.tag}</span>
                            <button onClick={() => setSelectedTaskId(null)} className="text-slate-400 hover:text-slate-600"><X size={16} /></button>
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg mb-2">{selectedTask.title}</h4>
                        <p className="text-xs text-slate-500 mb-6 leading-relaxed">{selectedTask.desc}</p>

                        <div className="space-y-2">
                            <p className="text-[10px] font-bold text-slate-400 uppercase">Status ändern</p>
                            <div className="grid grid-cols-3 gap-2">
                                <button onClick={() => updateStatus(selectedTask.id, 'todo')} className={`p-2 rounded-lg text-xs font-bold border ${selectedTask.status === 'todo' ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'}`}>Offen</button>
                                <button onClick={() => updateStatus(selectedTask.id, 'review')} className={`p-2 rounded-lg text-xs font-bold border ${selectedTask.status === 'review' ? 'bg-amber-50 border-amber-200 text-amber-700' : 'bg-white border-slate-100 text-slate-400 hover:border-amber-200'}`}>Review</button>
                                <button onClick={() => updateStatus(selectedTask.id, 'done')} className={`p-2 rounded-lg text-xs font-bold border ${selectedTask.status === 'done' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white border-slate-100 text-slate-400 hover:border-emerald-200'}`}>Fertig</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
