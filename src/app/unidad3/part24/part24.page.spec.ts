import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part24Page } from './part24.page';

describe('Part24Page', () => {
  let component: Part24Page;
  let fixture: ComponentFixture<Part24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part24Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
