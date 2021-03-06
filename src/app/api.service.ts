import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

  
  getCategories(){
    return this.http.get('https://api.chucknorris.io/jokes/categories'); 
  }
  
  getJokeWithCategory(category: string){
    return this.http.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
  }
}
