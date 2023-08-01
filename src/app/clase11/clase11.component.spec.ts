import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase11Component } from './clase11.component';

describe('Clase11Component', () => {
  let component: Clase11Component;
  let fixture: ComponentFixture<Clase11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clase11Component]
    });
    fixture = TestBed.createComponent(Clase11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
