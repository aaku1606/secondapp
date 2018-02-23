import { Injectable } from '@angular/core';

@Injectable()
export class DataserviceService {
  public username = ' ';

  constructor() { }
  getdata() {
    console.log(this.username);
    return this.username;
  }

}
