import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatComponent } from './seat/seat.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/seat',
    pathMatch: 'full'
  },
  { path: 'seat', component: SeatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
