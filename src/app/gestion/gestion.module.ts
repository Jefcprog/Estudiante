import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { RepresentantesComponent } from './representantes/representantes.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { ModalcalificacionesComponent } from './calificaciones/modalcalificaciones/modalcalificaciones.component';
import { GestionRoutingModule } from '../gestion-routing.module';



@NgModule({
  declarations: [
    EstudiantesComponent,
    RepresentantesComponent,
    CalificacionesComponent,
    ModalcalificacionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
