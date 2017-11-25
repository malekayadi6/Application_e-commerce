import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserActions} from "../../../actions/user.actions";
import {AuthActions} from "../../../../auth/actions/auth.actions";
import {AuthService} from "../../../../core/services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../reducers/root-reducers";

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  loginForm: FormGroup;
  formSubmit = false;
  errorSubmit = false;
  errorMsg: string;
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private authActions: AuthActions,
    private userActions: UserActions,
    // private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {
    this.initForm();
  }


  onSubmit() {
    const values = this.loginForm.value;
    this.formSubmit = true;
    this.errorSubmit = false;
    this.errorMsg = '';
    //g("values" + values)
    this.authService.signUp(values).subscribe(res=>{

      //g(JSON.stringify(res));
    })
  }

  initForm() {

    const email = ''; // email address attribute in Atg
    const password = '';
    const type = '';
    const name='';

    this.loginForm = this.fb.group({
      'email':[email, [Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      'name': [name, [Validators.required,
        Validators.minLength(3)]],
      'type': [type],
      'password': [password, [Validators.required,
        Validators.minLength(6)]],
      'confPassword': '' /*[confPassword, [Validators.required,
        Validators.minLength(6)],*/


    });
  }

}
