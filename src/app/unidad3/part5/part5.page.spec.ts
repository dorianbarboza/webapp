import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part5Page } from './part5.page';

describe('Part5Page', () => {
  let component: Part5Page;
  let fixture: ComponentFixture<Part5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
