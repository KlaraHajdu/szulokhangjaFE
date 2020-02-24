export interface ParentPost {
  message: string;
  positiveMessage: boolean;
  commentType: string;
  id: string;
  location: string;
  submissionDate: string;
}

export interface TeacherSalary {
  name: string;
  experience: string;
  workload: string;
  salary: number;
  id: string;
  location: string;
  submissionDate: string;
}

export interface TeacherRecommendation {
  name: string;
  recommendation: string;
  id: string;
  location: string;
  submissionDate: string;
}
