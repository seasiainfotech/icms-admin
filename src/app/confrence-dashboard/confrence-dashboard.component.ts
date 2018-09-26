import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternetConnection } from '../Extension/internetConnection';
import { ConfrenceDetailService } from '../services/confrence-detail/confrence-detail.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-confrence-dashboard',
  templateUrl: './confrence-dashboard.component.html',
  styleUrls: ['./confrence-dashboard.component.css']
})
export class ConfrenceDashboardComponent implements OnInit {
  public eventId;
  public detailData: any = {};
  name: string;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private _confrenceDetail: ConfrenceDetailService, private _checkConnection: InternetConnection) {
    this.route.params.subscribe(params => {
      this.eventId = params['event_id'];
console.log("Event_Id-->"+ this.eventId )
    });
  }

  ngOnInit() {
    this._checkConnection.online$.subscribe(value => {
      this.name = `${value}`;
      if (this.name === "true") {

        let id = this.eventId.split(":");

        this._confrenceDetail.getConfrencetDetail("eventdetails?event_id=" + id[1] + "")
          .subscribe(data => {
            this.detailData = data;
            console.log("event-detail", this.detailData);

          })
      }

      else {
        // console.log("OFFLINE")
        this._checkConnection.internetAlert();
      }
    });

    // this.speakerName();
  }
  convertToUtcDate(utcDate){
    var localDate = new Date(utcDate);
    var diffDate = this.datePipe.transform(localDate,"yyyy-MM-dd hh:mm a")
    return diffDate;
  } 
  

  convertToUtcTime(utcDate){
    var localDate = new Date(utcDate);
    var diffDate = this.datePipe.transform(localDate,"hh:mm a")
    return diffDate;
  } 
 
}
