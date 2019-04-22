import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part29Page } from './part29.page';

describe('Part29Page', () => {
  let component: Part29Page;
  let fixture: ComponentFixture<Part29Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part29Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
