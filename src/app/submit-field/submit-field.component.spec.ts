import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFieldComponent } from './submit-field.component';

describe('SubmitFieldComponent', () => {
  let component: SubmitFieldComponent;
  let fixture: ComponentFixture<SubmitFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
