import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/index";
import { IGetSpeakerListResponse } from '../interfaces/getSpeakerListResponse';


@Injectable({
  providedIn: 'root'
})
export class GetSpeakerListService {

  private _url: string = "http://stgsd.appsndevs.com:9048/speaker/speakerList?event_id=";
  constructor(private _http: HttpClient) { }

  getspeakersList(eventid): Observable<IGetSpeakerListResponse[]> {
    var eventidd = "17";
    return this._http.get<IGetSpeakerListResponse[]>(this._url+eventid);
  }
}
