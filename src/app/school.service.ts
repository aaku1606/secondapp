import { Injectable } from '@angular/core';

@Injectable()
export class SchoolService {
  studetails = {
    'schoolName': '',
    'schoolAddress': '',
    'percentage': ''
  };

  constructor() { }
  getdata() {
    return this.studetails;
  }
  }

