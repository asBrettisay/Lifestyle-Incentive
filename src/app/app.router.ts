import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ActivitesComponent } from './activites/activites.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { RecordcardComponent } from './recordcard/recordcard.component';

export const router: Routes = [
    { path: '', redirectTo: 'instructions', pathMatch: 'full' },
    { path: 'activities', component: ActivitesComponent },
    { path: 'instructions', component: InstructionsComponent },
    { path: 'recordcard', component: RecordcardComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);