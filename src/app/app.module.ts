import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { AppRouting } from './router.component';

@NgModule({
  imports:[ BrowserModule,FormsModule,AppRouting,BrowserAnimationsModule ],
  declarations:[ AppComponent,HomeComponent,AboutComponent ],
  bootstrap:[ AppComponent ],
  providers:[DataService]
})

export class AppModule{

}