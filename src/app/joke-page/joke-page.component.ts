import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'; 


@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.scss']
})
export class JokePageComponent implements OnInit {
  jokeDatatext: any[string]; 

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getJokeWithCategories().subscribe((data) => {
      this.jokeDatatext = data;
    })}

    //   getValue(c:any){
    //     // console.log(document.getElementsByClassName('chucks'))
    //     console.log(c);
    //   }
  }
