import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private api: string = '';

  constructor(private http : HttpClient) 
  {
    
  }

  set Api(value:string)
  {
    this.api = value;
  }

  todos(): Observable<any> {
    return this.http.get(this.api)
      .pipe(
        catchError(error => {
           return throwError('',error);
        })
      );
  }
}
