import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part25Page } from './part25.page';

describe('Part25Page', () => {
  let component: Part25Page;
  let fixture: ComponentFixture<Part25Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part25Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
