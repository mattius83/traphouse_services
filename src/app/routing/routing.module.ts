import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StandardsEntryComponent } from '../sections/standards/standards-entry.component';
import { TaskEntryComponent } from '../sections/tasks/task-entry.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'standards', component: StandardsEntryComponent },
  { path: 'tasks', component: TaskEntryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
