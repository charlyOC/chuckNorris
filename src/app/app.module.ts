import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiTestComponent } from './mainPage/main-page-component';

import { AppComponent } from './app.component';
import { JokePageComponent } from './joke-page/joke-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiTestComponent,
    JokePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
