import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConfrenceListComponent } from './confrence-list/confrence-list.component';
import { ConfrencePreviewComponent } from './confrence-preview/confrence-preview.component';
import { ConfrenceDashboardComponent } from './confrence-dashboard/confrence-dashboard.component';
import { ConfrenceSessionListComponent } from './confrence-session-list/confrence-session-list.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';

const routes: Routes = [
  { path: 'events-list', component: LoginComponent }

];


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: LoginComponent, data: {
      page: 'home'
    }
  },
  {
    path: 'confrences', component: ConfrenceListComponent, data: {
      page: 'confrences'
    }
  },
  {
    path: 'confrence-detail', component: ConfrencePreviewComponent, data: {
      page: 'confrences'
    }
  },
  // confrence-detail/:eventId

  {
    path: 'confrence-dashboard/:event_id',
    component: ConfrenceDashboardComponent
  },
  {
    path: 'confrence-sessions/:event_id',
    component: ConfrenceSessionListComponent
  },
  {
    path: 'confrence-guestList/:event_id',
    component: GuestListComponent
  },
  {
    path: 'confrence-speakers/:event_id',
    component: SpeakerListComponent
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ConfrenceListComponent, ConfrencePreviewComponent, ConfrenceDashboardComponent]