import { IReceiving } from './../interface/receiving.interface';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ReceivingService {
  refreshTable = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  getReceiving(date: string) { 
    const options = { params: new HttpParams().set('dateReceived', moment(date).format('YYYY-MM-DD')) };
    return this.http.get<IReceiving[]>(environment.apiUrl + 'Receiving', options).pipe(map(response => {
      return response.map((d) => {
        d.eventDateStart_formatted = moment(d.eventDateStart).format('ll');
        d.eventDateEnd_formatted = moment(d.eventDateEnd).format('ll');
        d.dateReceived_formatted = moment(d.dateReceived).format('ll');
        return d;
      })
    }));
  }

  postReceiving(data: IReceiving) {
    return this.http.post<IReceiving>(environment.apiUrl + 'Receiving', data).pipe(map(response => response));
  }

  putReceiving(id: number, data: IReceiving) {
    const urlParam = { params: new HttpParams().set('Id', id) };
    data.id = id;

    return this.http.put<IReceiving>(environment.apiUrl + 'Receiving', data, urlParam).pipe(map(response => response));
  }

}
