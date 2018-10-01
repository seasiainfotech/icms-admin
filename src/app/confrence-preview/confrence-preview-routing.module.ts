import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfrencePreviewComponent } from '../confrence-preview/confrence-preview.component';

const routes: Routes = [
  { path: 'confrence-detail', component: ConfrencePreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfrencePreviewRoutingModule { }
