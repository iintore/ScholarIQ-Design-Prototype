
import React from 'react';
import { UserRole } from '../types';

interface HeaderProps {
  role: UserRole;
  selectedClass?: string;
  view: string;
}

const Header: React.FC<HeaderProps> = ({ role, view, selectedClass }) => {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).toUpperCase();
  const timeOfDay = now.getHours() < 12 ? 'morning' : now.getHours() < 18 ? 'afternoon' : 'evening';

  const getPageTitle = () => {
    if (view === 'home') return `Good ${timeOfDay}, ${role === UserRole.TEACHER ? 'Teacher' : 'Peter'}`;
    if (view === 'students') return `Students in ${selectedClass}`;
    if (view === 'assignments') return 'Assignments';
    if (view === 'create-assignment') return 'New Assignment';
    return view.charAt(0).toUpperCase() + view.slice(1);
  };

  return (
    <header className="px-16 pt-10 pb-6 flex items-center justify-between">
      <div className="flex flex-col">
        <p className="text-[11px] font-bold text-gray-400 tracking-widest mb-1">{dateStr}</p>
        <h2 className="text-[28px] font-bold text-black tracking-tight leading-none">
          {getPageTitle()}
        </h2>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-[14px] hover:border-gray-300 transition-all shadow-sm">
          <div className="w-5 h-5 flex items-center justify-center overflow-hidden rounded-full border border-gray-50">
            <img src="https://flagcdn.com/us.svg" alt="English" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-bold text-gray-700">English</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
