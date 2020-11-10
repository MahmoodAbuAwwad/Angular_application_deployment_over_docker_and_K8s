import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  ApiGetData = '/api/v1/fetch';
  ApiAddData = '/api/v1/add/';
  HostAPI = environment.API_URL;
  Port = environment.PORT;



  // tslint:disable-next-line:typedef
  getData() {
    return this.http.get( "http://" + this.HostAPI + ":"+ this.Port + this.ApiGetData);
  }

  // tslint:disable-next-line:typedef
  addData(text: string){


    const url = "http://"+this.HostAPI+ ":" + this.Port + this.ApiAddData + text;
    return this.http.post(url , text, {responseType: 'text'}).subscribe();
  }
}
