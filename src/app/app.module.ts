import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule, MatButtonModule, 
    MatCheckboxModule, MatToolbarModule, MatMenuModule, 
    MatFormFieldModule, MatInputModule, MatOptionModule, 
    MatSelectModule, MatSliderModule } from '@angular/material';
import {
  HeaderComponent,
  FooterComponent
} from './shared';
import { HomeComponent } from './home/home.component';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
