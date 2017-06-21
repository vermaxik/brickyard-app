import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {
  private authUrl:string = 'http://localhost:3000/api/v1/authenticate';
  private stateUrl:string = 'http://localhost:3000/api/v1/state';
  isLoggedIn:boolean = false;
  role:string;

  constructor(private http: Http,
              private router: Router) {}

  login(credentials): Observable<any> {
    return this.http.post(this.authUrl, credentials)
            .map((result: Response) => result.json())
            .catch(this.handleError);
  }

  token(): Observable<any> {
    if(this.getToken()) {
      return this.http.get(`${this.authUrl}/${this.getToken()}`)
            .map((result: Response) => result.json())
            .catch(this.handleError);
    } else {
      return Observable.of();
    }
  }

  changeState(newStateId:number, resetState:boolean = false): Observable<any> {
    let params = { token_id: this.getToken(), main_id: newStateId, reset: resetState  }
    return this.http.put(this.stateUrl, params)
            .map((result: Response) => result.json())
            .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('token_id');
    this.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }

  private getToken() {
    return localStorage.getItem('token_id');
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.errors || JSON.stringify(body);
      errMsg = JSON.parse(err);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
