import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-sidebar',
  templateUrl: './common-sidebar.component.html',
  styleUrls: ['./common-sidebar.component.scss']
})
export class CommonSidebarComponent implements OnInit {
  adminStatus=true;
  clientStatus=false;
  carOwnerStatus=false;
  employeeStatus=false;
    admin =[
      {
        'name' :'Dashboard',
        'icon':'dashboard',
        'routerlink':'dashboard'
      },
      {
        'name' :'Requestes of User',
        'icon':'supervised_user_circle', 
        'routerlink':'userRequests'
      },
      {
        'name' :'Requestes of Car owner',
        'icon':'supervisor_account',
        'routerlink':'carOwnerRequests'
      },
      {
        'name' :'View Details of all user',
        'icon':'notes',
        'routerlink':'viewAllDetails'
      },
      {
        'name' :'View booking Details',
        'icon':'assignment_ind',
        'routerlink':'viewBookingDetails'
      },
      {
        'name' :'Payment of employees',
        'icon':'payment',
        'routerlink':'employeePayment'
      },
      {
        'name' :'Car Details',
        'icon':' directions_car',
        'routerlink':'carDetails'
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
        'routerlink':'dashboard'
      },
      {
        'name' :'Add Car',
        'icon':'add_circle', 
        'routerlink':'addCar'
      },
      {
        'name' :'Requestes of Car',
        'icon':'directions_car',
        'routerlink':'requestsOfCar'
      },
      {
        'name' :'Update Document',
        'icon':'update',
        'routerlink':'updateDocument'
      },
      {
        'name' :'Update Status',
        'icon':'system_update',
        'routerlink':'updateStatus'
      },
      {
        'name' :'Trips',
        'icon':'drive_eta',
        'routerlink':'trips'
      },
      {
        'name' :'About Us',
        'icon':'work_outline',
        'routerlink':'aboutus'
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
        'routerlink':'dashboard'
      },
      {
        'name' :'View Car',
        'icon':'visibility', 
        'routerlink':'viewCar'
      },
      {
        'name' :'Your Bookings',
        'icon':'assignment_ind',
        'routerlink':'yourBooking'
      },
      {
        'name' :'Update Document',
        'icon':'update',
        'routerlink':'updateDocument'
      },
      {
        'name' :'Feedback',
        'icon':' screen_share',
        'routerlink':'feedback'
      },
      {
        'name' :'About Us',
        'icon':'work_outline',
        'routerlink':'aboutus'
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
        'routerlink':'dashboard'
      },
      {
        'name' :'Car Details',
        'icon':'directions_car', 
        'routerlink':'carDetails'
      },
      {
        'name' :'Maintance',
        'icon':'domain',
        'routerlink':'maintance'
      },
      {
        'name' :'Car review',
        'icon':'rate_review',
        'routerlink':'carReview'
      },
      {
        'name' :'Feedback',
        'icon':'screen_share',
        'routerlink':'feedback'
      },
      {
        'name':'Log out',
        'icon': 'settings_power',
        'routerlink':'',
      }
    ]
  
  constructor() { }

  ngOnInit(): void {

  }

}
