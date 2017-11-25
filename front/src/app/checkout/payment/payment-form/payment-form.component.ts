import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2, @Inject(DOCUMENT) private _document
  ) { }

  ngOnInit() {
    let s = this._renderer2.createElement('script');
    s.type = "text/javascript";
    s.src="http://localhost/back/test.js";
    this._renderer2.appendChild(this._document.body, s);

  }

}
