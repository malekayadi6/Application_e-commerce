import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-mutliple-image',
  templateUrl: './product-mutliple-image.component.html',
  styleUrls: ['./product-mutliple-image.component.css']
})
export class ProductMutlipleImageComponent implements OnInit {
  @Input() multipleImages: any[];
  @Output() eventEmitterImageChange= new EventEmitter();
  constructor() { }

  ngOnInit() {
    //("immmageggegegegeg"+this.multipleImages);
  }

  getProductImage(image:string){
    return environment.API_ENDPOINT + image;
  }
  changeProductSkuMainImage(imageUrl:string){
   //(imageUrl+"clicked        mmm m m m m m m m ");
    this.eventEmitterImageChange.emit(imageUrl);
  }
}
