import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { JokePageComponent } from './joke-page/joke-page.component';
import { MainPageComponent } from './mainPage/main-page-component';



const routes: Routes = [
  { path: '',  component: MainPageComponent},
  { path: 'selected', component: JokePageComponent  },
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
