import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.api_url + '/product';

  constructor(private http: HttpClient){}


  getProducts(): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders().set('Set-Cookie', 'userId=1')
    };
    
    return this.http.get<Product[]>(this.url, httpOptions); 
  }

  update(product: Product): Observable<any> {
    return this.http.put(this.url, product);
  }

  remove(title: string): Observable<any> {
    return this.http.delete(this.url + `/${title}`);
  }
}
