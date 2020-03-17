import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
