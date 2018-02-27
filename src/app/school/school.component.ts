import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  template: `
  <div class=form *ngIf = "edit">
  <h3>schoolName: <input type="text" [(ngModel)]= schoolName></h3>
  <h3>schoolAddress: <input type="text" [(ngModel)] = schoolAddress></h3>
  <h3>percentage: <input type="text" [(ngModel)]= percentage></h3>
  <button (click)= "save()">save</button>
  </div>
  <div class=button *ngIf="!edit">
  <label>schoolName:</label>{{school.schoolName}}<br>
  <label>schoolAddress:</label>{{school.schoolAddress}}<br>
  <label>percentage:</label>{{school.percentage}}<br>
  <button (click)="update()">UPDATE</button>
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
export class SchoolComponent implements OnInit {
public schoolName;
public schoolAddress;
public percentage;
public edit = true;
public school;

  constructor(private _school: SchoolService) { }

  ngOnInit() {
    this.school = this._school.getdata();
    if (this._school.getdata().schoolName !== '') {
    this.edit = false;
      this.schoolName = this.school.schoolName;
      this.schoolAddress = this.school.schoolAddress;
      this.percentage = this.school.percentage;
  } }
  save() {
    const  detail = {
      'schoolName': this.schoolName,
      'schoolAddress': this.schoolAddress,
      'percentage': this.percentage
    };
    this.edit = false;
    this._school.studetails.schoolName = this.schoolName;
    this._school.studetails.schoolAddress = this.schoolAddress;
    this._school.studetails.percentage = this.percentage;

  }
  update() {
    this.edit = true;
  }


}
