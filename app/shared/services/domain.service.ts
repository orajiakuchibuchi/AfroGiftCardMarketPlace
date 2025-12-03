// src/app/services/domain.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface DomainData {
  tld: string;
  sld: string;
  address: string;
  email: string;
  type?: 'private' | 'public';
}

export interface DomainResponse {
  success: boolean;
  id: string;
  code: string;
  message?: string;
  result?: any;
}

export interface DomainsDbDomain {
  domain: string;
  isDead: boolean | string;
  ip?: string;
  country?: string;
  isp?: string;
  status?: string;
  create_date?: string;
  update_date?: string;
  expire_date?: string;
  A?: string[];
  NS?: string[];
  MX?: any[];
}

export interface DomainsDbResponse {
  domains: DomainsDbDomain[];
  total: number;
  time: string;
  page?: number;
  pages?: number;
  next_page?: string;
}

export interface DomainsDbRegistrationData {
  domain: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  private apiUrl = 'https://192.168.173.108:1965/api/transaction';
  private domainsDbUrl = 'https://api.domainsdb.info/v1/domains/search';
  private domainsDbApiKey = 'ff55df7f-62f0-41fd-bdc8-5e3b7cc57a45';

  constructor(private http: HttpClient) {}

  // Create a new domain (for PRIVATE domains only)
  createDomain(data: DomainData): Observable<DomainResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<DomainResponse>(this.apiUrl, data, { headers });
  }
// Only update these methods in DomainService

// Search domain using DomainsDB API (already mostly correct)
searchDomain(domain: string, limit: number = 10): Observable<DomainsDbResponse> {
  const params = new HttpParams()
    .set('domain', domain)           // domain to search
    .set('limit', limit.toString())  // optional limit
    .set('api_key', this.domainsDbApiKey); // your 5-credit API key

  return this.http.get<DomainsDbResponse>(this.domainsDbUrl, { params }).pipe(
    catchError((error) => {
      console.error('DomainsDB API Error:', error);
      return throwError(() => error);
    })
  );
}

// Register PUBLIC domain (essentially calls DomainsDB search endpoint for confirmation)
registerPublicDomain(data: DomainsDbRegistrationData): Observable<DomainsDbResponse> {
  // DomainsDB does not have a "register" endpoint; you confirm availability by searching
  const params = new HttpParams()
    .set('domain', data.domain)
    .set('limit', '1')
    .set('api_key', this.domainsDbApiKey);

  console.log('Calling DomainsDB for public domain registration:', data.domain);

  return this.http.get<DomainsDbResponse>(this.domainsDbUrl, { params }).pipe(
    catchError((error) => {
      console.error('DomainsDB Registration Error:', error);
      return throwError(() => error);
    })
  );
}


  // Get single domain by ID
  getDomain(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Get all domains
  getAllDomains(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/transactions`);
  }
}