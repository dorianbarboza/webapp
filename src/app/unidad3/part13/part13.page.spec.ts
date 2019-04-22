import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part13Page } from './part13.page';

describe('Part13Page', () => {
  let component: Part13Page;
  let fixture: ComponentFixture<Part13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
