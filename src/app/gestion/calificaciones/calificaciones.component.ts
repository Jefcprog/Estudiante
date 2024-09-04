import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Grade } from '../../models/grade.model';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html'
})
export class CalificacionesComponent implements OnInit {
  @ViewChild('gradeModal') gradeModal!: ElementRef;
  currentGrade: Grade = {
    taskName: '',
    taskDescription: '',
    startDate: new Date(),
    endDate: new Date(),
    grade: 0,
    status: 'Reprobado'
  };

  grades: Grade[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.grades = this.dataService.grades;
  }

  openModal() {
    if (this.gradeModal) {
      const modalInstance = new (this.gradeModal.nativeElement);
      modalInstance.show();
    }
  }

  handleSave(grade: Grade) {
    this.dataService.addGrade(grade);
    this.currentGrade = { taskName: '', taskDescription: '', startDate: new Date(), endDate: new Date(), grade: 0, status: 'Reprobado' };
    this.grades = this.dataService.grades; // Actualiza la lista de calificaciones
  }
}
