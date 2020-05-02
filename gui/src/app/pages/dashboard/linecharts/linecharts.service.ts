import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import { Iloc} from './line';

@Injectable()

export class LinechartsService {

  private _url: string = "/assets/data/line.json";

  constructor(private http: HttpClient) { }

  getline(): Observable<Iloc[]>{
    return this.http.get<Iloc[]>(this._url);
    
  }
}
