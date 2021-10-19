import { Component, OnInit } from '@angular/core';
import { MtbPerson } from './mtb-person';

@Component({
  selector: 'app-mtb-person-list',
  templateUrl: './mtb-person-list.component.html',
  styleUrls: ['./mtb-person-list.component.css']
})
export class MtbPersonListComponent implements OnInit {

  // Seed some mtb people
  mtbPersonList: MtbPerson[] = [
    new MtbPerson("Olli", "Zott", "olli@mail.com", 45),
    new MtbPerson("Lena", "Bergmann", "lena@mail.com", 35),
    new MtbPerson("Sigi", "-", "sigi@mail.com", 0)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
