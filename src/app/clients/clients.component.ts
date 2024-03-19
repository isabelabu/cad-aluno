import { Component } from '@angular/core';
import { student } from '../student';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  students: student[] = [
    {id: 1, name: 'Julio', course: "ADS"},
    {id: 2, name: 'Amanda', course: "Mecatrônica"},
    {id: 3, name: 'Luca', course: "GTI"}
  ];
}
