import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  template: `
  <div>
    <div *ngIf="edit" class=form>
    <span>My name: </span><input [(ngModel)]="name" type="text"><br/>
    <span>My age: </span><input [(ngModel)]="age" type="number"><br/>
    <span>Father's name: </span><input [(ngModel)]="fatherName" type="text"><br/>
    <span>Mother's name: </span><input [(ngModel)]="motherName" type="text"><br/>
    <button id=save (click)="save()">Save</button>
    </div>
  <div>
    <div *ngIf="!edit" class=details>
    <label>Name</label>{{profile.name}}<br/>
    <label>Age</label>{{profile.age}}<br/>
    <label>Father's Name</label>{{profile.fatherName}}<br/>
    <label>Mother's Name</label>{{profile.motherName}}<br/>
    <button id=update (click)="update()">Update</button>
    </div>
  </div>
   `,
  styles: [
    `
  .form,.details,.alter{
    position: relative;
    left: 450px;
    top:150px;
  }
  #save{
    width: 120px;
    margin-top:30px;
    margin-left:70px;
  }
  #update{
    width:120px;
    margin-top:30px;
    margin-left:15px;

  }
  span,label{
      display: inline-block;
      width: 140px;
  }​
  `
  ]
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
