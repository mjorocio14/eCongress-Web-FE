import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ILetterType } from '../interface/letter-type.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LetterTypesService {

  constructor(private http: HttpClient) { }

  getReceivingList(): Observable<ILetterType[]> {
    return this.http.get<ILetterType[]>(environment.apiUrl + 'LetterTypes').pipe(map(response => response));
  }
}
