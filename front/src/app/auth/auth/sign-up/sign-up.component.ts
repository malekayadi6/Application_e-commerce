import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthService} from "../../../core/services/auth.service";
import {AuthActions} from "../../actions/auth.actions";
import {UserActions} from "../../../user/actions/user.actions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppState} from "../../../reducers/root-reducers";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
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
    private toastr: ToastrService,

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
    //g("values" + JSON.stringify(values));
    this.authService.signUp(values).subscribe(res=>{
     /* localStorage.setItem("auth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(res.user))
      this.store.dispatch(this.authActions.loginSuccess());
      this.store.dispatch(this.userActions.getUserSuccess(res.user));
      //g(JSON.stringify(res));
      this.router.navigate(['/user/client']);*/
     //g(JSON.stringify(res));
      this.toastr.success(res.msg, 'success!');


    })
  }
  initForm() {

    const email = ''; // email address attribute in Atg
    const password = '';
    const type = '2';
    const name='';
    const confPassword='';
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
