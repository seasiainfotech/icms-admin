import { Component, OnInit } from '@angular/core';
import { HideUnhideNAvService } from '../hide-unhide-nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public navService: HideUnhideNAvService) { }

  ngOnInit() {

    this.navService.hide();
  }

}
