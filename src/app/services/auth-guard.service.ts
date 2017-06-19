import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import "rxjs/add/observable/of";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if(this.auth.role == 'user') {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if(this.auth.role == 'admin') {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
