import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl='assets/mock-data/data.json'

  constructor(private http:HttpClient) { }

  // all the data
  getCategories():Observable<any[]>{
    return this.http.get<any[]>(`${this.dataUrl}`)
  }

  getCategoriesById(id:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.dataUrl}`).pipe(
      map((categories: any[])=> categories.filter((category: { id: number; })=> category.id===id))
    )
  }




}
