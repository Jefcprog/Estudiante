import { Component, EventEmitter, Input, Output } from '@angular/core';
import bootstrap from '../../../../main.server';

@Component({
  selector: 'app-modalcalificaciones',
  templateUrl: './modalcalificaciones.component.html'
})
export class ModalcalificacionesComponent {
  @Input() modalid: string = 'modalCalificacion';
  
  @Input() calificacion = {
    taskName: '',
    taskDescription: '',
    startDate: new Date(),
    endDate: new Date(),
    grade: 0,
    status: 'Reprobado'
  };
  
  @Output() eventoGuardar = new EventEmitter();

  guardar() {
    if (this.validarGuardar()) {
      this.calificacion.status = this.calcularEstado();
      this.eventoGuardar.emit(this.calificacion);
      this.cerrarModal();
    }
  }

  validarGuardar(): boolean {
    if (this.validarEstaVacio(this.calificacion.taskName)) {
      this.mostrarMensajeError("El nombre de la tarea no se ha agregado");
      return false;
    }

    if (this.validarEstaVacio(this.calificacion.taskDescription)) {
      this.mostrarMensajeError("La descripción de la tarea no se ha agregado");
      return false;
    }

    if (this.calificacion.grade < 0) {
      this.mostrarMensajeError("La calificación debe ser un número positivo");
      return false;
    }

    return true;
  }

  calcularEstado(): string {
    return this.calificacion.grade >= 7 ? 'Aprobado' : 'Reprobado';
  }

  cerrarModal() {
    const btnCerrar = document.getElementById('btnCerrarModal');
    if (btnCerrar) {
      btnCerrar.click();
    }
  }

  validarEstaVacio(value: any): boolean {
    return !value || value.trim().length === 0;
  }

  mostrarMensajeError(message: string) {
    this.mostrarMensajeBase(message, 'danger');
  }

  mostrarMensajeBase(message: string, type: string) {
    const alertPlaceholder = document.getElementById('divMensaje');
    if (alertPlaceholder) {
      alertPlaceholder.innerHTML = '';
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
          <div>${message}</div>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
      alertPlaceholder.appendChild(wrapper);
    }
  }
}
