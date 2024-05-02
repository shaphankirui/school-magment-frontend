// exam-result.dto.ts

export interface Result {
  studentId: number;
  score: number;
  grade?: string;
  points?: number;
  percentage?: number;
  examId: number;
  // classId: number;
  // You can add more fields here as needed
}
