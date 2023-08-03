import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clase21Component } from './clase21.component';

describe('Clase21Component', () => {
  let component: Clase21Component;
  let fixture: ComponentFixture<Clase21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clase21Component]
    });
    fixture = TestBed.createComponent(Clase21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
