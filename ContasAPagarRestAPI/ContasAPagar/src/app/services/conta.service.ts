import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Conta } from '../models/conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
      this.myAppUrl = environment.appUrl;
      this.myApiUrl = 'Contas/';
  }

  getContas(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getConta(postId: number): Observable<Conta> {
      return this.http.get<Conta>(this.myAppUrl + this.myApiUrl + postId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveConta(conta): Observable<Conta> {
    return this.http.post<Conta>(this.myAppUrl + this.myApiUrl, conta, this.httpOptions).pipe(
      tap((conta: Conta) => console.log(`adicionou conta com w/ id=${conta.Id}`)),
      catchError(this.errorHandler)
      );
  }

  updateConta(postId: number, conta): Observable<Conta> {
      return this.http.put<Conta>(this.myAppUrl + this.myApiUrl + postId, JSON.stringify(conta), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteConta(postId: number): Observable<Conta> {
      return this.http.delete<Conta>(this.myAppUrl + this.myApiUrl + postId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
