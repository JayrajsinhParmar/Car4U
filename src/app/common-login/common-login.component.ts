import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-login',
  templateUrl: './common-login.component.html',
  styleUrls: ['./common-login.component.scss']
})
export class CommonLoginComponent implements OnInit {
  hide=true;
  admin=true;
  user =false;
  constructor(private navigation: Router) { }
  ngOnInit(): void {
  }

  login() {
    this.navigation.navigate(this.user ? ['user'] : (this.admin ? ['Admin']: null) );
  }
}
