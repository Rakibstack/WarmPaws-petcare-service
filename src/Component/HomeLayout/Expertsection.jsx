import React from 'react';

const Expertsection = () => {
    return (
       
         <div className="py-12 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
      <h2 className="text-3xl font-bold text-white mb-10">🐾 Meet Our Expert Vets</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full">

        {/* Expert 1 */}
        <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
          <img
            src="https://i.ibb.co.com/NndJmTZK/Screenshot-2025-10-22-214428.png"
            alt="Dr. Sofia"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-slate-700"
          />
          <h2 className="text-xl font-semibold text-white">Dr. Sofia Rahman</h2>
          <p className="text-slate-300 text-sm mt-1">Veterinary Consultant</p>
          <p className="text-purple-400 font-medium mt-2">8+ Years Experience</p>
        </div>

        {/* Expert 2 */}
        <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
          <img
            src="https://i.ibb.co.com/chfBQ94F/Screenshot-2025-10-22-220807.png"
            alt="Alex Karim"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-slate-700"
          />
          <h2 className="text-xl font-semibold text-white">Alex Karim</h2>
          <p className="text-slate-300 text-sm mt-1">Cat Grooming Specialist</p>
          <p className="text-cyan-400 font-medium mt-2">5+ Years Experience</p>
        </div>

        {/* Expert 3 */}
        <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
          <img
            src="https://i.ibb.co.com/FbG5S9g0/Screenshot-2025-10-22-221038.png"
            alt="Nadia Akter"
            className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-slate-700"
          />
          <h2 className="text-xl font-semibold text-white">Nadia Akter</h2>
          <p className="text-slate-300 text-sm mt-1">Small Pet Care Trainer</p>
          <p className="text-pink-400 font-medium mt-2">6+ Years Experience</p>
        </div>

      </div>
    </div>
    );
};

export default Expertsection;