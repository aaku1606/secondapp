import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  template: `
  <header>
<img src = "../assets/image.png" alt ="logo" width="45" height="45" >
<span style="float:right"> {{username}} </span>
</header>
<div class = container>
<div class= info >
<nav>
 <ul>
 <li><button (click)= "dashboard()">dashboard</button></li>
  <li><button (click)= "profile()">profile</button></li>
  <li><button (click)= "school()">School</button></li>
  <li><button (click)= "college()">College</button></li>
</ul>
</nav>
</div>
<div class = form>
  <router-outlet></router-outlet>
  </div>


  </div>
   `,
  styles: [`
  header {
    padding: 2em;
    color: white;
    background-color:green;
    clear: left;

  }
  nav {
    float: left;
    max-width: 160px;
    margin: 0;
    padding: 1em;
}

nav ul {
    list-style-type: none;
    padding: 0;
}
   
nav ul a {
    text-decoration: none;
}
.container{
  display:flex;
  flex-direction : row;
  width:100%;
}

.form{
  border: solid 1px black;
  width: 100%;
  background:white;
}
.info
{
  background: grey;
  height:700px;
  border:solid 1px black;
}

button{
  width: 120px;
  color: black;
}
 `]
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
