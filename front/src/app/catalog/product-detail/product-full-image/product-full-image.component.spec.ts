import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFullImageComponent } from './product-full-image.component';

describe('ProductFullImageComponent', () => {
  let component: ProductFullImageComponent;
  let fixture: ComponentFixture<ProductFullImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFullImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFullImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
