
import React, { useState } from 'react';
import { UserRole } from './types.ts';
import Sidebar from './components/Sidebar.tsx';
import TeacherDashboard from './components/TeacherDashboard.tsx';
import ParentDashboard from './components/ParentDashboard.tsx';
import StudentExperience from './components/StudentExperience.tsx';
import Header from './components/Header.tsx';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.TEACHER);
  const [currentView, setCurrentView] = useState('home');
  const [selectedClass, setSelectedClass] = useState('Primary Three');

  const renderDashboard = () => {
    switch (role) {
      case UserRole.TEACHER:
        return (
          <TeacherDashboard 
            view={currentView} 
            selectedClass={selectedClass} 
            onNavigate={setCurrentView}
          />
        );
      case UserRole.PARENT:
        return <ParentDashboard view={currentView} />;
      case UserRole.STUDENT:
        return <StudentExperience />;
      default:
        return (
          <TeacherDashboard 
            view={currentView} 
            selectedClass={selectedClass} 
            onNavigate={setCurrentView}
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FDFDFD] text-black">
      {/* Prototype Role Switcher */}
      <div className="fixed bottom-8 right-8 z-[200] flex gap-2 bg-white/90 backdrop-blur-xl p-2 rounded-[24px] shadow-2xl border border-gray-200/50">
        {(Object.keys(UserRole) as Array<keyof typeof UserRole>).map((r) => (
          <button
            key={r}
            onClick={() => {
              setRole(UserRole[r]);
              setCurrentView('home');
            }}
            className={`px-6 py-3 rounded-[18px] text-xs font-bold tracking-tight transition-all duration-500 ${
              role === UserRole[r] 
                ? 'bg-black text-white shadow-xl scale-105' 
                : 'bg-transparent text-gray-400 hover:text-black hover:bg-gray-50'
            }`}
          >
            {r.charAt(0) + r.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {role !== UserRole.STUDENT && (
        <Sidebar 
          role={role} 
          currentView={currentView} 
          onNavigate={setCurrentView} 
          selectedClass={selectedClass}
          onClassChange={setSelectedClass}
        />
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {role !== UserRole.STUDENT && (
          <Header 
            role={role} 
            selectedClass={selectedClass} 
            view={currentView} 
          />
        )}
        <main className={`${role === UserRole.STUDENT ? '' : 'px-16 pb-20 pt-4'}`}>
          <div className="max-w-7xl mx-auto">
            {renderDashboard()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
