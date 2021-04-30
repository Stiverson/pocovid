
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',  });

      return this.http.get(url, {headers, observe: 'response'});
  }z
}

