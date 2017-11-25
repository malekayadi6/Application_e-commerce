import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreProductsComponent } from './filtre-products.component';

describe('FiltreProductsComponent', () => {
  let component: FiltreProductsComponent;
  let fixture: ComponentFixture<FiltreProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
