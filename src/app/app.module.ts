import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConfrenceListComponent } from './confrence-list/confrence-list.component';
import { ConfrencePreviewComponent } from './confrence-preview/confrence-preview.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InternetConnection } from './Extension/internetConnection';
import {EventListingService} from './services/event-listing/event-listing.service';
import { DatePipe } from '@angular/common';
import { ConfrenceDashboardComponent } from './confrence-dashboard/confrence-dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ConfrenceSessionListComponent } from './confrence-session-list/confrence-session-list.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { CreateConfrenceComponent } from './create-confrence/create-confrence.component';

 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfrenceListComponent,
    ConfrencePreviewComponent,
    ConfrenceDashboardComponent,
    NavigationComponent,
    ConfrenceSessionListComponent,
    GuestListComponent,
    SpeakerListComponent,
    CreateConfrenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [InternetConnection,EventListingService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
