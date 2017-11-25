import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCatalogComponent } from './display-catalog.component';

describe('DisplayCatalogComponent', () => {
  let component: DisplayCatalogComponent;
  let fixture: ComponentFixture<DisplayCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
