import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase12Component } from './clase12.component';

describe('Clase12Component', () => {
  let component: Clase12Component;
  let fixture: ComponentFixture<Clase12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clase12Component]
    });
    fixture = TestBed.createComponent(Clase12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
