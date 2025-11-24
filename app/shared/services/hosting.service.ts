import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface HostingPlan {
  id?: string;
  name: string;
  price: number;
  period: string;
  category: 'shared' | 'cloud';
  features: string[];
  popular?: boolean;
}

export interface HostingTransaction {
  planName: string;
  planPrice: number;
  email: string;
  address: string;
  duration: number;
}


@Injectable({
  providedIn: 'root'
})
export class HostingService {
  private apiUrl = 'https://192.168.186.108:3600/api';

  constructor(private http: HttpClient) {}

  createHostingRecord(transaction: HostingTransaction): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiUrl}/transaction`, transaction, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('HostingService error:', error);
    return throwError(() => error);
  }
}
