import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part30Page } from './part30.page';

describe('Part30Page', () => {
  let component: Part30Page;
  let fixture: ComponentFixture<Part30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part30Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
