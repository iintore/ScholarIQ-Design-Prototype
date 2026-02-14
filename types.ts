
export enum UserRole {
  TEACHER = 'TEACHER',
  PARENT = 'PARENT',
  STUDENT = 'STUDENT'
}

export interface Student {
  id: string;
  name: string;
  email: string;
  gender: 'Male' | 'Female';
  age: number;
  avatar?: string;
}

export interface Assignment {
  id: string;
  title: string;
  passage: string;
  dateCreated: string;
  dueDate: string;
  submissionsCount: number;
  totalStudents: number;
  avgScore?: number;
}

export interface Submission {
  id: string;
  studentId: string;
  assignmentId: string;
  status: 'Submitted' | 'Pending' | 'Reviewed';
  autoScore: number;
  accuracy: number;
  submittedAt: string;
  transcript: string;
  audioUrl?: string;
}
