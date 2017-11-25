import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],

  declarations: [FooterComponent, NavbarComponent],
  exports : [
    FooterComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
