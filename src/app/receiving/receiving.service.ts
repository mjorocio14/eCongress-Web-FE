import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { Receiving } from '../models/receiving.model';

@Injectable({
  providedIn: 'root'
})
export class ReceivingService {
  selectedRow: EventEmitter<Receiving> = new EventEmitter<Receiving>();

  constructor(private http: HttpClient) { }

  getReceivingList(): Observable<Receiving[]> {
    const options = { params: new HttpParams().set('dateReceived', moment().toISOString()) };
    return this.http.get<Receiving[]>(environment.apiUrl + 'Receiving', options).pipe(map(response => response));
  }

}
