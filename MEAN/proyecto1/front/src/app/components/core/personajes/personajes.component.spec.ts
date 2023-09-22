import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesComponent } from './personajes.component';

describe('PersonajesComponent', () => {
  let component: PersonajesComponent;
  let fixture: ComponentFixture<PersonajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajesComponent]
    });
    fixture = TestBed.createComponent(PersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
