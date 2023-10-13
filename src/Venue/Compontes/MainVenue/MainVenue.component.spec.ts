/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainVenueComponent } from './MainVenue.component';

describe('MainVenueComponent', () => {
  let component: MainVenueComponent;
  let fixture: ComponentFixture<MainVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
