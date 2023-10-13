/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpanerComponent } from './spaner.component';

describe('SpanerComponent', () => {
  let component: SpanerComponent;
  let fixture: ComponentFixture<SpanerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
