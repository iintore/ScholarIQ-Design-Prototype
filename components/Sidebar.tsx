
import React from 'react';
import { Home, BarChart2, BookOpen, Settings, HelpCircle, ChevronDown, Layout } from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  role: UserRole;
  currentView: string;
  onNavigate: (view: string) => void;
  selectedClass: string;
  onClassChange: (className: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, currentView, onNavigate, selectedClass, onClassChange }) => {
  const isTeacher = role === UserRole.TEACHER;

  return (
    <div className="w-[280px] bg-white border-r border-gray-100 h-screen sticky top-0 flex flex-col pt-10 pb-8">
      <div className="px-8 mb-12 flex items-center justify-between">
        <h1 className="text-[22px] font-bold text-black tracking-tight">ScholarIQ</h1>
        <button className="text-gray-300">
          <Layout size={20} />
        </button>
      </div>

      <div className="px-6 mb-10">
        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 block px-2">
          {isTeacher ? 'Current Class' : 'Your Child'}
        </label>
        <button className="w-full flex items-center justify-between p-3 bg-white border border-gray-100 rounded-2xl hover:border-gray-300 transition-all">
          <div className="flex items-center gap-3">
            <img 
              src={isTeacher ? "https://picsum.photos/seed/p3/48/48" : "https://picsum.photos/seed/child1/48/48"} 
              className="w-8 h-8 rounded-full object-cover border border-gray-50" 
              alt="Avatar" 
            />
            <span className="text-[13px] font-bold text-gray-800">{isTeacher ? selectedClass : 'Mugisha Pacifique'}</span>
          </div>
          <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block px-4">Main Menu</label>
        <button
          onClick={() => onNavigate('home')}
          className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all ${
            currentView === 'home' ? 'bg-[#F4F4F4] text-black' : 'text-gray-400 hover:bg-gray-50 hover:text-black'
          }`}
        >
          <Home size={18} />
          Home
        </button>
        <button
          onClick={() => onNavigate('students')}
          className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all ${
            currentView === 'students' ? 'bg-[#F4F4F4] text-black' : 'text-gray-400 hover:bg-gray-50 hover:text-black'
          }`}
        >
          <BarChart2 size={18} />
          {isTeacher ? 'Students' : 'Student Performance'}
        </button>
        <button
          onClick={() => onNavigate('assignments')}
          className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[13px] font-bold transition-all ${
            currentView === 'assignments' ? 'bg-[#F4F4F4] text-black' : 'text-gray-400 hover:bg-gray-50 hover:text-black'
          }`}
        >
          <BookOpen size={18} />
          Assignment
        </button>
      </nav>

      <div className="px-4 space-y-1 pt-6 border-t border-gray-50">
        <button className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13px] font-bold text-gray-400 hover:bg-gray-50">
          <Settings size={18} />
          Settings
        </button>
        <button className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl text-[13px] font-bold text-gray-400 hover:bg-gray-50">
          <HelpCircle size={18} />
          Help Center
        </button>
        <div className="mt-6 pt-6 px-4">
          <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/seed/ishimwe/64/64" className="w-10 h-10 rounded-full grayscale border border-gray-100" alt="User" />
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-gray-800 leading-none">Ishimwe Peter</span>
              </div>
            </div>
            <ChevronDown size={14} className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
