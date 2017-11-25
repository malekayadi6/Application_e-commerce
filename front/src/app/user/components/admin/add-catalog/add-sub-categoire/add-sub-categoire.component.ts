import { Component, OnInit } from '@angular/core';
import {getAllCategories} from "../../../../../catalog/reducers/selectores";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../../../core/services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppState} from "../../../../../reducers/root-reducers";
import {Store} from "@ngrx/store";
import {CatalogActions} from "../../../../../catalog/actions/catalog-actions";

@Component({
  selector: 'app-add-sub-categoire',
  templateUrl: './add-sub-categoire.component.html',
  styleUrls: ['./add-sub-categoire.component.css']
})
export class AddSubCategoireComponent implements OnInit {

  rootCategorie:any;
  loginForm: FormGroup;

  constructor(
    private store:Store<AppState>,
    private fb: FormBuilder,
    private userService:UserService,
    private toastr: ToastrService,
    private catalogAction:CatalogActions,
  ) { }

  ngOnInit() {
    this.store.select(getAllCategories).
    subscribe(rootCategorie=>{
      this.rootCategorie=rootCategorie;



    });
    this.initForm();
  }

  onSubmit() {
    const values = this.loginForm.value;
    const keys = Object.keys(values);
    //(JSON.stringify(values))
    //("submit")
    this.userService.addSubCategorie(values).subscribe(res=>{
      this.toastr.success(res.msg, 'success!');

      this.store.dispatch(this.catalogAction.getAllCategories());

    })

  }

  initForm() {

    const title = '';
    const categorie = '';
    this.loginForm = this.fb.group({
      'title': [title],
      'categorie':[categorie],

    })
  }
}
