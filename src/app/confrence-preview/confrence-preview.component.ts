import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InternetConnection } from '../Extension/internetConnection';
import {ConfrenceDetailService} from '../services/confrence-detail/confrence-detail.service';
 

@Component({
  selector: 'app-confrence-preview', 
  templateUrl: './confrence-preview.component.html',
  styleUrls: ['./confrence-preview.component.css']
})
export class ConfrencePreviewComponent implements OnInit {
  public eventId;
  public detailData: any = {};
  name: string;

 


  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private _confrenceDetail: ConfrenceDetailService, private _checkConnection: InternetConnection) {
    this.route.params.subscribe(params => {
      this.eventId = params['eventId'];

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

 
 
}