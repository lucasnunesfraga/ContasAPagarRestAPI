import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasComponent } from './contas/contas.component';
import { ContaComponent } from './conta/conta.component';
import { ContaAddEditComponent } from './conta-add-edit/conta-add-edit.component';
import { ContaService } from './services/conta.service';

@NgModule({
  declarations: [
    AppComponent,
    ContasComponent,
    ContaComponent,
    ContaAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ContaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
