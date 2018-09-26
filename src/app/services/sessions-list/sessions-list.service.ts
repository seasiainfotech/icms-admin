import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { IConfrenceSessions } from '../interfaces/confrence-sessions';
@Injectable({
  providedIn: 'root'
})
export class SessionsListService {

  
  private _url: string = "http://stgsd.appsndevs.com:9048/session/";
  constructor( private _http: HttpClient) { }

  getSessionList(api_name): Observable<IConfrenceSessions[]> {
    console.log(this._url+api_name)
    return this._http.get<IConfrenceSessions[]>(this._url+api_name);
  }
}
