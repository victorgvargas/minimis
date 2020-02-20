import { Component, OnInit } from '@angular/core';
import { GetServiceService } from '../../services/get-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalSearchComponent } from '../modal-search/modal-search.component';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  city = 'Uberlandia';
  response = [];
  loader : boolean = true;
  

  constructor(private getData : GetServiceService,
              private dialog : MatDialog) { }

  ngOnInit() {
    this.getCity();
  }

  getCity(){
    this.getData.onGetData(this.city)
    .subscribe(res => {
      this.response.push(res);
    });
  }

  addCity(){
      const dialogRef = this.dialog.open(ModalSearchComponent, {
        width: '40vh',
        data : this.response.map(element => element.name )
      });

      dialogRef.afterClosed().subscribe(res => {
        if (res) {
          this.response.push(res);
        }
      });
  }

}
