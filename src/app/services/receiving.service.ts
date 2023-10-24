import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { IReceiving } from '../interface/receiving.interface';

@Injectable({
  providedIn: 'root'
})
export class ReceivingService {
  selectedRow: EventEmitter<IReceiving> = new EventEmitter<IReceiving>();

  constructor(private http: HttpClient) { }

  getReceivingList(): Observable<IReceiving[]> {
    const options = { params: new HttpParams().set('dateReceived', moment().toISOString()) };
    return this.http.get<IReceiving[]>(environment.apiUrl + 'Receiving', options).pipe(map(response => response));
  }

}
