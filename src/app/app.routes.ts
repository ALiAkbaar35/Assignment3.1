import { Routes } from '@angular/router';
import { AllAnimalsComponent } from './animals/all-animals/all-animals.component';
import { FiveAnimalsComponent } from './animals/five-animals/five-animals.component';
export const routes: Routes = [
  { path: '', component: AllAnimalsComponent },
  { path: 'five-animals', component: FiveAnimalsComponent },
];
