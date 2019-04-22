import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part14Page } from './part14.page';

describe('Part14Page', () => {
  let component: Part14Page;
  let fixture: ComponentFixture<Part14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
