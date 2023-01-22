import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HelloComponent } from './components/hello/hello.component';
import { WelcomeComponent } from './components/welcome/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
