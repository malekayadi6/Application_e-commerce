import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import {UserRoutes} from "./user.routes";
import {ImageUploadModule} from "angular2-image-upload";
import { AddCatalogComponent } from './components/admin/add-catalog/add-catalog.component';
import { AddProductComponent } from './components/admin/add-catalog/add-product/add-product.component';
import { AddCategorieComponent } from './components/admin/add-catalog/add-categorie/add-categorie.component';
import { AddSubCategoireComponent } from './components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component';
import { DisplayCatalogComponent } from './components/admin/display-catalog/display-catalog.component';
import { ShowProductsComponent } from './components/admin/display-catalog/show-products/show-products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddAdminComponent } from './components/admin/add-admin/add-admin.component';
import {InlineEditorModule} from "ng2-inline-editor";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { AccountComponent } from './components/client/account/account.component';
import { OrdersComponent } from './components/client/orders/orders.component';
import { WishlistComponent } from './components/client/wishlist/wishlist.component';
import {TranslateModule} from "@ngx-translate/core";
import { OrdersAdminComponent } from './components/admin/orders-admin/orders-admin.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(UserRoutes),
    ImageUploadModule.forRoot(),
    FormsModule,ReactiveFormsModule,
    InlineEditorModule,
    TranslateModule,

    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),

  ],
  declarations: [
    AdminComponent,
    ClientComponent ,
    AddCatalogComponent,
    AddProductComponent,
    AddCategorieComponent,
    AddSubCategoireComponent,
    DisplayCatalogComponent,
    ShowProductsComponent,
    AddAdminComponent,
    AccountComponent,
    OrdersComponent,
    WishlistComponent,
    OrdersAdminComponent
  ]
})
export class UserModule { }
