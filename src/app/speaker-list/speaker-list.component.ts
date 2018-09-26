import { Component, OnInit } from '@angular/core';
import { GetSpeakerListService } from '../services/speaker-list/get-speaker-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.css']
})
export class SpeakerListComponent implements OnInit {
  public eventId;
  public detailData: any = {};
  name: string;

  public res: any = {};
  constructor(private getSpeakersListService: GetSpeakerListService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.eventId = params['event_id'];
      console.log("Event_Id-->" + this.eventId)
    });
  }

  ngOnInit() {
    let id = this.eventId.split(":");
    this.getSpeakersListService.getspeakersList(id[1])
      .subscribe(data => {
        this.res = data;
        console.log("speakers list ", data);
      })

  }
}