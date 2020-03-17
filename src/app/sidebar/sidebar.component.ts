import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
adminStatus=true;
userStatus=false;
employeeStatus=false;
carOwnerStatus=false;
  admin =[
    {
      'name' :'Dashboard',
      'icon':'dashboard',
      'routerlink':''
    },
    {
      'name' :'Requestes of User',
      'icon':'supervised_user_circle', 
      'routerlink':''
    },
    {
      'name' :'Requestes of Car owner',
      'icon':'supervisor_account',
      'routerlink':''
    },
    {
      'name' :'View Details of all user',
      'icon':'notes',
      'routerlink':''
    },
    {
      'name' :'View booking Details',
      'icon':'assignment_ind',
      'routerlink':''
    },
    {
      'name' :'Payment of employees',
      'icon':'payment',
      'routerlink':''
    },
    {
      'name' :'Car Details',
      'icon':' directions_car',
      'routerlink':''
    },
    {
      'name' :'Log out',
      'icon':'settings_power',
      'routerlink':''
    }
  ]

  carOwner =[
    {
      'name' :'Dashboard',
      'icon':'dashboard',
      'routerlink':''
    },
    {
      'name' :'Add Car',
      'icon':'add_circle', 
      'routerlink':''
    },
    {
      'name' :'Requestes of Car',
      'icon':'directions_car',
      'routerlink':''
    },
    {
      'name' :'Update Document',
      'icon':'update',
      'routerlink':''
    },
    {
      'name' :'Update Status',
      'icon':'system_update',
      'routerlink':''
    },
    {
      'name' :'Trips',
      'icon':'drive_eta',
      'routerlink':''
    },
    {
      'name' :'About Us',
      'icon':'work_outline',
      'routerlink':''
    },
    {
      'name' :'Log out',
      'icon':'settings_power',
      'routerlink':''
    }

    
  ]
  user =[
    {
      'name' :'Dashboard',
      'icon':'dashboard',
      'routerlink':''
    },
    {
      'name' :'View Car',
      'icon':'visibility', 
      'routerlink':''
    },
    {
      'name' :'Your Bookings',
      'icon':'assignment_ind',
      'routerlink':''
    },
    {
      'name' :'Update Document',
      'icon':'update',
      'routerlink':''
    },
    {
      'name' :'Feedback',
      'icon':' screen_share',
      'routerlink':''
    },
    {
      'name' :'About Us',
      'icon':'work_outline',
      'routerlink':''
    },
    {
      'name' :'Log out',
      'icon':'settings_power',
      'routerlink':''
    }
  ]

  employee =[
    {
      'name' :'Dashboard',
      'icon':'dashboard',
      'routerlink':''
    },
    {
      'name' :'Car Details',
      'icon':'directions_car', 
      'routerlink':''
    },
    {
      'name' :'Maintance',
      'icon':'domain',
      'routerlink':''
    },
    {
      'name' :'Car review',
      'icon':'rate_review',
      'routerlink':''
    },
    {
      'name' :'Feedback',
      'icon':'screen_share',
      'routerlink':''
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
