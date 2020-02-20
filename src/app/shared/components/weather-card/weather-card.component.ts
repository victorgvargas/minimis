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
  loader : boolean = false;
  

  constructor(private getData : GetServiceService,
              private dialog : MatDialog) { }

  ngOnInit() {
    this.getCity();
  }

  getCity(){
    this.loader = true;
    setTimeout(() => {
      this.getData.onGetData(this.city)
        .subscribe(res => {
        this.response.push(res);
        this.loader = false;
    });
    },1000);
    
  }

  addCity(){
      const dialogRef = this.dialog.open(ModalSearchComponent, {
        width: '40vh',
        data : this.response.map(element => element.name.toUpperCase())
      });

      dialogRef.afterClosed().subscribe(res => {
        this.loader = true;
        if (res) {
          this.response.push(res);
          this.loader = false;
        }
        if (!res) {
          this.loader = false;
        }
      });
  }

  onDelete(index){
    this.response.splice(index, 1);
  }

}
