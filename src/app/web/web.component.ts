import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-web',
  template: `
<iframe src="image.png"></iframe>
 <table>
  <tr>
  <button>Dashboard</button></tr>
  <tr>
  <button>School</button></tr>
  <tr>
  <button>College</button></tr>
  {{username}}
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class WebComponent implements OnInit {
  public username = '';
  constructor(private _dataservice: DataserviceService) { }

  ngOnInit() {
    this.username = this._dataservice.getdata();
    console.log(this.username);
  }

}
