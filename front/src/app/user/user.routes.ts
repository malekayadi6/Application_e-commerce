




import {AdminComponent} from "./components/admin/admin.component";
import {ClientComponent} from "./components/client/client.component";
import {AddProductComponent} from "./components/admin/add-catalog/add-product/add-product.component";
import {AddSubCategoireComponent} from "./components/admin/add-catalog/add-sub-categoire/add-sub-categoire.component";
import {AddCatalogComponent} from "./components/admin/add-catalog/add-catalog.component";
import {AddCategorieComponent} from "./components/admin/add-catalog/add-categorie/add-categorie.component";
import {DisplayCatalogComponent} from "./components/admin/display-catalog/display-catalog.component";
import {ShowProductsComponent} from "./components/admin/display-catalog/show-products/show-products.component";
import {AddAdminComponent} from "./components/admin/add-admin/add-admin.component";
import {OrdersComponent} from "./components/client/orders/orders.component";
import {AccountComponent} from "./components/client/account/account.component";
import {WishlistComponent} from "./components/client/wishlist/wishlist.component";
import {OrdersAdminComponent} from "./components/admin/orders-admin/orders-admin.component";

export const UserRoutes = [
  {path:'admin',component:AdminComponent,

    children: [
      { path: '', redirectTo: 'add', pathMatch: 'full' },
      { path: 'add', component:AddCatalogComponent ,
        children: [
          { path: '', redirectTo: 'product', pathMatch: 'full' },
          { path: 'product', component:AddProductComponent },
          { path: 'subcategorie', component: AddSubCategoireComponent },
          { path: 'categorie', component: AddCategorieComponent },
        ],

      },
      { path: 'show', component:DisplayCatalogComponent } ,
      { path: 'orders', component:OrdersAdminComponent } ,


 /*       children: [
          { path: '', redirectTo: 'product', pathMatch: 'full' },
          { path: 'product', component:ShowProductsComponent },

        ],

      },*/
      {path:'addusers',component:AddAdminComponent},

    ]
  },
  {path:'client',component:ClientComponent,
    children: [
      { path: '', redirectTo: 'account', pathMatch: 'full' },

      { path: 'wishlist', component:WishlistComponent} ,
      { path: 'account', component:AccountComponent} ,
      { path: 'orders', component:OrdersComponent}
  ]


  },



];
