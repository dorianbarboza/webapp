import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part19Page } from './part19.page';

describe('Part19Page', () => {
  let component: Part19Page;
  let fixture: ComponentFixture<Part19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part19Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
