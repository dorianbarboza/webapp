import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part28Page } from './part28.page';

describe('Part28Page', () => {
  let component: Part28Page;
  let fixture: ComponentFixture<Part28Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part28Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
