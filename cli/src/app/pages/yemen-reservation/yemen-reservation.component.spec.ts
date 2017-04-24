/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YemenReservationComponent } from './yemen-reservation.component';

describe('YemenReservationComponent', () => {
  let component: YemenReservationComponent;
  let fixture: ComponentFixture<YemenReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YemenReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YemenReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
