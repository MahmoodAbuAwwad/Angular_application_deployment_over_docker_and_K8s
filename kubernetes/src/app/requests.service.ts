import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  ApiGetData = 'http://localhost:5000/api/v1/fetch';
  ApiAddData = 'http://localhost:5000/api/v1/add/';



  // tslint:disable-next-line:typedef
  getData() {
    return this.http.get(this.ApiGetData);
  }

  // tslint:disable-next-line:typedef
  addData(text: string){


    const url = this.ApiAddData + text;
    return this.http.post(url , text, {responseType: 'text'}).subscribe();
  }
}
