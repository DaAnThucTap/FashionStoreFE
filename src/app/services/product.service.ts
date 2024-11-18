import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRespone } from '../entity/api-respone';
import { productRequest } from '../entity/request/productRequest';
import { ApiConfigService } from './ApiConfigService';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url =  ApiConfigService.apiUrl;
  baseUrl = ApiConfigService.baseUrl;
  constructor(private http : HttpClient) { }


  getAllList():Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/api/v1/products");
  }
  
  getById(idProduct : number):Observable<ApiRespone>{
    
    return this.http.get<ApiRespone>(this.url+"/api/v1/products/"+idProduct);
  }

  postProduct(formData: FormData):Observable<ApiRespone>{
    return this.http.post<ApiRespone>(this.url+"/api/v1/products",formData)

  }
  putProduct(formData: FormData, idProduct: String):Observable<ApiRespone>{
    return this.http.put<ApiRespone>(this.url+"/api/v1/products/"+idProduct,formData)

  } 
  getProductPage(thePage: number, thePageSize: number): Observable<ApiRespone> {
    return this.http.get<ApiRespone>(`${this.url + "/api/v1/products"}?page=${thePage}&size=${thePageSize}`);
  }

  filterProduct(thenNameProduct: string, theCategoryId: string, thePrice: string, theisGender: string, thePage: number, thePageSize: number): Observable<ApiRespone> {
    let nameProduct = thenNameProduct ? `&nameProduct=${thenNameProduct}` : '';
    let isGender = theisGender === '123' ? "" : '&isGender=' + theisGender;
    let idCategory = theCategoryId ? `&idCategory=${theCategoryId}` : '';
    let price = thePrice ? `&price=${thePrice}` : '';
    const searchUrl = `${this.baseUrl}/filter?${nameProduct}${idCategory}${price}${isGender}&page=${thePage}&size=${thePageSize}`;
    console.log(searchUrl)
    return this.http.get<ApiRespone>(searchUrl);
  }

}
