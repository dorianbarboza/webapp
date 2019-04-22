import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part17Page } from './part17.page';

describe('Part17Page', () => {
  let component: Part17Page;
  let fixture: ComponentFixture<Part17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part17Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
