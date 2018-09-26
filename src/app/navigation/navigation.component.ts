import { Component, OnInit } from '@angular/core';
import { HideUnhideNAvService } from '../hide-unhide-nav.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public navService: HideUnhideNAvService ) { }

  ngOnInit() {
  }

}
