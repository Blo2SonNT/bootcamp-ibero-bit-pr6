import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFormsModuleComponent } from './registro-forms-module.component';

describe('RegistroFormsModuleComponent', () => {
  let component: RegistroFormsModuleComponent;
  let fixture: ComponentFixture<RegistroFormsModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroFormsModuleComponent]
    });
    fixture = TestBed.createComponent(RegistroFormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
