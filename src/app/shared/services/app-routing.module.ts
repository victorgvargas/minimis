import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherCardComponent } from '../components/weather-card/weather-card.component';
import { DetailsComponent } from '../components/details/details.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path : '', redirectTo: '/weather', pathMatch : 'full'},
  {path : 'weather', component : WeatherCardComponent},
  {path : 'weather/:id', component : DetailsComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
