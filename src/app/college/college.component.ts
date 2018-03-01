import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';


@Component({
  selector: 'app-college',
  template: `
  <div>
    <div *ngIf="edit" class=form>
    <span>collegeName: </span><input [(ngModel)]="collegeName" type="text"><br/>
    <span>collegeAddress: </span><input [(ngModel)]="collegeAddress" type="text"><br/>
    <span>CGPA: </span><input [(ngModel)]="CGPA" type="text"><br/>
    <button id=save (click)="save()">Save</button>
    </div>
  <div>
    <div *ngIf="!edit" class=details>
    <label>collegeName</label>{{college.collegeName}}<br/>
    <label>collegeAddress</label>{{college.collegeAddress}}<br/>
    <label>CGPA</label>{{college.CGPA}}<br/>
    
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
export class CollegeComponent implements OnInit {
public collegeName;
public collegeAddress;
public CGPA;
public edit = true;
public college;

  constructor(private _college: CollegeService) { }

  ngOnInit() {
    this.college = this._college.getdata();
    if (this._college.getdata().collegeName !== '') {
    this.edit = false;
      this.collegeName = this.college.collegeName;
      this.collegeAddress = this.college.Address;
      this.CGPA = this.college.CGPA;
  } 
  }
  save() {
    const  detail = {
      'collegeName': this.collegeName,
      'collegeAddress': this.collegeAddress,
      'CGPA': this.CGPA
    };
    this.edit = false;
    this._college.clgdetails.collegeName = this.collegeName;
    this._college.clgdetails.collegeAddress = this.collegeAddress;
    this._college.clgdetails.CGPA = this.CGPA;

  }
  update() {
    this.edit = true;
  }

}
