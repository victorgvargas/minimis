import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from '../../components/weather-details/weather-details.component';
import { WeatherCardComponent } from '../../components/weather-card/weather-card.component';

const routes: Routes = [
  {path: '', redirectTo: '/weather', pathMatch: 'full' },
  {path: 'weather', component : WeatherCardComponent },
  {path : 'weather/:id', component : WeatherDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
