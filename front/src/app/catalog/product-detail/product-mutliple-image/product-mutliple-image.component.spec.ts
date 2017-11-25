import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMutlipleImageComponent } from './product-mutliple-image.component';

describe('ProductMutlipleImageComponent', () => {
  let component: ProductMutlipleImageComponent;
  let fixture: ComponentFixture<ProductMutlipleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMutlipleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMutlipleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
