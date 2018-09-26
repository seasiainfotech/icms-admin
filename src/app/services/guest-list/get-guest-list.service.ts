import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import { IGetGuestListResponse } from 'src/app/services/interfaces/getGuestListResponse';


@Injectable({
  providedIn: 'root'
})
export class GetGuestListService {
  private _url: string = "http://stgsd.appsndevs.com:9048/guest/guestList?event_id=";
  constructor(private _http: HttpClient) { }

  getGuestList(id): Observable<IGetGuestListResponse[]> {
    var eventid = "17";
    return this._http.get<IGetGuestListResponse[]>(this._url+id);
  }
}
