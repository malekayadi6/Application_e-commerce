



import {CatalogPageComponent} from "./catalog-page/catalog-page.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

export const CatalogRoutes = [
  { path:'product/:id',component: ProductDetailComponent},

  {
    path: ':folder',
    children: [
      {
        path: ':id', component: CatalogPageComponent,
      },
    ],
  },



];
