import { Component, OnInit } from '@angular/core';

interface CarTypes {
  value: string;
  carTypeName: string;
}
interface Location {
  loc: string;
  locName: string;
}

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  cartypes: CarTypes[] = [
    { value: 'Hetchback', carTypeName: 'Hetchback' },
    { value: 'Sedan', carTypeName: 'Sedan' },
    { value: 'SUV', carTypeName: 'SUV' },
    { value: 'MPV', carTypeName: 'MPV' }
  ];
  locations: Location[] = [
    { loc: "Ahmedabad", locName: "Ahmedabad" },
    { loc: "Baroda", locName: "Baroda" },
    { loc: "Surat", locName: "Surat" },
    { loc: "Udaipur", locName: "Udaipur" },
    { loc: "Surendranagar", locName: "Surendranagar" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
