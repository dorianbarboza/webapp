import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part11Page } from './part11.page';

describe('Part11Page', () => {
  let component: Part11Page;
  let fixture: ComponentFixture<Part11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
