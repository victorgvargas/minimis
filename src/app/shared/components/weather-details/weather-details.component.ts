import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetServiceService } from '../../services/get-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  id : number;
  response = [];
  loader : boolean;

  constructor(private route : ActivatedRoute,
              private getData : GetServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.loader = true;
    this.getData.onGetWeekData(this.id).
      // pipe(map(res => {
      // })).
      subscribe(res => {
      this.response = res.list;
      this.loader = false;
      console.log(this.response);
    });
  }

}
