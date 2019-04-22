import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part26Page } from './part26.page';

describe('Part26Page', () => {
  let component: Part26Page;
  let fixture: ComponentFixture<Part26Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part26Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
