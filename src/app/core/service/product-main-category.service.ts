import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductMainCategory } from '../model/product/product-main-category';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductMainCategoryService {

constructor(private http: HttpClient) { }

 add(model){
    return this.http.post(API_URL+"/ProductMaincategory/AddProductMainCategory",model);
 }

  update(model){
    return this.http.put(API_URL+"/ProductMaincategory/UpdateProductMainCategory",model);
  }

  delete(id){
    return this.http.delete(`${API_URL}/ProductMaincategory/DeleteProductMainCategory?key=${id}`);
  }

  getAll(){
    return this.http.get<Array<ProductMainCategory>>(`${API_URL}/ProductMaincategory/GetProductMainCategory`);
  }

  findById(id){
    return this.http.get<ProductMainCategory>(`${API_URL}/ProductMaincategory/FindProductMainCategoryById?id=${id}`);
  }

}
