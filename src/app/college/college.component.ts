import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  template: `
  <div class=form>
  <h3>collegeName: <input type="text" [(ngModel)]= collegeName></h3>
  <h3>collegeAddress: <input type="text" [(ngModel)] = collegeAddress></h3>
  <h3>CGPA: <input type="text" [(ngModel)]= CGPA></h3>
  <button (click)= "save()">save</button>
  </div>
  `,
  styles: [
    `
  .form
    {
      position: relative;
      left: 450px;
      top:50px;
    }
    `
  ]
})
export class CollegeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
