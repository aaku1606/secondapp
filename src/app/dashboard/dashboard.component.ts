import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';



@Component({
  selector: 'app-dashboard',
  template: `
   <div class=form *ngIf="viewDetail.name === '' ">
  <button (click)="details()">Add my details</button><br>
  </div>
  <div  class=info *ngIf="viewDetail.name !== '' ">
   <label>Name:</label>{{viewDetail.name}}<br>
   <label>Age:</label>{{viewDetail.age}}<br>
   </div>
   `,
  styles: [`
    .form
  {
    position: relative;
    left: 550px;
    top:200px;
  }
  .info
  {
    position: relative;
    left: 550px;
    top:50px;
  }
  `
  ]
})
export class DashboardComponent implements OnInit {
  public viewDetail;

  constructor(private _profile: ProfileService, private router: Router) { }

  ngOnInit() {
    this.viewDetail = this._profile.getdata();
  }
  details() {
    this.router.navigate(['/web/profile']);
  }

}
