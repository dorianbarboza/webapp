import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part10Page } from './part10.page';

describe('Part10Page', () => {
  let component: Part10Page;
  let fixture: ComponentFixture<Part10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
