import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ActivitesComponent } from './activites/activites.component';
import { RecordcardComponent } from './recordcard/recordcard.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBXB_GPPrySk6OIc8Z2bAiv87cbUR9s92I',
  authDomain: 'lifestyle-incentive.firebaseapp.com',
  databaseURL: 'https://lifestyle-incentive.firebaseio.com',
  storageBucket: 'lifestyle-incentive.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    ActivitesComponent,
    RecordcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






