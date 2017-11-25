import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../actions/auth.actions";
import {AppState} from "../../../reducers/root-reducers";
import {UserActions} from "../../../user/actions/user.actions";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formSubmit = false;
  errorSubmit = false;
  errorMsg: string;

  constructor(private store: Store<AppState>,
              private authService: AuthService,
              private authActions: AuthActions,
              private userActions: UserActions,
              // private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,) {
  }

  ngOnInit() {
    this.initForm();

  }

  onSubmit() {
    const values = this.loginForm.value;
    this.formSubmit = true;
    this.errorSubmit = false;
    this.errorMsg = '';
    this.authService.login(values).subscribe(res => {
      if (!res.error) {
        this.errorSubmit = false;
        this.errorMsg = "";
        localStorage.setItem("auth", JSON.stringify(true));
        localStorage.setItem("user", JSON.stringify(res.user))
        this.store.dispatch(this.authActions.loginSuccess());
        this.store.dispatch(this.userActions.getUserSuccess(res.user));
        if (res.user.type == 1) {
          this.router.navigate(['/user/admin']);

        } else if (res.user.type == 2) {
          this.router.navigate(['/user/client']);
        } else {

        }


      } else {
        this.errorSubmit = true;
        this.errorMsg = res.msg;


      }
    });
  }



  initForm() {

    const email = ''; // email address attribute in Atg
    const password = '';

    this.loginForm = this.fb.group({
      'email':[email, [Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      'password': [password, Validators.required ],
    });
    ////g(this.loginForm);
  }



}
