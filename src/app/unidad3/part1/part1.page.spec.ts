import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part1Page } from './part1.page';

describe('Part1Page', () => {
  let component: Part1Page;
  let fixture: ComponentFixture<Part1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
