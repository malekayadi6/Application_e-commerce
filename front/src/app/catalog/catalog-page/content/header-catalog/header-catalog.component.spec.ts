import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCatalogComponent } from './header-catalog.component';

describe('HeaderCatalogComponent', () => {
  let component: HeaderCatalogComponent;
  let fixture: ComponentFixture<HeaderCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
