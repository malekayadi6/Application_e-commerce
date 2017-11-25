import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-product-full-image',
  templateUrl: './product-full-image.component.html',
  styleUrls: ['./product-full-image.component.css']
})
export class ProductFullImageComponent implements OnInit {
  @Input() mainImage: string;
  constructor() { }

  ngOnInit() {
    //(this.mainImage);
  }
  getImage(){
    return environment.API_ENDPOINT + this.mainImage;

  }
}

