import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QueryModel } from './models/query.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  queryApi = 'http://localhost:3000/api/query';

  constructor(private $http: HttpClient) { }

  queryForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      mobile: new FormControl(null, Validators.required),
      query: new FormControl(null, Validators.required)
    });
  }

  addQuery(query: any): Observable<any> {
    return this.$http.post<any>(this.queryApi, query, { observe: 'response' });
  }

  getAllQueries(): Observable<QueryModel[]> {
    return this.$http.get<QueryModel[]>(this.queryApi);
  }

  // tslint:disable-next-line:variable-name
  deleteQuery(_id: string): Observable<any> {
    return this.$http.delete<any>(`${this.queryApi}/${_id}`);
  }

  // tslint:disable-next-line:variable-name
  patchQuery(_id: string): Observable<any> {
    return this.$http.patch<any>(`${this.queryApi}/${_id}`, null);
  }

}
