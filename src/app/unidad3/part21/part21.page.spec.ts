import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part21Page } from './part21.page';

describe('Part21Page', () => {
  let component: Part21Page;
  let fixture: ComponentFixture<Part21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part21Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
