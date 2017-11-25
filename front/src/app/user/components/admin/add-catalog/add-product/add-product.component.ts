import { Component, OnInit } from '@angular/core';
import {FileHolder} from "angular2-image-upload/lib/image-upload/image-upload.component";
import {CatalogActions} from "../../../../../catalog/actions/catalog-actions";
import {AppState} from "../../../../../reducers/root-reducers";
import {Store} from "@ngrx/store";
import {getAllCategories} from "../../../../../catalog/reducers/selectores";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../../../core/services/user.service";
import 'rxjs/add/operator/map';
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../../../../environments/environment";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   urluploadImg:any=environment.urlUpload;
    rootCategorie:any;
  selectedDeviceObj:any;
  selectedDevice:any;
  i:any;
  t:any;
  subCat:any;
  imageTable:any[]=[];
  catSelect=false;
  loginForm: FormGroup;
  formSubmit = false;
  errorSubmit = false;
  constructor(

    private catalogAction:CatalogActions,
    private store:Store<AppState>,
    private fb: FormBuilder,
    private userService:UserService,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.initForm();

    this.store.select(getAllCategories).
    subscribe(rootCategorie=>{
      this.rootCategorie=rootCategorie;
    //("root " +JSON.stringify(rootCategorie));


  });
  }
  onSubmit() {
    const values = this.loginForm.value;


    //g(JSON.stringify(values));
     //("submit")
    this.userService.addProduct(values).subscribe(res=>{

      this.toastr.success(res.msg, 'success!');
     this.initForm();

    })
  }

  onChange(value){
       this.subCat=this.rootCategorie.categorie[value] ;
       this.catSelect=true;
     //  //("test asme 2  "+JSON.stringify(this.rootCategorie.categorie[value]));

  }
  imageFinishedUploading(file: FileHolder) {
  //  //("test"+JSON.stringify(file.serverResponse));

  }

  imageRemoved(file: FileHolder) {
    // do some stuff with the removed file.
   // //("test"+JSON.stringify(file.serverResponse));
  }


  imageUploaded(event){
    this.imageTable.push(event.file.name);
  }




  initForm() {

    const title = ''; // email address attribute in Atg
    const price = '';
    const images=this.imageTable=[];



    this.loginForm = this.fb.group({
      'title': [title],
      'price': [price],
      'stock':'',
      'description':'',
      'subCategorie':'',
      'categorie':'',
      'image':[images],

    })
  }
}
