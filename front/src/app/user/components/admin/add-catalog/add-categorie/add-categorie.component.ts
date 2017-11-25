import { Component, OnInit } from '@angular/core';
import {getAllCategories} from "../../../../../catalog/reducers/selectores";
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppState} from "../../../../../reducers/root-reducers";
import {UserService} from "../../../../../core/services/user.service";
import {ToastrService} from "ngx-toastr";
import {FileHolder} from "angular2-image-upload/lib/image-upload/image-upload.component";
import {CatalogActions} from "../../../../../catalog/actions/catalog-actions";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  loginForm: FormGroup;
  imageTable:any[]=[];
  urluploadImg:any=environment.urlUpload;


  constructor(
    private store:Store<AppState>,
    private fb: FormBuilder,
    private userService:UserService,
    private toastr: ToastrService,
    private catalogAction:CatalogActions,

  ) { }

  ngOnInit() {

    this.initForm();
  }

  onSubmit() {
    const values = this.loginForm.value;

    // service by asma
    this.userService.addCategorie(values).subscribe(res=>{
      //(JSON.stringify(res));
      this.toastr.success(res.msg, 'success!');
      this.store.dispatch(this.catalogAction.getAllCategories());


      this.initForm();


    })


  }

  initForm() {

    const title = '';
    const images=this.imageTable=[];

    this.loginForm = this.fb.group({
      'title': [title],
      'image':[images],


    })
  }

  imageUploaded(event){
    this.imageTable.push(event.file.name);
  }

  imageFinishedUploading(file: FileHolder) {
  //  //("test"+JSON.stringify(file.serverResponse));

  }

  imageRemoved(file: FileHolder) {
    // do some stuff with the removed file.
    ////("test"+JSON.stringify(file.serverResponse));
  }



}
