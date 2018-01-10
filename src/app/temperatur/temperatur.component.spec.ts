import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturComponent } from './temperatur.component';

describe('TemperaturComponent', () => {
  let component: TemperaturComponent;
  let fixture: ComponentFixture<TemperaturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
