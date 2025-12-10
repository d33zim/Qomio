'use client'

import { useState } from 'react'
import { Calendar, Search, MapPin, TrendingUp, ShoppingCart, ArrowRight, Loader2, Star, Filter, Heart, MoreHorizontal, CheckSquare, Plus, Clock } from 'lucide-react'

// --- 1. INTERACTIVE BOOKING WIDGET ---
export function BookingWidget() {
    const [step, setStep] = useState<'search' | 'loading' | 'results'>('search')
    const [guests, setGuests] = useState(2)
    const [destination, setDestination] = useState('Santorini, Griechenland')

    const handleSearch = () => {
        setStep('loading')
        setTimeout(() => setStep('results'), 1200)
    }

    const reset = () => setStep('search')

    return (
        <div className="w-full h-full bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden flex flex-col font-sans select-none relative group/widget">
            {/* Header */}
            <div className="h-12 border-b border-black/5 flex items-center px-4 justify-between bg-slate-50/80 backdrop-blur-sm z-10 sticky top-0">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Horizon Cloud</div>
            </div>

            {/* Content Body */}
            <div className="flex-1 relative overflow-hidden bg-slate-50/30">
                {step === 'search' && (
                    <div className="p-6 space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Destination Input */}
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

                        <div className="flex gap-3">
                            <div className="flex-1 space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Datum</label>
                                <div className="flex items-center gap-2 h-10 px-3 rounded-lg bg-white border border-slate-200 cursor-pointer hover:border-accent/30 transition-colors shadow-sm text-slate-700">
                                    <Calendar size={14} className="text-accent" />
                                    <span className="text-sm font-medium">24. - 31. Aug</span>
                                </div>
                            </div>
                            <div className="w-1/3 space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Gäste</label>
                                <div className="flex items-center justify-between h-10 px-1 rounded-lg bg-white border border-slate-200 shadow-sm">
                                    <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-7 h-full hover:bg-slate-50 text-slate-400 hover:text-accent rounded-md transition-colors font-bold">-</button>
                                    <span className="text-sm font-bold text-slate-700">{guests}</span>
                                    <button onClick={() => setGuests(Math.min(10, guests + 1))} className="w-7 h-full hover:bg-slate-50 text-slate-400 hover:text-accent rounded-md transition-colors font-bold">+</button>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleSearch}
                            className="w-full h-11 mt-4 bg-accent hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300"
                        >
                            <Search size={16} />
                            Angebote suchen
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
                        <span className="text-xs font-semibold text-slate-500 tracking-wide animate-pulse">Durchsuche Datenbank...</span>
                    </div>
                )}

                {step === 'results' && (
                    <div className="h-full flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50/50">
                        <div className="p-3 border-b border-white/50 flex items-center justify-between bg-white/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <span className="bg-accent/10 text-accent text-[10px] font-bold px-2 py-0.5 rounded-full">3 Treffer</span>
                                <span className="text-xs text-slate-400 font-medium">in {destination.split(',')[0]}</span>
                            </div>
                            <button onClick={reset} className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                                <Filter size={14} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all cursor-pointer group">
                                    <div className="flex gap-3">
                                        <div className="w-16 h-16 rounded-lg bg-slate-100 overflow-hidden relative shrink-0">
                                            {/* Stylized Image Placeholders matching Blue Theme */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${i === 1 ? 'from-blue-100 to-slate-50' : i === 2 ? 'from-indigo-100 to-blue-50' : 'from-cyan-100 to-blue-50'}`} />
                                            <div className="absolute top-1 right-1 bg-white/90 rounded-full p-1 shadow-sm">
                                                <Heart size={8} className="text-slate-400 group-hover:text-accent group-hover:fill-accent transition-colors" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-0.5">
                                                <h5 className="text-xs font-bold text-slate-800 truncate pr-2">Villa {i === 1 ? 'Sunset Oia' : i === 2 ? 'Grand Royal' : 'Palm Beach'}</h5>
                                                <div className="flex items-center gap-0.5 text-[10px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded-full">
                                                    <Star size={8} className="fill-slate-700" />
                                                    {i === 1 ? '4.9' : '4.8'}
                                                </div>
                                            </div>
                                            <p className="text-[10px] text-slate-500 flex items-center gap-1 mb-2">
                                                <MapPin size={8} />
                                                {i === 1 ? 'Direkt am Meer' : 'Zentrumsnah'} • WLAN
                                            </p>
                                            <div className="flex items-end justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-slate-400 line-through">€{i === 1 ? '450' : '320'}</span>
                                                    <span className="text-sm font-bold text-slate-900">€{i === 1 ? '380' : '290'}<span className="text-[10px] font-normal text-slate-400">/Nacht</span></span>
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
            </div>
        </div>
    )
}

// --- 2. INTERACTIVE ANALYTICS WIDGET ---
export function AnalyticsWidget() {
    const [timeframe, setTimeframe] = useState<'week' | 'month' | 'year'>('month')
    const [hoveredBar, setHoveredBar] = useState<number | null>(null)

    const allData = {
        week: [45, 30, 60, 45, 80, 55, 90],
        month: [35, 60, 45, 80, 55, 75, 60, 90, 40, 50, 65, 85],
        year: [20, 30, 45, 40, 55, 60, 75, 80, 95, 85, 90, 100]
    }

    const data = allData[timeframe]
    const maxVal = Math.max(...data)

    return (
        <div className="w-full h-full bg-[#0F172A] rounded-xl shadow-xl border border-slate-800 overflow-hidden flex flex-col font-sans select-none">
            {/* Header */}
            <div className="p-5 flex items-start justify-between border-b border-slate-800/50">
                <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        Total Revenue
                    </div>
                    <div className="text-3xl font-bold text-white flex items-center gap-2 tracking-tight">
                        {timeframe === 'week' ? '€ 12.4k' : timeframe === 'month' ? '€ 48.2k' : '€ 524k'}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                            <TrendingUp size={10} /> +12.5%
                        </span>
                        <span className="text-[10px] text-slate-500">vs last {timeframe}</span>
                    </div>
                </div>

                {/* Timeframe Switcher */}
                <div className="flex bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                    {(['week', 'month', 'year'] as const).map(t => (
                        <button
                            key={t}
                            onClick={() => setTimeframe(t)}
                            className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all ${timeframe === t ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-500 hover:text-slate-400'}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart Area */}
            <div className="flex-1 p-5 pt-8 flex items-end justify-between gap-1.5 relative group/chart">
                {/* Visual Grid */}
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
                            className="relative flex-1 h-full flex items-end group/bar"
                            onMouseEnter={() => setHoveredBar(i)}
                            onMouseLeave={() => setHoveredBar(null)}
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
        </div>
    )
}

// --- 3. INTERACTIVE ECOMMERCE WIDGET ---
export function EcommerceWidget() {
    const [cartCount, setCartCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [size, setSize] = useState('42')
    const [color, setColor] = useState('blue')
    const [isAdded, setIsAdded] = useState(false)

    // Using Blue shades for the product to match theme
    const colors = [
        { name: 'blue', class: 'bg-blue-600', bgFrom: 'from-blue-100', bgTo: 'to-slate-50' },
        { name: 'dark', class: 'bg-slate-900', bgFrom: 'from-slate-200', bgTo: 'to-gray-100' }
    ]
    const currentColor = colors.find(c => c.name === color) || colors[0]

    const addToCart = () => {
        if (loading) return
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setCartCount(c => c + 1)
            setIsAdded(true)
            setTimeout(() => setIsAdded(false), 2000)
        }, 600)
    }

    return (
        <div className="w-full h-full bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden flex flex-col font-sans relative select-none">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 pointer-events-none">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ring-1 ring-black/5 text-slate-800">New</span>
                <div className="relative pointer-events-auto cursor-pointer group" onClick={() => setCartCount(0)}>
                    <div className="w-9 h-9 rounded-full bg-white shadow-md ring-1 ring-black/5 flex items-center justify-center text-slate-800 transition-transform active:scale-95 hover:text-accent">
                        <ShoppingCart size={16} />
                    </div>
                    <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white ring-2 ring-white text-[10px] font-bold flex items-center justify-center transition-all duration-300 ${cartCount > 0 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                        {cartCount}
                    </span>
                </div>
            </div>

            {/* Product Image Stage */}
            <div className="h-48 relative overflow-hidden transition-colors duration-700">
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${currentColor.bgFrom} ${currentColor.bgTo}`} />

                {/* Product */}
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={() => setColor(color === 'blue' ? 'dark' : 'blue')}>
                    <div className={`w-40 h-24 rounded-2xl shadow-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform ${color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 -rotate-12 translate-y-0 group-hover:-rotate-6' : 'bg-gradient-to-r from-slate-700 to-slate-900 -rotate-6 translate-y-2'} flex items-center justify-center relative`}>
                        <div className="text-white/20 font-display font-black text-4xl italic tracking-tighter mix-blend-overlay">RUN</div>
                    </div>

                    {/* Interaction Feedback */}
                    <div className={`absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-500 ${isAdded ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute top-10 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 p-5 flex flex-col bg-white">
                <div className="flex justify-between items-start mb-1">
                    <div>
                        <h4 className="font-display font-bold text-slate-900 text-lg tracking-tight">Qomio Runner</h4>
                        <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">Performance Series</div>
                    </div>
                    <span className="font-mono font-bold text-slate-800 text-lg">€149</span>
                </div>

                {/* Selectors */}
                <div className="mt-4 mb-5 space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase w-8">Color</span>
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
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase w-8">Size</span>
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
                    className="mt-auto w-full h-11 bg-[#2563EB] hover:bg-blue-700 active:scale-[0.98] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-90 shadow-lg shadow-blue-500/20"
                >
                    {loading ? (
                        <Loader2 size={16} className="animate-spin" />
                    ) : isAdded ? (
                        <div className="flex items-center gap-2 animate-in zoom-in duration-300">
                            <CheckSquare size={16} className="text-white" />
                            <span>Added</span>
                        </div>
                    ) : (
                        <>
                            <span>Add to Cart</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

// --- 4. INTERACTIVE ENTERPRISE WIDGET (NEW) ---
export function EnterpriseWidget() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'API Integration', status: 'done', tag: 'Backend' },
        { id: 2, title: 'User Migration', status: 'review', tag: 'Database' },
        { id: 3, title: 'Q3 Reporting', status: 'todo', tag: 'Finance' }
    ])

    const moveTask = (id: number) => {
        setTasks(prev => prev.map(t => {
            if (t.id !== id) return t
            const nextStatus = t.status === 'todo' ? 'review' : t.status === 'review' ? 'done' : 'todo'
            return { ...t, status: nextStatus }
        }))
    }

    const getStatusColor = (s: string) => {
        if (s === 'done') return 'bg-emerald-50 text-emerald-600 border-emerald-100'
        if (s === 'review') return 'bg-amber-50 text-amber-600 border-amber-100'
        return 'bg-slate-50 text-slate-500 border-slate-100'
    }

    const getColConfig = (status: string) => {
        return tasks.filter(t => t.status === status)
    }

    return (
        <div className="w-full h-full bg-slate-50 rounded-xl shadow-sm border border-black/5 overflow-hidden flex flex-col font-sans select-none">
            {/* Toolbar */}
            <div className="h-12 border-b border-black/5 flex items-center px-4 justify-between bg-white pl-16 relative">
                {/* Sidebar dummy */}
                <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-black/5 bg-slate-100/50 flex flex-col items-center py-3 gap-3">
                    <div className="w-6 h-6 rounded bg-slate-200" />
                    <div className="w-6 h-6 rounded bg-blue-100 border border-blue-200" />
                    <div className="w-6 h-6 rounded bg-slate-200" />
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-700">Sprint Board</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-500">v2.4</span>
                </div>
                <button className="bg-[#2563EB] text-white p-1.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                    <Plus size={14} />
                </button>
            </div>

            {/* Kanban Board */}
            <div className="flex-1 p-4 grid grid-cols-3 gap-3 overflow-hidden ml-12">
                {['todo', 'review', 'done'].map((status) => (
                    <div key={status} className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                {status === 'todo' ? 'To Do' : status === 'review' ? 'In Review' : 'Done'}
                            </span>
                            <span className="text-[10px] font-mono text-slate-300 bg-slate-100 px-1.5 rounded-full">{getColConfig(status).length}</span>
                        </div>

                        <div className="flex-1 bg-slate-100/50 rounded-lg p-2 space-y-2 border border-black/5">
                            {getColConfig(status).map(task => (
                                <div
                                    key={task.id}
                                    onClick={() => moveTask(task.id)}
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
                                        <span className="text-[9px] text-slate-400 font-medium">Due Today</span>
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
    )
}
