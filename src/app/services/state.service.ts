import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StateService {

  private stateUrl:string = 'http://localhost:3000/api/v1';

  constructor(private http: Http) { }


  all(): Observable<any> {
    return this.http.get(`${this.stateUrl}/mains.json`)
            .map((result: Response) => result.json())
            .catch(this.handleError);
  }

  update(state): Observable<any> {
    return this.http.put(`${this.stateUrl}/mains/${state.id}.json`, state)
            .map((result: Response) => result.json())
            .catch(this.handleError);
  }

  delete(state): Observable<any> {
    return this.http.delete(`${this.stateUrl}/mains/${state.id}.json`, state)
            .map((result: Response) => result.json())
            .catch(this.handleError);
  }

  create(state): Observable<any> {
    return this.http.post(`${this.stateUrl}/mains.json`, state)
            .map((result: Response) => result.json())
            .catch(this.handleError);
  }

  changePosition(state): Observable<any> {
    return this.http.put(`${this.stateUrl}/mains/${state.id}/position`, state)
            .map((result: Response) => result.json())
            .catch(this.handleError);
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
