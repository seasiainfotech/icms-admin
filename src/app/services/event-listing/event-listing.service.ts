import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IEventListing } from '../interfaces/event-lisitng';
import {Observable} from "rxjs";
 
@Injectable({
  providedIn: 'root'
})
export class EventListingService {
  private _url: string = "http://stgsd.appsndevs.com:9048/event/";
  constructor( private _http: HttpClient) { }

  getEventListing(api_name): Observable<IEventListing[]> {
    return this._http.get<IEventListing[]>(this._url+api_name);
  }

}
