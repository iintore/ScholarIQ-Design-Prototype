
import React, { useState, useEffect } from 'react';
import { LogOut, RotateCcw } from 'lucide-react';

type StudentViewState = 'landing' | 'ready' | 'reading' | 'feedback_good' | 'feedback_retry';

const PASSAGES = [
  "Uburyo gakondo bwo gusudira butanga imyotsi n’uduce duto twangiza ubuzima bw’abasudira. Sisitemu zisanzwe zo gukuramo imyotsi yo gusudira akenshi ziba nini, zidatwarwa byoroshye.",
  "Gusoma ni ryo shingiro ry'umumenyi n'amajyambere y'umwana mu ishuri. Umwana uzi gusoma neza agira icyizere kandi akiga andi masomo bitamugoye.",
  "Ikinyarwanda ni rurimi rwiza kandi rukungahaye. Kugira ngo umwana arusobanukirwe neza, agomba gutangira kurusoma akiri muto binyuze mu nkuru z'abana."
];

const StudentExperience: React.FC = () => {
  const [viewState, setViewState] = useState<StudentViewState>('landing');
  const [readingProgress, setReadingProgress] = useState(0);
  const [passageIndex, setPassageIndex] = useState(0);
  const [animating, setAnimating] = useState<null | 'next' | 'retry'>(null);

  useEffect(() => {
    let interval: any;
    if (viewState === 'reading') {
      interval = setInterval(() => {
        setReadingProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 120);
    }
    return () => clearInterval(interval);
  }, [viewState]);

  const handleFinishReading = () => {
    const isSuccess = readingProgress > 80;
    setViewState(isSuccess ? 'feedback_good' : 'feedback_retry');
  };

  const handleNextPassage = () => {
    setAnimating('next');
    setTimeout(() => {
      setPassageIndex((prev) => (prev + 1) % PASSAGES.length);
      setViewState('ready');
      setReadingProgress(0);
      setAnimating(null);
    }, 600);
  };

  const Header = () => (
    <header className="px-12 py-10 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="flex items-center gap-2">
         <h1 className="text-2xl font-bold tracking-tight text-black">ScholarIQ</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3.5">
          <img src="https://picsum.photos/seed/ishimwe/128/128" className="w-10 h-10 rounded-full object-cover grayscale border border-gray-100" alt="Profile" />
          <span className="text-[14px] font-bold text-gray-800">Ishimwe Peter</span>
        </div>
        <LogOut size={20} className="text-gray-300 hover:text-black cursor-pointer transition-colors" />
      </div>
    </header>
  );

  if (viewState === 'landing') {
    return (
      <div className="min-h-screen bg-white flex flex-col animate-in fade-in duration-500">
        <Header />
        <main className="flex-1 flex overflow-hidden">
          <aside className="w-[360px] bg-gray-50/40 border-r border-gray-100 p-10 flex flex-col">
            <div className="mb-10 px-1">
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Active Students</h3>
              <p className="text-sm text-gray-400 leading-tight font-medium">Identify yourself to begin the session</p>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto pr-3 custom-scrollbar">
              {[
                { name: 'Alex Ntaganda', initial: 'XT', color: 'bg-indigo-500' },
                { name: 'Bernice Keza', initial: 'BK', color: 'bg-emerald-500' },
                { name: 'Claude Isimbi', initial: 'CI', color: 'bg-orange-500' },
                { name: 'Divine Uwase', initial: 'DU', color: 'bg-rose-500' },
                { name: 'Eric Mucyo', initial: 'EM', color: 'bg-amber-500' },
              ].map((s, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer ${i === 0 ? 'bg-white border border-gray-100' : 'hover:bg-gray-100'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-[11px] text-white ${s.color}`}>
                    {s.initial}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[15px] text-gray-900 leading-none">{s.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
          <section className="flex-1 p-16 bg-white overflow-y-auto">
            <h2 className="text-3xl font-bold mb-10 text-gray-900 tracking-tight">Current Assignments</h2>
            <div 
              onClick={() => setViewState('ready')}
              className="bg-white p-12 rounded-2xl border border-gray-100 hover:border-gray-900 transition-all cursor-pointer max-w-3xl group no-shadow"
            >
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                   <h3 className="text-[28px] font-bold text-gray-900 leading-tight group-hover:text-black">Gusoma Igihekane "mba"</h3>
                   <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-[10px] font-bold uppercase tracking-widest">New</span>
                </div>
                <p className="text-gray-500 text-[17px] leading-relaxed font-medium italic">Traditional welding processes generate harmful fumes and particulates that pose health risks to welders. Existing fume extraction systems are often bulky...</p>
                <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                  <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/seed/teacher/96/96" className="w-12 h-12 rounded-full border border-gray-50" alt="Teacher" />
                    <div>
                      <p className="text-[14px] font-bold text-gray-800 leading-none mb-1">Alex Ntaganda</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Kinyarwanda Teacher</p>
                    </div>
                  </div>
                  <button className="bg-black text-white px-8 py-3.5 rounded-2xl text-[13px] font-bold hover:scale-[1.05] transition-transform">Start Mission</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (viewState === 'ready' || viewState === 'reading') {
    return (
      <div className="min-h-screen bg-white flex flex-col animate-in fade-in duration-500">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-12 relative overflow-hidden">
          {/* Sideways Passage Carousel Container */}
          <div className="passage-carousel-container flex justify-center mb-16 px-12">
            <div className={`w-full max-w-3xl bg-white border border-gray-100 rounded-2xl p-20 shadow-none text-center ${animating === 'next' ? 'passage-slide-out' : 'passage-slide-in'}`}>
              <p className="text-[32px] font-medium leading-[1.7] text-gray-800 tracking-tight italic">
                {PASSAGES[passageIndex]}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-12 z-10">
            <button 
              onClick={viewState === 'ready' ? () => setViewState('reading') : handleFinishReading}
              className={`px-12 py-5 text-base font-bold rounded-2xl shadow-2xl transition-all uppercase tracking-[0.2em] active:scale-95 border-2 ${
                viewState === 'ready' ? 'bg-black text-white border-black hover:bg-gray-900' : 'bg-white text-black border-gray-200 hover:bg-gray-50'
              }`}
            >
              {viewState === 'ready' ? 'Tangira Gusoma' : 'Soza Gusoma'}
            </button>

            {/* Reading Waveform Visualization */}
            <div className="flex items-center justify-center gap-2 h-20 w-full max-w-4xl px-20">
              {Array.from({ length: 60 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-[14px] bg-black rounded-full transition-all duration-300 ${viewState === 'reading' ? 'opacity-100' : 'opacity-100'}`}
                  style={{ 
                    height: viewState === 'reading' ? `${10 + Math.random() * 90}%` : (i % 8 === 0 ? '6px' : '48px'),
                    opacity: i % 12 === 0 ? 0.3 : 1
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Dotted indicator background footer */}
          <div className="absolute bottom-16 left-0 right-0 flex items-center justify-center gap-3">
             {[0, 1, 2].map(i => (
               <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all ${i === passageIndex ? 'bg-black scale-125' : 'bg-gray-200'}`}></div>
             ))}
          </div>
        </main>
      </div>
    );
  }

  const isGood = viewState === 'feedback_good';
  return (
    <div className="min-h-screen bg-white flex flex-col animate-in fade-in duration-500">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-12 relative">
        <div className="text-center space-y-3 mb-12">
           <h2 className="text-[42px] font-bold text-black tracking-tighter leading-none">
             {isGood ? 'Ukoze Neza Cyane!' : 'Ongera Ugerageze'}
           </h2>
           <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em]">
             {isGood ? 'Your reading was exceptional' : 'Keep practicing to master this passage'}
           </p>
        </div>

        {/* Improved Score Card - White, 16px radius */}
        <div className={`w-[450px] p-10 rounded-2xl border shadow-none space-y-8 mb-12 text-sm ${isGood ? 'bg-[#F2FAF6] border-emerald-100' : 'bg-[#FFF9F2] border-orange-100'}`}>
           <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
              <span className={isGood ? 'text-emerald-500' : 'text-orange-400'}>Session Summary</span>
              <span className="px-4 py-1.5 bg-white rounded-xl text-[10px] border border-gray-100 text-gray-500 font-bold uppercase tracking-widest no-shadow">Submitted</span>
           </div>
           <div className="space-y-6">
             <div className="flex justify-between items-center">
                <span className="font-bold text-gray-500 text-base">Accuracy Score</span>
                <span className={`font-bold text-[28px] tracking-tight ${isGood ? 'text-emerald-500' : 'text-orange-500'}`}>{isGood ? '88%' : '48%'}</span>
             </div>
             <div className="flex justify-between items-center border-t border-gray-200/40 pt-6">
                <span className="font-bold text-gray-500 text-base">Fluency Level</span>
                <span className={`font-bold text-[28px] tracking-tight ${isGood ? 'text-emerald-500' : 'text-orange-500'}`}>{isGood ? 'Advanced' : 'Needs Practice'}</span>
             </div>
           </div>
        </div>

        {/* Mascot Section with Enhanced Animations */}
        <div className="flex flex-col items-center gap-14 relative w-full">
           <div className="relative">
              <div className={`text-[180px] leading-none transition-all duration-700 select-none ${isGood ? 'animate-mascot-happy' : 'animate-mascot-sad'}`}>
                 {isGood ? '😎🦆' : '🐥'}
              </div>
              {isGood && (
                <div className="absolute -top-10 -right-10 text-4xl animate-bounce">✨</div>
              )}
           </div>

           <button 
             onClick={isGood ? handleNextPassage : () => setViewState('ready')}
             className="px-16 py-6 bg-black text-white text-base font-bold rounded-2xl shadow-2xl hover:bg-gray-900 transition-all uppercase tracking-[0.2em] active:scale-95"
           >
             {isGood ? 'Gukomeza (Next)' : 'Ongera Ugerageze (Retry)'}
           </button>
        </div>

        {/* Dotted Waveform Footer Base */}
        <div className="absolute bottom-16 left-0 right-0 px-20 flex items-center justify-center gap-2.5 overflow-hidden">
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} className="w-[12px] h-[12px] bg-black rounded-full shrink-0"></div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentExperience;
