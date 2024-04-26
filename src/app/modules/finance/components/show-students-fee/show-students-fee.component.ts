import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Class } from '../../../../shared/interfaces/class.interface';
import { Course } from '../../../../shared/interfaces/courses.interface';
import { Parent } from '../../../../shared/interfaces/parent.interface';
import { Student } from '../../../../shared/interfaces/student.interface';
import { ClassService } from '../../../../shared/services/class.service';
import { CourseService } from '../../../../shared/services/course.service';
import { ParentService } from '../../../../shared/services/parent.service';
import { StudentService } from '../../../../shared/services/student.service';

@Component({
  selector: 'app-show-students-fee',
  templateUrl: './show-students-fee.component.html',
  styleUrl: './show-students-fee.component.scss'
})
export class ShowStudentsFeeComponent implements OnInit{
  students:Student[] = [];
  @Input() modalId: string = '';
  isModalVisible: boolean = false;
  isEditModalVisible: boolean = false;
  studentIdToEdit: number | null = null;
  @Output() editStudent = new EventEmitter<number>(); // Event emitter for edit

  classes:Class[] = [];
  courses:Course[] = [];
  parents:Parent[] = [];
  AccdemicTerms:any[] = [];


  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  toggleEditModal(id: number | null) {
    this.studentIdToEdit = id;
    this.isEditModalVisible = !this.isEditModalVisible;
    if (id !== null) {
      this.editStudent.emit(id); // Emit event with student ID
    }
    this.getAllStudents();
  }

  constructor(
    private studentService: StudentService
    , private classService: ClassService,
    private courseService: CourseService,
    private parentService: ParentService,

    
  ) {}
  ngOnInit() {
    this.getAllStudents();
    this.getAllData();
  }

  getAllData() {
   

    this.classService.getAllClasses().subscribe((classes: Class[]) => {
      this.classes = classes;
    });

    // this.courseService.getAllCourse().subscribe((courses: Course[]) => {
    //   this.courses = courses;
    // });

    this.parentService.getAllparents().subscribe((teachers: Parent[]) => {
      this.parents = teachers;
    });

    // this.courseService.getAllAccadicTerm().subscribe((academicTerms: any[]) => {
    //   this.AccdemicTerms = academicTerms;
    // });
  }
  


  getAllStudents(){
    this.studentService.getAllStudents().subscribe((data:Student[])=>{
      this.students=data;
      console.log('All Students', this.students);
    });
  }
  getAllStudentsWithBalance(){
    this.studentService.getAllStudentsWithBalance().subscribe((data:Student[])=>{
      this.students=data;
      console.log('All Students', this.students);
    });
  }
  getAllStudentsWithNoBalance(){
    this.studentService.getAllStudentsWithNoBalance().subscribe((data:Student[])=>{
      this.students=data;
      console.log('All Students', this.students);
    });
  }

  getClassNameById(classId: number): string {
    const classItem = this.classes.find((classItem: Class) => classItem.id === classId);
    if (classItem) {
        return classItem.name;
    } else {
        return 'Unknown Class'; // Or any default value you prefer
    }
  }

getParentNameById(parentId: number): string {
  const parent = this.parents.find((parent: Parent) => parent.id === parentId);
  if (parent) {
      return parent.firstName +' ' + parent.lastName;
  } else {
      return 'Unknown Course'; // Or any default value you prefer
  }
}

}
