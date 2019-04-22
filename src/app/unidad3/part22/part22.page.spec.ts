import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part22Page } from './part22.page';

describe('Part22Page', () => {
  let component: Part22Page;
  let fixture: ComponentFixture<Part22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part22Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
