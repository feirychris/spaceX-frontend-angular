import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://api.spacexdata.com/v3/capsules'

@Injectable({
    providedIn: 'root'
  })
  export class CapsuleService {
  
    constructor(private http: HttpClient) { }
  
  
    getCapsuleSerial(): Observable<any> {
      return this.http.get(API_URL);
    }
  
    
  }