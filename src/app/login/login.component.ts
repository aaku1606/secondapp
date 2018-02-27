import { Component, OnInit, style } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-login',
  template: `
  <table frame = "box" align="center" cellspacing = "50">
  <tr>
  <th>username <input [(ngModel)]="user" type="text" ></th>
  </tr>
  <tr>
  <th>password <input [(ngModel)] ="pass" type ="password" ></th>
  </tr>
  <tr>
  <button (click)="login(user.value,pass.value)">login</button>
  </tr>
</table>
  `,
  styles: []
})
export class LoginComponent implements OnInit {
  public user = '';
  public pass = '';

  constructor(private route: Router, private _dataservice: DataserviceService) { }

  ngOnInit() {
  }
  login() {
    if (this.user === this.pass) {
      this._dataservice.username = this.user;
      this.route.navigate(['/web/dashboard']);

    }
  }

}
