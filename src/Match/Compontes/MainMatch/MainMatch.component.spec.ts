/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainMatchComponent } from './MainMatch.component';

describe('MainMatchComponent', () => {
  let component: MainMatchComponent;
  let fixture: ComponentFixture<MainMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
