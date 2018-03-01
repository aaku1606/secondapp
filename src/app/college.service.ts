import { Injectable } from '@angular/core';

@Injectable()
export class CollegeService {

  clgdetails = {
    'collegeName': '',
    'collegeAddress': '',
    'CGPA': ''

  };

  constructor() { }
getdata() {
  return this.clgdetails;
}
}
