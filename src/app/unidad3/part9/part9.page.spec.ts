import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part9Page } from './part9.page';

describe('Part9Page', () => {
  let component: Part9Page;
  let fixture: ComponentFixture<Part9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
