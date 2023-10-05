import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmpanadasComponent } from './gestion-empanadas.component';

describe('GestionEmpanadasComponent', () => {
  let component: GestionEmpanadasComponent;
  let fixture: ComponentFixture<GestionEmpanadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionEmpanadasComponent]
    });
    fixture = TestBed.createComponent(GestionEmpanadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
