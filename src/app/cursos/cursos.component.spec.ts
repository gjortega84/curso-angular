import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponent2 } from './cursos.component';

describe('CursosComponent', () => {
  let component: CursosComponent2;
  let fixture: ComponentFixture<CursosComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosComponent2]
    });
    fixture = TestBed.createComponent(CursosComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
