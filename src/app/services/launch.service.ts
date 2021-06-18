import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utils } from './utils.service';
import { Launch } from './../models/launch.model';
import { Params } from './../models/params.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  launchesUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http : HttpClient) { }

  getLaunches(params: Params): Observable<Launch[]> {
    const queryString = Utils.getQueryString(params);
    return this.http.get<Launch[]>(`${this.launchesUrl}?${queryString}`)
      .pipe();
  }
}
