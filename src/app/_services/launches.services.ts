import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://api.spacexdata.com/v3/launches'

@Injectable({
    providedIn: 'root'
  })
  export class LaunchesService {
  
    constructor(private http: HttpClient) { }
  
  
    getFlightId(): Observable<any> {
      return this.http.get(API_URL + '/flight_id');
    }
  
    getRocketName(): Observable<any> {
        return this.http.get(API_URL + '/rocket_name');
    }

    getCustomer(): Observable<any> {
        return this.http.get(API_URL + '/customer');
    }
    
    getNationality(): Observable<any> {
        return this.http.get(API_URL + '/nationality');
    }
  }