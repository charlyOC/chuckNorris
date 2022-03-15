import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../api.service'; 
import { HttpClient, HttpParams } from '@angular/common/http';
import { __param } from 'tslib';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.scss']
})

export class JokePageComponent implements OnInit {
  joke: any[string]; 
  httpClient: any;
  httpParams: any; 

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let category = this.route.snapshot.params['category'];
    console.log(category);
    
    this.api.getJokeWithCategory(category).subscribe((joke) => {
      this.joke = joke; 
    })
  }


}



