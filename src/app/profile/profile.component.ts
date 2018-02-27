import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  template: `

  <div class=form *ngIf = "edit">
  <h3>Name: <input type="text" [(ngModel)]= name></h3>
  <h3>Age: <input type="number" [(ngModel)] = age></h3>
  <h3>Father's name: <input type="text" [(ngModel)]= fatherName></h3>
  <h3>Mother's name: <input type="text" [(ngModel)] = motherName></h3>
  <button (click)="save()">Save</button>
 </div>
  <div class=button *ngIf="!edit">
  <label>Name:</label>{{profile.name}}<br>
  <label>Age:</label>{{profile.age}}<br>
  <label>Father's name:</label>{{profile.fatherName}}<br>
  <label>Mother's name:</label>{{profile.motherName}}<br>
  <button type="submit" (click)="update()">UPDATE</button>
  </div>

  `,
  styles: [`
 .form
 {
   position: relative;
   left: 450px;
   top:50px;
 }
 .button
 {
   position: relative;
   left: 450px;
   top:50px;
 }
 `]
})
export class ProfileComponent implements OnInit {
  public name = '';
  public age;
  public fatherName = '';
  public motherName = '';
  public edit = true;
  public profile;
  constructor(private _profile: ProfileService) { }

  ngOnInit() {
    this.profile = this._profile.getdata();
    if (this._profile.getdata().name !== '') {
    this.edit = false;
      this.name = this.profile.name;
      this.age = this.profile.age;
      this.fatherName = this.profile.fatherName;
      this.motherName = this.profile.motherName;
  }}
 save() {
  const detail = {
    'name': this.name,
    'age': this.age,
    'fatheName': this.fatherName,
    'motherName': this.motherName
  };
  this.edit = false;
  this._profile.mydetails.name = this.name;
  this._profile.mydetails.age = this.age;
  this._profile.mydetails.fatherName = this.fatherName;
  this._profile.mydetails.motherName = this.motherName;
}
update() {
  this.edit = true;
}
}
