import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCartComponent } from './form-cart.component';

describe('FormCartComponent', () => {
  let component: FormCartComponent;
  let fixture: ComponentFixture<FormCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
