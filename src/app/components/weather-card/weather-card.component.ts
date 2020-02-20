import { Component, OnInit} from '@angular/core';
import { GetDataService } from 'src/app/shared/services/get-data.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  city : string = 'Uberlandia';
  minTemp : number;
  maxTemp : number;

  constructor(private getData : GetDataService) {
  }

  ngOnInit() {
    this.getData.onGetPost(this.city);
  }

}
