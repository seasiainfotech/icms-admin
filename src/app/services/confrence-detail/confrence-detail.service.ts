import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { IConfrencedetail } from '../interfaces/confrence-detail';
@Injectable({
  providedIn: 'root'
})
export class ConfrenceDetailService {
 
  private _url: string = "http://stgsd.appsndevs.com:9048/event/";
  constructor( private _http: HttpClient) { }

  getConfrencetDetail(api_name): Observable<IConfrencedetail[]> {
    console.log(this._url+api_name)
    return this._http.get<IConfrencedetail[]>(this._url+api_name);
  }
}
