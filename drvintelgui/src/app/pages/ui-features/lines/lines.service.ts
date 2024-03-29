import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnginePerformanceService1 {
  private vehicleUrl = 'http://3.6.109.128:8080/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.vehicleUrl+'getdata')
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<any>('getHeroes', []))
      );
  }

  getData1(): Observable<any> {
    return this.http.get<any>(this.vehicleUrl+'getdata1')
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<any>('getHeroes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message)
  }

}
