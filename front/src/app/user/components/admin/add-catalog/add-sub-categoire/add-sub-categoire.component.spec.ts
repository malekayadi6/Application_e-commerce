import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubCategoireComponent } from './add-sub-categoire.component';

describe('AddSubCategoireComponent', () => {
  let component: AddSubCategoireComponent;
  let fixture: ComponentFixture<AddSubCategoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubCategoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubCategoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
