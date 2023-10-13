/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreatMatchComponent } from './CreatMatch.component';

describe('CreatMatchComponent', () => {
  let component: CreatMatchComponent;
  let fixture: ComponentFixture<CreatMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
