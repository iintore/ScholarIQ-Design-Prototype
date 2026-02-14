
import React, { useState } from 'react';
import { Plus, ChevronRight, BookOpen, UserPlus, Search, Filter, X, ArrowRight, Upload, BookText as BookIcon } from 'lucide-react';
import SubmissionReviewModal from './SubmissionReviewModal.tsx';

// Full Page Assignment Creation Component
const CreateAssignmentView = ({ onBack }: { onBack: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    topic: '',
    passage: '',
    dueDate: ''
  });

  return (
    <div className="animate-in fade-in slide-in-from-right-10 duration-500 bg-white border border-gray-100 rounded-2xl min-h-[700px] flex flex-col">
      <div className="px-12 py-10 border-b border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${step >= 1 ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
              <BookIcon size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-0.5">Step 01</p>
              <p className={`text-[14px] font-bold ${step === 1 ? 'text-black' : 'text-gray-400'}`}>Content</p>
            </div>
          </div>
          <div className="w-10 h-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-4">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${step >= 2 ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>
              <Plus size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-0.5">Step 02</p>
              <p className={`text-[14px] font-bold ${step === 2 ? 'text-black' : 'text-gray-400'}`}>Review</p>
            </div>
          </div>
        </div>
        <button onClick={onBack} className="w-12 h-12 bg-gray-50 hover:bg-black hover:text-white rounded-2xl flex items-center justify-center transition-all">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 p-16 overflow-y-auto">
        {step === 1 ? (
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Assignment Title</label>
              <input 
                type="text" 
                placeholder="e.g. Gusoma Igihekane 'MPA'"
                value={formData.topic}
                onChange={(e) => setFormData({...formData, topic: e.target.value})}
                className="w-full px-7 py-5 bg-[#F9F9F9] border border-gray-100 rounded-2xl text-[18px] font-bold outline-none focus:border-black focus:bg-white transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Reading Passage</label>
                <textarea 
                  placeholder="Paste or type the Kinyarwanda reading passage here..."
                  value={formData.passage}
                  onChange={(e) => setFormData({...formData, passage: e.target.value})}
                  className="w-full h-80 p-8 bg-[#F9F9F9] border border-gray-100 rounded-2xl focus:border-black focus:bg-white outline-none transition-all resize-none text-[16px] leading-relaxed font-medium italic"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Attachment</label>
                <div className="h-80 border-2 border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center gap-5 bg-[#FAFAFA] hover:bg-white hover:border-black transition-all cursor-pointer group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-50 group-hover:bg-black group-hover:text-white transition-all">
                    <Upload size={28} />
                  </div>
                  <div className="text-center">
                    <p className="text-[15px] font-bold text-gray-900 mb-1">Upload Document</p>
                    <p className="text-[12px] text-gray-400 font-medium">PDF, DOCX supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-gray-50/50 p-12 rounded-2xl border border-gray-100 space-y-8">
            <h2 className="text-3xl font-bold">{formData.topic || 'Untitled Assignment'}</h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">"{formData.passage || 'No content provided.'}"</p>
          </div>
        )}
      </div>

      <div className="px-16 py-10 border-t border-gray-50 flex justify-end gap-6">
        <button onClick={onBack} className="px-10 py-4 font-bold text-[14px] text-gray-500 hover:text-black transition-colors">Discard</button>
        <button 
          onClick={step === 1 ? () => setStep(2) : onBack}
          className="px-12 py-4 bg-black text-white rounded-2xl font-bold text-[14px] flex items-center gap-3 active:scale-95 transition-all"
        >
          {step === 1 ? 'Review Details' : 'Publish Assignment'}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

// Simple Add Student Drawer Component
const AddStudentDrawer = ({ onClose }: { onClose: () => void }) => {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 350);
  };
  return (
    <div className={`fixed inset-0 z-[100] flex justify-end bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`} onClick={handleClose}>
      <div className={`bg-white w-full max-w-[600px] h-full shadow-2xl flex flex-col transition-transform duration-400 ease-out ${isClosing ? 'translate-x-full' : 'translate-x-0'}`} onClick={(e) => e.stopPropagation()}>
        <div className="px-12 py-10 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Add New Student</h2>
          <button onClick={handleClose} className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all"><X size={24}/></button>
        </div>
        <div className="flex-1 p-12 space-y-8 overflow-y-auto">
          <div className="space-y-3">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
            <input type="text" placeholder="e.g. Mugisha Jean" className="w-full px-6 py-4 bg-[#F9F9F9] border border-gray-100 rounded-2xl font-bold outline-none focus:border-black transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Gender</label>
              <select className="w-full px-6 py-4 bg-[#F9F9F9] border border-gray-100 rounded-2xl font-bold outline-none focus:border-black appearance-none">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-widest pl-1">Age</label>
              <input type="number" placeholder="7" className="w-full px-6 py-4 bg-[#F9F9F9] border border-gray-100 rounded-2xl font-bold outline-none focus:border-black transition-all" />
            </div>
          </div>
        </div>
        <div className="p-12 border-t border-gray-100">
          <button onClick={handleClose} className="w-full py-5 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all">
            Register Student <ArrowRight size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
};

interface TeacherDashboardProps {
  view: string;
  selectedClass: string;
  onNavigate: (view: string) => void;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ view, selectedClass, onNavigate }) => {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);

  if (view === 'create-assignment') {
    return <CreateAssignmentView onBack={() => onNavigate('home')} />;
  }

  if (view === 'assignments' || view === 'students') {
    return (
      <div className="animate-in fade-in duration-500">
         <div className="flex justify-between items-center mb-10">
            <h1 className="text-[32px] font-bold tracking-tight">
              {view === 'assignments' ? 'Assignments' : `Students in ${selectedClass}`}
            </h1>
            <button 
              onClick={() => view === 'assignments' ? onNavigate('create-assignment') : setShowAddStudentModal(true)}
              className="flex items-center gap-2.5 bg-black text-white px-8 py-3.5 rounded-2xl font-bold text-[14px] transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Plus size={18} /> {view === 'assignments' ? 'New Assignment' : 'Add New Student'}
            </button>
         </div>
         <div className="card-flat p-10">
            <div className="flex items-center gap-5 mb-10">
              <div className="relative flex-1 max-w-lg">
                <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
                <input type="text" placeholder="Search entries..." className="w-full pl-14 pr-8 py-4 bg-[#FBFBFB] border border-gray-100 rounded-2xl text-[14px] font-bold outline-none focus:border-black transition-all" />
              </div>
              <button className="flex items-center gap-3 px-8 py-4 border border-gray-100 rounded-2xl text-[14px] font-bold text-gray-500 hover:bg-gray-50">
                <Filter size={18} /> Filter
              </button>
            </div>
            <table className="w-full text-left">
               <thead>
                  <tr className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em] border-b border-gray-100">
                    <th className="pb-5 pl-5">{view === 'assignments' ? 'Title' : 'Student Name'}</th>
                    <th className="pb-5">{view === 'assignments' ? 'Date Created' : 'Gender'}</th>
                    <th className="pb-5">{view === 'assignments' ? 'Due Date' : 'Age'}</th>
                    <th className="pb-5">{view === 'assignments' ? 'Submissions' : 'New Status'}</th>
                    <th className="pb-5 text-right pr-5">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <tr key={i} className="group transition-colors">
                      <td className="py-6 pl-5">
                        {view === 'assignments' ? (
                          <>
                            <p className="font-bold text-lg text-gray-900 leading-none">Gusoma igihekane "MPA"</p>
                            <p className="text-[12px] text-gray-400 mt-2 font-medium italic">Agakuru gato ka Kalisa, umusizi...</p>
                          </>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-2xl bg-blue-500 flex items-center justify-center font-bold text-sm text-white">XT</div>
                            <div className="flex flex-col">
                              <p className="font-bold text-lg text-gray-900 leading-none">Alex Ntaganda</p>
                              <p className="text-[12px] text-gray-400 mt-1.5 font-medium italic">ntagandaalex@gmail.com</p>
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="py-6 text-[14px] font-bold text-gray-600">{view === 'assignments' ? '18 Jan' : 'Female'}</td>
                      <td className="py-6 text-[14px] font-bold text-gray-600">{view === 'assignments' ? '23 Jan' : '7'}</td>
                      <td className="py-6">
                        {view === 'assignments' ? (
                          <span className={`px-4 py-2 rounded-xl text-[11px] font-bold uppercase ${i % 3 === 0 ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                            {i % 3 === 0 ? '43% Submitted' : '90% Submitted'}
                          </span>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                            <span className="text-[12px] font-bold text-emerald-600">Review Required</span>
                          </div>
                        )}
                      </td>
                      <td className="py-6 text-right pr-5">
                        <button 
                          onClick={() => view === 'students' ? setSelectedSubmission({ id: i }) : null}
                          className="px-8 py-2.5 border border-gray-100 rounded-2xl text-[12px] font-bold bg-white text-gray-700 hover:bg-black hover:text-white transition-all shadow-sm"
                        >
                          {view === 'assignments' ? 'View Details' : 'Review Submission'}
                        </button>
                      </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
         {showAddStudentModal && <AddStudentDrawer onClose={() => setShowAddStudentModal(false)} />}
         {selectedSubmission && <SubmissionReviewModal submission={selectedSubmission} onClose={() => setSelectedSubmission(null)} />}
      </div>
    );
  }

  // Home Dashboard view
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      {/* Hero Card - Fixed Padding (Top/Bottom 12 units) */}
      <div className="relative py-12 px-12 bg-[#1A1A1A] rounded-2xl overflow-hidden flex items-center text-white no-shadow">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
        <div className="relative z-10 flex flex-col items-start gap-10">
          <h2 className="text-[48px] font-bold tracking-tighter max-w-xl leading-tight">Igisha Gusoma Neza Ikinyarwanda</h2>
          <button 
            onClick={() => onNavigate('create-assignment')}
            className="w-fit bg-white text-black px-12 py-4 rounded-2xl font-bold text-[15px] flex items-center gap-3 transition-transform hover:scale-[1.05] active:scale-95 shadow-xl shadow-black/30"
          >
            <Plus size={22} /> New Assignment
          </button>
        </div>
        <div className="absolute right-0 top-0 h-full w-2/5 opacity-10 flex items-center justify-end pr-20">
           <div className="grid grid-cols-3 gap-4">
              {Array.from({length: 12}).map((_, i) => <div key={i} className="w-16 h-16 bg-white rounded-full"></div>)}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 space-y-10">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8 bg-white rounded-2xl p-10 border border-gray-100 flex flex-col justify-between h-64 no-shadow hover:border-black transition-all">
              <div>
                <p className="text-[12px] font-bold text-gray-300 uppercase tracking-[0.3em] mb-4">Your School</p>
                <p className="text-[32px] font-bold text-gray-900 tracking-tight">Ecole Adventiste Kigali</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-300 uppercase tracking-[0.3em] mb-4">Current Classroom</p>
                <p className="text-[54px] font-bold text-gray-900 leading-none tracking-tighter">P2 A</p>
              </div>
            </div>
            <div className="col-span-4 bg-white rounded-2xl p-10 border border-gray-100 flex flex-col items-center justify-center h-64 no-shadow hover:border-black transition-all">
               <p className="text-[12px] font-bold text-gray-300 uppercase tracking-[0.3em] mb-5">Total Students</p>
               <p className="text-[110px] font-bold leading-none text-gray-900 tracking-tighter">43</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.3em] pl-3">Recent Student Activity</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-flat p-12 flex flex-col gap-10 hover:border-black transition-all cursor-pointer group">
                   <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[26px] text-gray-900 tracking-tight group-hover:text-black">Gusoma Igihekane "mba"</h4>
                      <span className="text-emerald-500 font-bold text-[16px] bg-emerald-50/40 px-5 py-2 rounded-xl border border-emerald-100">88% Accuracy</span>
                   </div>
                   <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                      <div className="flex items-center gap-5">
                         <img src={`https://picsum.photos/seed/s${i+300}/128/128`} className="w-14 h-14 rounded-2xl object-cover grayscale border border-gray-100" alt="Student" />
                         <div>
                            <p className="text-[18px] font-bold text-gray-900 leading-none">Alex Ntaganda</p>
                            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-2.5">Active Primary Student</p>
                         </div>
                      </div>
                      <p className="text-[13px] text-gray-400 font-bold italic tracking-tight">Recently Submitted</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-10">
          <div className="card-flat p-10">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 tracking-tight">Calendar</h3>
            <p className="text-[14px] font-bold text-gray-400 mb-12 tracking-tight">January 2026</p>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-10">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-y-6 gap-x-1">
              <div className="h-10"></div><div className="h-10"></div><div className="h-10"></div>
              {Array.from({ length: 31 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-11 w-11 flex items-center justify-center text-[15px] font-bold rounded-2xl transition-all cursor-pointer mx-auto ${
                    [1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30].includes(i+1) 
                      ? 'bg-[#EAF6F6] text-[#007F7F]' 
                      : 'text-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 pl-3 tracking-tight">Teacher Toolbox</h3>
            <button 
              onClick={() => onNavigate('create-assignment')}
              className="w-full flex items-center gap-6 p-7 bg-white border border-gray-100 rounded-2xl hover:border-black transition-all text-left no-shadow group"
            >
              <div className="solid-icon-sq bg-[#2D5BFF]">
                <BookOpen />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[18px] text-gray-900 leading-none mb-2">New Assignment</p>
                <p className="text-[12px] text-gray-400 font-bold uppercase tracking-tight">Set reading tasks</p>
              </div>
              <ChevronRight size={22} className="text-gray-300 group-hover:text-black transition-colors" />
            </button>
            <button 
              onClick={() => setShowAddStudentModal(true)}
              className="w-full flex items-center gap-6 p-7 bg-white border border-gray-100 rounded-2xl hover:border-black transition-all text-left no-shadow group"
            >
              <div className="solid-icon-sq bg-[#A259FF]">
                <UserPlus />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[18px] text-gray-900 leading-none mb-2">Add Student</p>
                <p className="text-[12px] text-gray-400 font-bold uppercase tracking-tight">Enroll student</p>
              </div>
              <ChevronRight size={22} className="text-gray-300 group-hover:text-black transition-colors" />
            </button>
          </div>
        </div>
      </div>
      {showAddStudentModal && <AddStudentDrawer onClose={() => setShowAddStudentModal(false)} />}
      {selectedSubmission && <SubmissionReviewModal submission={selectedSubmission} onClose={() => setSelectedSubmission(null)} />}
    </div>
  );
};

export default TeacherDashboard;
