import { Component, OnInit } from '@angular/core';
import { GetGuestListService } from '../services/guest-list/get-guest-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  public eventId;
  public res: any = {};
  
  constructor(private getGuestListService: GetGuestListService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.eventId = params['event_id'];
      console.log("Event_Id-->" + this.eventId)
    });
  }

  ngOnInit() {

    let id = this.eventId.split(":");

    this.getGuestListService.getGuestList(id[1])
      .subscribe(data => {
        this.res = data;
        console.log("guest list ", data);
      })
  }

}

