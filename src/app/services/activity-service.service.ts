import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {

  constructor(private http: Http) {
    console.log('Activity Service initialized');
    
    
  }

  postRecordData(date, activityCode, pointsEarned, extraNotes) {
    var data = [{date, activityCode, pointsEarned, extraNotes}];
    console.log(data);
  }
  


}




