import { Component, OnInit } from '@angular/core';
import { MtbPerson } from './mtb-person';

@Component({
  selector: 'app-mtb-person-list',
  // templateUrl: './mtb-person-list.component.html',
  templateUrl: './mtb-person-list-bootstrap.component.html',
  styleUrls: ['./mtb-person-list.component.css']
})
export class MtbPersonListComponent implements OnInit {

  // Seed some mtb people
  mtbPersonList: MtbPerson[] = [
    new MtbPerson("Olli", "Zott", "olli@mail.com", 45, 3000),
    new MtbPerson("Lena", "Bergmann", "lena@mail.com", 35, 1800),
    new MtbPerson("Sigi", "-", "sigi@mail.com", 0, 0)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
