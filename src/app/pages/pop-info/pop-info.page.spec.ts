import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopInfoPage } from './pop-info.page';

describe('PopInfoPage', () => {
  let component: PopInfoPage;
  let fixture: ComponentFixture<PopInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
