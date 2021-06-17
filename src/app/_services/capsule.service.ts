import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://docs.spacexdata.com/#bc65ba60-decf-4289-bb04-4ca9df01b9c1'

@Injectable({
    providedIn: 'root'
  })
  export class CapsuleService {
  
    constructor(private http: HttpClient) { }
  
  
    getCapsuleSerial(): Observable<any> {
      return this.http.get(API_URL + '/capsule_serial');
    }
  
    getCapsuleId(): Observable<any> {
        return this.http.get(API_URL + '/capsule_id');
    }

    getStatus(): Observable<any> {
        return this.http.get(API_URL + '/status');
    }
    
    getMission(): Observable<any> {
        return this.http.get(API_URL + '/mission');
    }
  }