import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part18Page } from './part18.page';

describe('Part18Page', () => {
  let component: Part18Page;
  let fixture: ComponentFixture<Part18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part18Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
