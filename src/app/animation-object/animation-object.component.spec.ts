/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnimationObjectComponent } from './animation-object.component';

describe('AnimationObjectComponent', () => {
  let component: AnimationObjectComponent;
  let fixture: ComponentFixture<AnimationObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
