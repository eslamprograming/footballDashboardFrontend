/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainStandingsComponent } from './MainStandings.component';

describe('MainStandingsComponent', () => {
  let component: MainStandingsComponent;
  let fixture: ComponentFixture<MainStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStandingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
