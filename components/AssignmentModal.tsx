
import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Upload, BookText as BookIcon } from 'lucide-react';

interface AssignmentModalProps {
  onClose: () => void;
}

const AssignmentModal: React.FC<AssignmentModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    topic: '',
    passage: '',
    dueDate: ''
  });
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 350); // Match animation duration
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white w-full max-w-[680px] h-full shadow-2xl flex flex-col transition-transform duration-400 ease-out ${isClosing ? 'translate-x-full' : 'translate-x-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-12 py-10 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${step >= 1 ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                {step > 1 ? <Check size={20} /> : <BookIcon size={20} />}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-0.5">Step 01</p>
                <p className={`text-[14px] font-bold ${step === 1 ? 'text-black' : 'text-gray-400'}`}>Content</p>
              </div>
            </div>
            <div className="w-10 h-[1px] bg-gray-100"></div>
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${step >= 2 ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
                {step > 2 ? <Check size={20} /> : <Check size={20} />}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-0.5">Step 02</p>
                <p className={`text-[14px] font-bold ${step === 2 ? 'text-black' : 'text-gray-400'}`}>Review</p>
              </div>
            </div>
          </div>
          <button onClick={handleClose} className="w-12 h-12 bg-gray-50 hover:bg-black hover:text-white rounded-2xl flex items-center justify-center transition-all group">
            <X size={24} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
          {step === 1 ? (
            <div className="space-y-12">
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Assignment Title</label>
                <input 
                  type="text" 
                  placeholder="e.g. Gusoma Igihekane 'MPA'"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  className="w-full px-7 py-5 bg-[#F9F9F9] border border-gray-100 rounded-2xl text-[16px] font-bold outline-none focus:border-black focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Passage Content</label>
                <textarea 
                  placeholder="Paste or type the Kinyarwanda reading passage here..."
                  value={formData.passage}
                  onChange={(e) => setFormData({...formData, passage: e.target.value})}
                  className="w-full h-80 p-8 bg-[#F9F9F9] border border-gray-100 rounded-2xl focus:border-black focus:bg-white outline-none transition-all resize-none text-[16px] leading-relaxed font-medium italic"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Attachments</label>
                <div className="border-2 border-dashed border-gray-100 rounded-2xl p-12 flex flex-col items-center justify-center gap-5 bg-[#FAFAFA] hover:bg-white hover:border-black transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-50 group-hover:bg-black group-hover:text-white transition-all">
                    <Upload size={28} />
                  </div>
                  <div className="text-center">
                    <p className="text-[15px] font-bold text-gray-900 mb-1">Upload Document</p>
                    <p className="text-[12px] text-gray-400 font-medium">PDF, DOCX or TXT files supported</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              <div className="bg-gray-50/50 p-10 rounded-2xl border border-gray-100">
                <h2 className="text-[28px] font-bold text-gray-900 mb-6 leading-tight">{formData.topic || 'Untitled Assignment'}</h2>
                <div className="w-full h-[1px] bg-gray-200 mb-8"></div>
                <p className="text-xl text-gray-600 leading-relaxed italic font-medium">"{formData.passage || 'No passage content provided...'}"</p>
              </div>
              <div className="p-8 border border-gray-100 rounded-2xl space-y-4">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Publishing Details</p>
                <div className="flex justify-between items-center text-sm font-bold">
                   <span className="text-gray-500">Target Class</span>
                   <span className="text-gray-900">Primary Three - Section A</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                   <span className="text-gray-500">Scheduled Date</span>
                   <span className="text-gray-900">Immediate</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="px-12 py-10 border-t border-gray-100 flex justify-end gap-5 bg-white">
          <button 
            onClick={step === 1 ? handleClose : () => setStep(1)}
            className="px-8 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-[14px] hover:bg-gray-50 transition-colors"
          >
            {step === 1 ? 'Discard' : 'Go Back'}
          </button>
          <button 
            onClick={step === 1 ? () => setStep(2) : handleClose}
            className="px-10 py-4 bg-black text-white rounded-2xl font-bold text-[14px] flex items-center gap-3 hover:bg-gray-900 transition-all active:scale-95 shadow-xl shadow-black/10"
          >
            {step === 1 ? 'Review Details' : 'Confirm & Publish'}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentModal;
