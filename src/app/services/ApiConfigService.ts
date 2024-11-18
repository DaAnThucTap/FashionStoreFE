import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  public static apiUrl ="http://localhost:8080" ;
  public static baseUrl ="http://localhost:8080/api/v1/products" ;
  public static apiUrlimg ="http://localhost/images/" ;


}