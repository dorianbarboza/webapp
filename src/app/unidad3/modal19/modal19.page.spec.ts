import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal19Page } from './modal19.page';

describe('Modal19Page', () => {
  let component: Modal19Page;
  let fixture: ComponentFixture<Modal19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal19Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
