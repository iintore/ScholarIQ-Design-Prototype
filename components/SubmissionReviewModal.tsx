
import React, { useState } from 'react';
import { X, Play, Volume2, CheckCircle2, AlertCircle } from 'lucide-react';

interface SubmissionReviewModalProps {
  submission: any;
  onClose: () => void;
}

const SubmissionReviewModal: React.FC<SubmissionReviewModalProps> = ({ submission, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 350);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white w-full max-w-[640px] h-full shadow-2xl flex flex-col transition-transform duration-400 ease-out overflow-y-auto ${isClosing ? 'translate-x-full' : 'translate-x-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 p-10 space-y-10">
          <section className="bg-white border border-gray-100 rounded-[24px] p-8 flex items-center gap-6">
            <div className="w-16 h-16 rounded-[16px] bg-[#4481F6] flex items-center justify-center font-bold text-white text-[22px]">
              MR
            </div>
            <div>
              <h2 className="text-[22px] font-bold text-gray-900 tracking-tight leading-none mb-2">Manzi Ruben</h2>
              <p className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em]">PRIMARY THREE - SECTION A</p>
            </div>
          </section>

          <div className="flex justify-between items-center px-1">
            <span className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em]">ASSIGNMENT DETAILS</span>
            <span className="text-[13px] font-bold text-gray-900 tracking-tight">Gusoma igihekane "MPA"</span>
          </div>

          <section className="bg-white border border-gray-100 rounded-[24px] p-10 space-y-10">
            <div className="flex items-start">
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.15em]">AUTO AI SCORE</p>
                <p className="text-[44px] font-bold text-[#00BF72] leading-none tracking-tight">88%</p>
              </div>
            </div>

            <div className="bg-[#F8F9FA] rounded-[24px] p-8 space-y-6">
              <div className="flex items-center gap-6">
                <button className="w-12 h-12 bg-black text-white rounded-[16px] flex items-center justify-center transition-transform active:scale-95">
                  <Play size={20} fill="white" className="ml-1" />
                </button>
                <div className="flex-1 h-10 flex items-center gap-1 px-2">
                  {Array.from({length: 30}).map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gray-200 rounded-full" 
                      style={{ height: `${20 + Math.random() * 80}%`, opacity: i % 8 === 0 ? 0.3 : 1 }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center px-1">
                <span className="text-[12px] font-bold text-gray-400 tracking-tight">00:00 / 02:45</span>
                <div className="flex items-center gap-4">
                   <Volume2 size={18} className="text-gray-400" />
                   <button className="px-4 py-1.5 bg-white border border-gray-100 rounded-[12px] text-[11px] font-bold text-gray-600">1.0X</button>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFAF5] border border-[#FFEDDC] rounded-[24px] p-8 relative">
               <div className="absolute top-8 right-8 opacity-10">
                  <AlertCircle size={32} className="text-[#FF8A00]" />
               </div>
               <p className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-[0.2em] mb-4">AI AUDIO TRANSCRIPT:</p>
               <p className="text-[18px] font-medium text-[#7C4D00] leading-[1.6] italic">
                 "Ndikwiga ikinyanda neza nkorasha ikoranabuhanga..."
               </p>
            </div>
          </section>

          <section className="space-y-4">
            <label className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em] px-1">ADJUST SCORE (%)</label>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="88"
                className="w-full p-6 bg-[#FBFBFB] border border-gray-100 rounded-[16px] outline-none focus:border-black transition-all text-[18px] font-bold text-gray-900" 
              />
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-300 font-bold text-lg">%</span>
            </div>
          </section>

          <section className="space-y-4">
            <label className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em] px-1">PERSONALIZED FEEDBACK</label>
            <textarea 
              className="w-full h-36 p-6 bg-[#FBFBFB] border border-gray-100 rounded-[16px] outline-none focus:border-black transition-all resize-none text-[15px] font-medium leading-relaxed" 
              placeholder="Write a supportive message for Manzi..." 
            />
          </section>

          <div className="pt-2">
            <button 
              onClick={handleClose}
              className="w-full py-5 bg-black text-white rounded-[20px] font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all active:scale-[0.98]"
            >
              <CheckCircle2 size={20} />
              Finalize & Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionReviewModal;
