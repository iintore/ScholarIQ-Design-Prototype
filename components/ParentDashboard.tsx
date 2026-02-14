
import React from 'react';
import { Flame, Trophy, Activity, BookOpen, Mic2, ChevronRight, Edit2, PencilLine } from 'lucide-react';

interface ParentDashboardProps {
  view: string;
}

const ParentDashboard: React.FC<ParentDashboardProps> = ({ view }) => {
  if (view === 'students') {
    return (
      <div className="animate-in fade-in duration-500 max-w-5xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl border border-gray-100 p-10 flex items-center justify-between shadow-none">
          <div className="flex items-center gap-6">
            <img src="https://picsum.photos/seed/child/120/120" className="w-20 h-20 rounded-full object-cover grayscale border border-gray-100" alt="Child" />
            <div>
              <h2 className="text-[28px] font-bold text-gray-900 tracking-tight leading-none mb-2">Mugisha Pacifique</h2>
              <div className="flex items-center gap-3">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em]">Primary One</p>
                <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em]">Student ID: 4023</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-3 border border-gray-100 rounded-2xl text-[13px] font-bold flex items-center gap-2.5 hover:bg-gray-50 transition-colors">
            <Edit2 size={16} /> Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-none">
            <div className="flex items-center gap-5 mb-12">
              <div className="solid-icon-sq bg-[#FF5C00]">
                <Mic2 />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 leading-none mb-1.5">Reading Practices</h3>
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.15em] uppercase">Weekly Progress Overview</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Completed', val: '40 Practices', color: 'text-emerald-500' },
                { label: 'Skipped', val: '3 Practices', color: 'text-gray-400' },
                { label: 'Failed', val: '4 Practices', color: 'text-red-400' }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center text-[14px] font-bold">
                  <span className="text-gray-400 uppercase text-[11px] tracking-tight">{row.label}</span>
                  <span className={`font-bold ${row.color}`}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-10 shadow-none">
            <div className="flex items-center gap-5 mb-12">
              <div className="solid-icon-sq bg-[#007AFF]">
                <BookOpen />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 leading-none mb-1.5">Assignments</h3>
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.15em] uppercase">Teacher Assigned Tasks</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Completed', val: '12 Assignments', color: 'text-emerald-500' },
                { label: 'Pending', val: '2 Assignments', color: 'text-orange-400' },
                { label: 'Overdue', val: '0 Assignments', color: 'text-gray-400' }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center text-[14px] font-bold">
                  <span className="text-gray-400 uppercase text-[11px] tracking-tight">{row.label}</span>
                  <span className={`font-bold ${row.color}`}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      {/* Top Section: Stats Cards and School Info */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 flex gap-6">
          {/* Streak Card */}
          <div className="flex-1 bg-white rounded-[24px] p-10 border border-gray-100 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 rounded-full bg-[#FFF5F1] flex items-center justify-center mb-6">
                <Flame size={28} className="text-[#FF5C00] fill-[#FF5C00]" />
                <span className="absolute ml-8 mb-8 text-[#FF5C00] font-bold text-lg">5</span>
             </div>
             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Streaks</p>
          </div>
          {/* Achievements Card */}
          <div className="flex-1 bg-white rounded-[24px] p-10 border border-gray-100 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 rounded-full bg-[#F0F7FF] flex items-center justify-center mb-6">
                <Trophy size={28} className="text-[#007AFF] fill-[#007AFF]" />
             </div>
             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Achievements</p>
          </div>
          {/* Practices Card */}
          <div className="flex-1 bg-white rounded-[24px] p-10 border border-gray-100 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 rounded-full bg-[#F0F9FF] flex items-center justify-center mb-6">
                <span className="text-[28px] font-bold text-[#007AFF]">21</span>
             </div>
             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Practices</p>
          </div>
        </div>
        
        {/* School Info Card */}
        <div className="col-span-12 lg:col-span-4 bg-[#F8F9FA] rounded-[24px] p-10 border border-gray-50 flex flex-col justify-center">
          <div className="mb-6">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Your School</p>
            <p className="text-xl font-bold text-gray-900 leading-tight">Ecole Adventiste Kigali</p>
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Your Class</p>
            <p className="text-2xl font-bold text-gray-900 leading-none">P2 A</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Left Column: Recent Assignments (Gray container with white cards) */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <div className="container-gray p-10 space-y-6">
            <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Recent Assignments</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col gap-6 cursor-pointer hover:border-gray-300 transition-all">
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-gray-900 tracking-tight">Gusoma Igihekane "mba"</h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed italic line-clamp-2">
                      Traditional welding processes generate harmful fumes and particulates that pose health risks to welders. Existing fume extraction systems are often bulky, stationary, and require access to an external power source. This project aims to develop a portable, solar-powered welding fume...
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-3">
                      <img src={`https://picsum.photos/seed/t${i}/64/64`} className="w-8 h-8 rounded-full border border-gray-50 grayscale" alt="Teacher" />
                      <div>
                        <p className="text-[13px] font-bold text-gray-800 leading-none">Alex Ntaganda</p>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Teacher</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-400 font-bold">Submit by Jan 12</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 pl-1 tracking-tight">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-[20px] hover:border-black transition-all text-left group">
              <div className="w-14 h-14 bg-[#FFF5F1] rounded-2xl flex items-center justify-center">
                <Mic2 size={24} className="text-[#FF5C00]" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[16px] text-gray-900 leading-none mb-1">Reading Practices</p>
                <p className="text-[12px] text-gray-400 font-medium">View your child's practices</p>
              </div>
              <ChevronRight size={18} className="text-gray-300 group-hover:text-black transition-colors" />
            </button>
            <button className="w-full flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-[20px] hover:border-black transition-all text-left group">
              <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center">
                <PencilLine size={24} className="text-[#22C55E]" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[16px] text-gray-900 leading-none mb-1">Pending Assignments</p>
                <p className="text-[12px] text-gray-400 font-medium">See your child's assignments</p>
              </div>
              <ChevronRight size={18} className="text-gray-300 group-hover:text-black transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
