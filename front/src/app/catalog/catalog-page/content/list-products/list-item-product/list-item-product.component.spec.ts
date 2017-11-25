import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemProductComponent } from './list-item-product.component';

describe('ListItemProductComponent', () => {
  let component: ListItemProductComponent;
  let fixture: ComponentFixture<ListItemProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
