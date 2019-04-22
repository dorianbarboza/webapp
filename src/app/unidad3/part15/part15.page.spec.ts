import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part15Page } from './part15.page';

describe('Part15Page', () => {
  let component: Part15Page;
  let fixture: ComponentFixture<Part15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part15Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
