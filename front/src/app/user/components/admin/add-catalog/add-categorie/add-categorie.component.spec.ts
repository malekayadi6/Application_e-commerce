import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorieComponent } from './add-categorie.component';

describe('AddCategorieComponent', () => {
  let component: AddCategorieComponent;
  let fixture: ComponentFixture<AddCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
