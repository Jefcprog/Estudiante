import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { Representative } from '../models/representative.model';
import { Grade } from '../models/grade.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  students: Student[] = [];
  representatives: Representative[] = [];
  grades: Grade[] = [];

  addStudent(student: Student) {
    this.students.push(student);
    console.log('Estudiantes:', this.students);
  }

  addRepresentative(rep: Representative) {
    this.representatives.push(rep);
    console.log('Representantes:', this.representatives);
  }

  addGrade(grade: Grade) {
    this.grades.push(grade);
    console.log('Calificaciones:', this.grades);
  }

  calculateGradeStatus(grade: number): string {
    return grade >= 7 ? 'Aprobado' : 'Reprobado';
  }
}
