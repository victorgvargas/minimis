import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private http : HttpClient) { }

  onGetData(city) : Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' +city +'&units=metric&appid=0d69702c4d7cc2b73740f73cb6ff2fbc');                  
  }
}
