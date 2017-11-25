import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../core/services/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private userService:UserService,
  ) { }

  ngOnInit() {
  }


  test(){
    this.userService.getUser(1).
      subscribe()

  }
}
