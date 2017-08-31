import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOfferedComponent } from './services-offered.component';

describe('ServicesOfferedComponent', () => {
  let component: ServicesOfferedComponent;
  let fixture: ComponentFixture<ServicesOfferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesOfferedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});