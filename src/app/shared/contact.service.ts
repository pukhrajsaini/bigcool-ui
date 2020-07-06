import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  queryApi = '/api/url';

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
    return this.$http.post(this.queryApi, query);
  }

}
