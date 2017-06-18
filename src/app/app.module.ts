import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ManageStateModule } from './manage-state/manage-state.module';

import { AppComponent } from './app.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CabinetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ManageStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
