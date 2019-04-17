import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica2Page } from './practica2.page';

describe('Practica2Page', () => {
  let component: Practica2Page;
  let fixture: ComponentFixture<Practica2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practica2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practica2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
