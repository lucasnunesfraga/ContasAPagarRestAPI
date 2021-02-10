import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContasComponent } from './contas/contas.component';
import { ContaComponent } from './conta/conta.component';
import { ContaAddEditComponent } from './conta-add-edit/conta-add-edit.component';

const routes: Routes = [
  { path: '', component: ContasComponent, pathMatch: 'full' },
  { path: 'conta/:id', component: ContaComponent },
  { path: 'add', component: ContaAddEditComponent },
  { path: 'conta/edit/:id', component: ContaAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }