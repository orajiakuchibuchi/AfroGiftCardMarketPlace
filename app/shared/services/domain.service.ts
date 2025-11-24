// src/app/services/domain.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DomainData {
  tld: string;
  sld: string;
  address: string;
  email: string;
}

export interface DomainResponse {
  success: boolean;
  id: string;
  code: string;
  message?: string;
  result?: any;
}

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  private apiUrl = 'https://192.168.186.108:1965/api/transaction'; // your API endpoint

  constructor(private http: HttpClient) {}

  // Create a new domain
  createDomain(data: DomainData): Observable<DomainResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<DomainResponse>(this.apiUrl, data, { headers });
  }

  // Optional: get single domain by ID
  getDomain(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Optional: get all domains
  getAllDomains(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/transactions`);
  }
}
