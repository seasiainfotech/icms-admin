import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternetConnection } from '../Extension/internetConnection';
import { DatePipe } from '@angular/common';
import { SessionsListService } from '../services/sessions-list/sessions-list.service';

@Component({
  selector: 'app-confrence-session-list',
  templateUrl: './confrence-session-list.component.html',
  styleUrls: ['./confrence-session-list.component.css']
})
export class ConfrenceSessionListComponent implements OnInit {
  public eventId;
  public detailData: any = {};
  name: string;

  constructor(private datePipe: DatePipe, private route: ActivatedRoute, private _sessionList: SessionsListService, private _checkConnection: InternetConnection) {
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

        this._sessionList.getSessionList("session_list?event_id=" + id[1] + "")
          .subscribe(data => {
            this.detailData = data;
            console.log("session_list", this.detailData);

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
