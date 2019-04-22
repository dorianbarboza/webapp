import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part12Page } from './part12.page';

describe('Part12Page', () => {
  let component: Part12Page;
  let fixture: ComponentFixture<Part12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
