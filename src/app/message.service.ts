import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from './message';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class MessageService {
  private messageUrl = 'http://172.18.220.3:3000/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient) { }

    getMessages(): Observable<Message[]> {
      return this.http.get<Message[]>(this.messageUrl)
        .pipe(
          tap(_ => this.log('fetched messages')),
          catchError(this.handleError<Message[]>('getMessages', []))
        );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
    return 'xD';
  }
}


//   export const messages = [
//     {
//         message: "message",
//         author: "test",
//         date: "2021-08-12T18:34:54.037Z"
//     },
//     {
//         message: "test",
//         author: "sirdomin",
//         date: "2021-08-12T18:35:09.437Z"
//     },
//     {
//         message: "test",
//         author: "sirdomin",
//         date: "2021-08-12T18:35:13.922Z"
//     },
//     {
//         message: "asd",
//         author: "sirdomin",
//         date: "2021-08-12T18:37:17.129Z"
//     },
//     {
//         message: "amtuur",
//         author: "sirdomin",
//         date: "2021-08-12T18:37:43.001Z"
//     }
//   ];