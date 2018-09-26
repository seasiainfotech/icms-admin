import { Component, OnInit } from '@angular/core';
import { InternetConnection } from '../Extension/internetConnection';
import { EventListingService } from '../services/event-listing/event-listing.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-confrence-list',
  templateUrl: './confrence-list.component.html',
  styleUrls: ['./confrence-list.component.css']
})
export class ConfrenceListComponent implements OnInit {
  localDate: any;
  public dataSource;
  public res: any = {};
  name: string;

  constructor(private _eventlistingService: EventListingService, private _checkConnection: InternetConnection, private datePipe: DatePipe) {

  }

  ngOnInit() {
    //intertnet Check
    this._checkConnection.online$.subscribe(value => {
      this.name = `${value}`;
      if (this.name === "true") {
        console.log("ONLINE")

        // hitApi
        this._eventlistingService.getEventListing("event_list")
          .subscribe(data => {
            this.res = data;
            this.dataSource = data;
            console.log(this.dataSource);
           
          })
      }
      else {
        console.log("OFFLINE")
        this._checkConnection.internetAlert();
      }
    });
  }
  convertToUtcDate(utcDate){
    var localDate = new Date(utcDate);
    var diffDate = this.datePipe.transform(localDate,"yyyy-MM-dd")
    return diffDate;
  } 
  
  convertToUtcTime(utcDate){
    var localDate = new Date(utcDate);
    var diffDate = this.datePipe.transform(localDate,"hh:mm a")
    return diffDate;
  } 

  setIndex(ind){
    console.log("event-----"+this.dataSource.event_list[ind].event_id)
  }
}