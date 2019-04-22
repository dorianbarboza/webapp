import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part4Page } from './part4.page';

describe('Part4Page', () => {
  let component: Part4Page;
  let fixture: ComponentFixture<Part4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
