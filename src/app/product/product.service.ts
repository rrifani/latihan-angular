import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpsClient : HttpClient) { }

  productName = "buah apel"

  getProducts(){
    return this._httpsClient.get<Product[]>('http://localhost:3000/products')
  }
}
