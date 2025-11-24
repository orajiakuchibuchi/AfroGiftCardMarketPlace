// services/hosting.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface HostingPlan {
  id?: string;
  name: string;
  price: number;
  email: string;
  period?: string;
  category?: 'shared' | 'cloud';
  features?: string[];
  purchaseDate?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HostingService {
  private apiUrl = 'https://192.168.186.108:3600/api';

  constructor(private http: HttpClient) { }

  createHostingRecord(planData: HostingPlan): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const hostingRecord = {
      email: planData.email,
      planName: planData.name,
      price: planData.price,
      category: planData.category,
      period: planData.period,
      features: planData.features,
      purchaseDate: new Date().toISOString(),
      status: 'pending'
    };

    return this.http.post(`${this.apiUrl}/transaction`, hostingRecord, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('HostingService error:', errorMessage);
    return throwError(errorMessage);
  }
}