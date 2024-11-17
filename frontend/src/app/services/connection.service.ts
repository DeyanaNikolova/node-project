import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Connection } from '../models/connection.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
url = environment.api_url + '/login';

  constructor(private http: HttpClient) { }

  login(connection: Connection): Observable<any>{
   return this.http.post(this.url, connection);
  }
}
