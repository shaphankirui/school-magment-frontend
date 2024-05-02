export interface Class {
  id: number;
  name: string;
  classTeacher: number;
  classPrefect: number;
  academicTermId: number;
}
export interface SubClass {
  id: number;
  name: string;
  classTeacher: number;
  classPrefect: number;
  classId: number;
  academicTermId: number;
}
