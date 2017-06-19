import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard, UserGuard } from './services/auth-guard.service';

import { ManageStateComponent } from './manage-state/manage-state.component';
import { LoginComponent } from './login/login.component';
import { CabinetComponent } from './cabinet/cabinet.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'manage-state',
    component: ManageStateComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'cabinet',
    component: CabinetComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
