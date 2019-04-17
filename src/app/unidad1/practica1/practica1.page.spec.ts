import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica1Page } from './practica1.page';

describe('Practica1Page', () => {
  let component: Practica1Page;
  let fixture: ComponentFixture<Practica1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practica1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practica1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
