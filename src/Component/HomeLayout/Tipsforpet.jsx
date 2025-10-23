import React from 'react';

const Tipsforpet = () => {
    return (
        <div className='pb-8'>
            <h2 className='text-[#2D6A4F] text-center font-extrabold text-4xl mb-4'>Winter Care Tips for Pets.</h2>
            <div className='py-5'>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">

                    <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">🐶</span>
                            <h2 className="text-lg font-semibold text-slate-100">Keep them warm with layered bedding</h2>
                        </div>
                        <p className="text-slate-300 text-sm mb-3">
                            Provide insulated bedding off cold floors and add a warm blanket.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">#bedding</span>
                            <span className="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-full">#warmth</span>
                            <span className="bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded-full">#sweater</span>
                        </div>
                    </div>


                    <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl hover:shadow-cyan-400/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">🐱</span>
                            <h2 className="text-lg font-semibold text-slate-100">Watch for cold-related behavior changes</h2>
                        </div>
                        <p className="text-slate-300 text-sm mb-3">
                            Reduced activity or hiding can signal the cat is too cold or unwell.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-emerald-600/20 text-emerald-300 px-2 py-1 rounded-full">#behavior</span>
                            <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full">#health</span>
                            <span className="bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded-full">#warm-spots</span>
                        </div>
                    </div>


                    <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">🐹</span>
                            <h2 className="text-lg font-semibold text-slate-100">Protect against drafts & humidity</h2>
                        </div>
                        <p className="text-slate-300 text-sm mb-3">
                            Small pets lose heat quickly; avoid damp, drafty hutches.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-pink-600/20 text-pink-300 px-2 py-1 rounded-full">#hutch</span>
                            <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">#insulation</span>
                            <span className="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-full">#water</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Tipsforpet;