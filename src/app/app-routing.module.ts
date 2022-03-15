import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { MainPageComponent } from './mainPage/main-page-component';
import { JokePageComponent } from './joke-page/joke-page.component';



const routes: Routes = [
  { path: '',  component: MainPageComponent},
  { path: ':category', component: JokePageComponent  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, RouterOutlet]
})
export class AppRoutingModule { }
