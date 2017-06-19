import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [ CommonModule,
             FormsModule,
             ReactiveFormsModule,
            ],
  providers: [ AuthService ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
