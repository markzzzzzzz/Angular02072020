import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectViewComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
