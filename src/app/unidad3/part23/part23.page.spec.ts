import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part23Page } from './part23.page';

describe('Part23Page', () => {
  let component: Part23Page;
  let fixture: ComponentFixture<Part23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part23Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
