import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-school',
  template: `
  <div>
    <div *ngIf="edit" class=form>
    <span>SchoolName: </span><input [(ngModel)]="schoolName" type="text"><br/>
    <span>schoolAddress: </span><input [(ngModel)]="schoolAddress" type="text"><br/>
    <span>percentage: </span><input [(ngModel)]="percentage" type="text"><br/>
    <button id=save (click)="save()">Save</button>
    </div>
  <div>
    <div *ngIf="!edit" class=details>
    <label>schoolName</label>{{school.schoolName}}<br/>
    <label>SchoolAddress</label>{{school.schoolAddress}}<br/>
    <label>Percentage</label>{{school.percentage}}<br/>
    
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
