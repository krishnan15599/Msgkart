import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'pricing', component: PricingComponent },  
];
