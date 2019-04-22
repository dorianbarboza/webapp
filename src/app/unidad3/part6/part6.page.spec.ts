import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part6Page } from './part6.page';

describe('Part6Page', () => {
  let component: Part6Page;
  let fixture: ComponentFixture<Part6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
