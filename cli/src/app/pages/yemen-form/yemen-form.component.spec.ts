/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YemenFormComponent } from './yemen-form.component';

describe('YemenFormComponent', () => {
  let component: YemenFormComponent;
  let fixture: ComponentFixture<YemenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YemenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YemenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
