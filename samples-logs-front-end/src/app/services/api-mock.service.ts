import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiResponse } from '@models/api';
import { DataProvider } from './data-provider';

import jovian from './mock-data/jovian-mock.json';
import jovian2 from './mock-data/jovian-mock-2.json';
import ont from './mock-data/ont-mock.json';
import ont2 from './mock-data/ont-mock-2.json';
import job from './mock-data/job-mock.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements DataProvider {

  constructor() { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<ApiResponse> {
    switch (path) {
      case 'jovian':
        return of(jovian);
      case 'ont':
        return of(ont);
      default:
        return of(ont2);
    }
  }

  getMockSample(): Observable<any> {
    return of(job);
  }

}
