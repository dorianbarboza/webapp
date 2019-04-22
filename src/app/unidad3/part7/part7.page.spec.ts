import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part7Page } from './part7.page';

describe('Part7Page', () => {
  let component: Part7Page;
  let fixture: ComponentFixture<Part7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
