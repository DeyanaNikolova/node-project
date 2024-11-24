import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.api_url + '/product';

  constructor(private http: HttpClient, private authService: AuthService){}

  create(product: Product): Observable<any>{
    return this.http.post(this.url, product);
  }

  update(product: Product): Observable<any> {
    return this.http.put(this.url, product);
  }

  remove(title: string): Observable<any> {
    return this.http.delete(this.url + `/${title}`);
  }

  getProducts(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.url); 
  }

}
