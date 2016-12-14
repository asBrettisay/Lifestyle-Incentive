import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity-service.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-recordcard',
  templateUrl: './recordcard.component.html',
  styleUrls: ['./recordcard.component.css'],
  providers: []
})

export class RecordcardComponent {
  records: FirebaseListObservable<any>;
  total: number;
 
  constructor(af: AngularFire) {
    // Tried this first. Didn't work because records needed to be a FirebaseListObservable;
    // af.database.list('/records').subscribe( records => {
    //   this.records = records;
    //   this.total = records.reduce( ( pv, cr ) => pv + parseInt( cr.pointsEarned ), 0 );
    // } );

    // Set records as you were.
    this.records = af.database.list( "/records" );

    // Subscribe to the records observable to recieve an array of records
    // Sum the pointsEarned on your array of records.
    // you might want to change wherever points are input to be <input type="number" />
    this.records.subscribe( records => {
      this.total = records.reduce( ( pv, cr ) => pv + parseInt( cr.pointsEarned ), 0 );
    } );

    // console.log( this.records instanceof FirebaseListObservable );
    // console.log( JSON.stringify( this.records, null, 2 ) );

    // console.log( this.records );

    // var allRecords = this.records.forEach((record) => {
    //   console.log(typeof record);
    // })

  }

  addRecord(date: string, activityCode: string, pointsEarned: number, extraNotes: string) {
    this.records.push({ date: date, activityCode: activityCode, pointsEarned: pointsEarned, extraNotes: extraNotes });
  }

  deleteRecord(key: string) {
    this.records.remove(key);
  }

}



 
// export class RecordcardComponent {
  
//   records: FirebaseListObservable<any>;

//   constructor(af: AngularFire) {
//     this.records = af.database.list('/records');
//     var allRecords = this.records.forEach((record) => {
//       console.log(typeof record); // Console.log: object
//       console.log(record); // Console.log: [Object, Object, ...]
//       console.log(record.date); // Console.log: undefined
//     });
//   }