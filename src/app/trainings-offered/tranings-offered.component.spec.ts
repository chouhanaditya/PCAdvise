import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningsOfferedComponent } from './trainings-offered.component';

describe('TraningsOfferedComponent', () => {
  let component: TraningsOfferedComponent;
  let fixture: ComponentFixture<TraningsOfferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraningsOfferedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraningsOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
