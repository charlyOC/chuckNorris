import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import {ApiService} from '../api.service'; 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page-component.html',
  styleUrls: ['./main-page-component.scss']
})

export class MainPageComponent implements OnInit {
  jokeData: any[string]; 
  title!: string;
  
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.getCategories().subscribe((data) => {
      this.jokeData = data; 
    })

  }

  getValue(c:any){
    // console.log(document.getElementsByClassName('chucks'))
    console.log(c);
  }
}
