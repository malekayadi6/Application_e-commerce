import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { ContentComponent } from './catalog-page/content/content.component';
import { ListProductsComponent } from './catalog-page/content/list-products/list-products.component';
import {HeaderCatalogComponent} from "./catalog-page/content/header-catalog/header-catalog.component";
import {RouterModule} from "@angular/router";
import {CatalogRoutes} from "./catalog.routes";
import { ListItemProductComponent } from './catalog-page/content/list-products/list-item-product/list-item-product.component';
import { FiltreProductsComponent } from './catalog-page/content/filtre-products/filtre-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductMutlipleImageComponent } from './product-detail/product-mutliple-image/product-mutliple-image.component';
import { ProductFullImageComponent } from './product-detail/product-full-image/product-full-image.component';
import {ShareButtonsModule} from "ngx-sharebuttons";
import {Ng2PaginationModule} from "ng2-pagination";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(CatalogRoutes),
    ShareButtonsModule.forRoot(),
    Ng2PaginationModule,


  ],
  declarations: [CatalogPageComponent, ContentComponent, ListProductsComponent,HeaderCatalogComponent, ListItemProductComponent, FiltreProductsComponent, ProductDetailComponent, ProductMutlipleImageComponent, ProductFullImageComponent],
  exports : [CatalogPageComponent, ContentComponent, ListProductsComponent,HeaderCatalogComponent,ProductDetailComponent]
})
export class CatalogModule { }
