import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient) { }
getWeatherData(cityName: string):Observable<WeatherData>{
  return this.http.get<WeatherData>(config.weatherApiBaseUrl,{
    headers: new HttpHeaders()
    .set(config.XRapidAPIHostHeaderName, config.XRapidAPIHostHeaderValue)
    .set(config.XRapidAPIKeyHeaderName,config.XRapidAPIKeyHeaderValue),
    params: new HttpParams()
    .set('q',cityName)
    .set('units','imperial')
    .set('mode','xml')
  })
}
}
