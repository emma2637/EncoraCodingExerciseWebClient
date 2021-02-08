import { Injectable } from '@angular/core';
import { PropertyDetail } from './property-detail.model';
import {PropertyResponse} from "./property-detail.model";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PropertyDetailService {

  constructor(private http:HttpClient) { }
  //constructor() { }

  readonly baseUrl = "https://localhost:44335/api/properties";
  formData:PropertyDetail = new PropertyDetail();
 
  list:PropertyDetail[];
  
  
  putPropertyDetail(){
   return this.http.put(`${this.baseUrl}/${this.formData.id}`,this.formData);
  }

  refreshList(){
    this.http.get<PropertyResponse>(this.baseUrl).toPromise().
    then(
       res =>{
         console.log(res.data);
         this.list =  res.data as PropertyDetail[];
        }
    )
    .catch(err=> console.log(err));
  }
}
