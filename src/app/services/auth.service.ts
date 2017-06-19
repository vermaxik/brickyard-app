import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {
  private authUrl:string = 'http://localhost:3000/api/v1/authenticate'
  isLoggedIn = false;
  role:string;

  constructor(private http: Http,
              private router: Router) {}

  login(credentials): Observable<any> {
    return this.http.post(this.authUrl, credentials)
            .map((result: Response) => result.json())
            .catch(this.handleError);
  }

  token(): Observable<any> {
    let token = localStorage.getItem('token_id');
    if(token) {
      return this.http.get(`${this.authUrl}/${token}`)
            .map((result: Response) => result.json())
            .catch(this.handleError);
    } else {
      return Observable.of();
    }
  }


  logout() {
    console.log("log from auth");
    localStorage.removeItem('token_id');
    this.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.errors || JSON.stringify(body);
      errMsg = `Error: ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
