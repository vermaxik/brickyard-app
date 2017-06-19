import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ManageStateModule } from './manage-state/manage-state.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { CabinetComponent } from './cabinet/cabinet.component';

import { AdminGuard, UserGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CabinetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ManageStateModule,
    LoginModule
  ],
  providers: [AdminGuard, UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
