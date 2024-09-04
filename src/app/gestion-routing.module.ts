import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'estudiantes', loadChildren: () => import('./gestion/estudiantes/estudiantes.component').then(m => m.EstudiantesComponent) },
  { path: 'representantes', loadChildren: () => import('./gestion/representantes/representantes.component').then(m => m.RepresentantesComponent) },
  { path: 'calificaciones', loadChildren: () => import('./gestion/calificaciones/calificaciones.component').then(m => m.CalificacionesComponent) },
  { path: '', redirectTo: '/estudiantes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }

