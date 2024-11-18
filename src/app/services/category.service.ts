import { Injectable } from '@angular/core';
import { ApiConfigService } from './ApiConfigService';
import { HttpClient } from '@angular/common/http';
import { ApiRespone } from '../entity/api-respone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = ApiConfigService.apiUrl;
  constructor(private http : HttpClient) { }

  getAllCate():Observable<ApiRespone>{
    return this.http.get<ApiRespone>(this.url+"/api/v1/categories");
  }
 
}
