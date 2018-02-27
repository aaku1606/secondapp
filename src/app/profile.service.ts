import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
  mydetails = {
    'name': '',
    'age': '',
    'fatherName': '',
    'motherName': ''

  };

  constructor() { }
  getdata() {
    return this.mydetails;
  }
}
