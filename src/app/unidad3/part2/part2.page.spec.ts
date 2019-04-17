import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part2Page } from './part2.page';

describe('Part2Page', () => {
  let component: Part2Page;
  let fixture: ComponentFixture<Part2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
