import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  template: `
<img src = "../assets/image.png" alt ="logo" width="45" height="45" >
<h2  align ="right"> {{username}} </h2>
 <table>
 <tr>
 <button (click)= "dashboard()">dashboard</button></tr>
 <tr>
  <button (click)= "profile()">profile</button></tr>
  <tr>
  <button (click)= "school()">School</button></tr>
  <tr>
  <button (click)= "college()">College</button></tr>
  <router-outlet></router-outlet>
   `,
  styles: [
  ]
})
export class WebComponent implements OnInit {
  public username = '';
  constructor(private _dataservice: DataserviceService,  private router: Router) { }

  ngOnInit() {
    this.username = this._dataservice.getdata();
  }
  dashboard() {
    this.router.navigate(['/web/dashboard']);
  }
  profile() {
    this.router.navigate(['/web/profile']);
  }
  school() {
    this.router.navigate(['/web/school']);
  }
  college() {
    this.router.navigate(['/web/college']);
  }

}
