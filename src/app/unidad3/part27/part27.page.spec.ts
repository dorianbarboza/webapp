import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part27Page } from './part27.page';

describe('Part27Page', () => {
  let component: Part27Page;
  let fixture: ComponentFixture<Part27Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part27Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
