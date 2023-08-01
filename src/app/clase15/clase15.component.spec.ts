import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase15Component } from './clase15.component';

describe('Clase15Component', () => {
  let component: Clase15Component;
  let fixture: ComponentFixture<Clase15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clase15Component]
    });
    fixture = TestBed.createComponent(Clase15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
