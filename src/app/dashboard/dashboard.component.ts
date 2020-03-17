import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidemenu =[
    {
      'name' :'Your Profile',
      'icon':'account_circle',
      'routerlink':'somethinbg'
    },
    {
      'name' :'View Cars',
      'icon':'account_circle',
      'routerlink':''
    },
    {
      'name' :'menu3',
      'icon':'account_circle',
      'routerlink':''
    },
    {
      'name' :'menu4',
      'icon':'account_circle',
      'routerlink':''
    },
  ]
  constructor() { }

  
  ngOnInit(): void {
  }

}
