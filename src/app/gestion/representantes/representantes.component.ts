import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Representative } from '../../models/representative.model';

@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html'
})
export class RepresentantesComponent {
  rep: Representative = {
    firstName: '',
    lastName: '',
    relation: '',
    phone: '',
    email: ''
  };

  constructor(private dataService: DataService) {}

  addRepresentative() {
    this.dataService.addRepresentative(this.rep);
    this.rep = { firstName: '', lastName: '', relation: '', phone: '', email: '' }; // Clear form
  }
}
