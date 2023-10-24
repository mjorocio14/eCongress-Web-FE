import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivingComponent } from './receiving/receiving.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'receiving', component: ReceivingComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
