import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

const routes: Routes = [
  {path:"",component: ProjectListComponent},
  {path:'project/:id',component: ProjectViewComponent},
  {path:'edit/:id',component: ProjectEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
