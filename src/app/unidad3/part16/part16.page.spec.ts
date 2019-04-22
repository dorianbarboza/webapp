import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part16Page } from './part16.page';

describe('Part16Page', () => {
  let component: Part16Page;
  let fixture: ComponentFixture<Part16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part16Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
