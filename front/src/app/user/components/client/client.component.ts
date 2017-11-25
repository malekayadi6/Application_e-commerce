import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../../auth/actions/auth.actions";
import {AppState} from "../../../reducers/root-reducers";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private authActions:AuthActions,
    private toastr: ToastrService,
    private router:Router,
    private authService:AuthService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
  }

  logout() {

    //("clicl logout");
    this.authService.logout().subscribe(res => {
      if (!res.error) {
        this.store.dispatch(this.authActions.logoutSuccess());
        localStorage.clear();
        this.toastr.info(res.msg, 'info !');
        this.router.navigate(['/auth']);
      }

    });

  }
  }
