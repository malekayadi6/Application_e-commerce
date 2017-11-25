import { Component, OnInit } from '@angular/core';
import {CatalogActions} from "../../../../catalog/actions/catalog-actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../reducers/root-reducers";
import {UserService} from "../../../../core/services/user.service";
import {ToastrService} from "ngx-toastr";
import {getAllCategories, getListProducts} from "../../../../catalog/reducers/selectores";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-display-catalog',
  templateUrl: './display-catalog.component.html',
  styleUrls: ['./display-catalog.component.css']
})
export class DisplayCatalogComponent implements OnInit {

  private asma:any;
  rootCategorie:any;
  selectedDeviceObj:any;
  selectedDevice:any;
  selectedSubCat:any;
  products:any;
  subCat:any;
  imageTable:any[]=[];
  catSelect=false;
  public title: string = 'Confirmation';
  public message: string = 'You want to delete it ?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

  constructor(

    private catalogAction:CatalogActions,
    private store:Store<AppState>,
    private userService:UserService,
    private catalogActions:CatalogActions,
    private toastr: ToastrService,

  ) { }

  updateTitle(title,id){
       this.userService.updateTitle(id,title).subscribe(res=>{
           console.log(JSON.stringify(res));

       });

  }
  updateStock(stock,id){
    this.userService.updateStock(id,stock).subscribe(res=>{
      console.log(JSON.stringify(res));

    });

  }
    updatePrice(price,id){
      this.userService.updatePrice(id,price).subscribe(res=>{
        console.log(JSON.stringify(res));

      });

  }


  ngOnInit() {
    this.store.select(getAllCategories).
        subscribe(rootCategorie=> {
      this.rootCategorie = rootCategorie;
    });
  }
  onChange(value){
    this.subCat=this.rootCategorie.categorie[value] ;
    this.catSelect=true;

  }

  onChangeSub(value){
    this.asma=value;
    this.store.dispatch(this.catalogActions.getListProducts(value));
    this.store.select(getListProducts)
      .subscribe(products=>{
        this.products=products;


      });
    console.log("change sub " + value);

  }

  getImage(item):string{
    return  environment.API_ENDPOINT + item;
  }


  remove(id){
    this.confirmClicked=true;



    this.userService.remove(id)
      .subscribe((res) => {
        //  this.showToastr(item.skuName);

        if(!res.erreur){
          this.store.dispatch(this.catalogActions.getListProducts(this.asma));

          this.toastr.success(res.msg, 'success!')


        }else{
          this.toastr.error(res.msg, 'erreur!');

        }

      })

  }

}
