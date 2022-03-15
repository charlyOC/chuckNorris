import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'; 


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page-component.html',
  styleUrls: ['./main-page-component.scss']
})

export class MainPageComponent implements OnInit {
  categories: any[string]; 
  title!: string;
  httpClient: any;
  httpParams: any; 
  
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.getCategories().subscribe((category) => {
      this.categories = category; 
    })
  }

}
