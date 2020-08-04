import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item/item-list/item-list.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { ItemNewComponent } from './item-new/item-new.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrate', redirectTo: 'signup' },
  { path: 'signup', component: SignupComponent },
  { path: 'view/:id', component: ItemViewComponent },
  { path: 'item/new', component: ItemNewComponent },
  { path: '**', component: NotFoundComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
