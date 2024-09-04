import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'
})
export class EstudiantesComponent {
  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    course: ''
  };

  constructor(private dataService: DataService) {}

  addStudent() {
    this.dataService.addStudent(this.student);
    this.student = { id: '', firstName: '', lastName: '', birthDate: new Date(), course: '' }; 
  }
}
