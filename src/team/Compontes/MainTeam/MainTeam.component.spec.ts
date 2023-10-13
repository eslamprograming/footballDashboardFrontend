/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainTeamComponent } from './MainTeam.component';

describe('MainTeamComponent', () => {
  let component: MainTeamComponent;
  let fixture: ComponentFixture<MainTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
