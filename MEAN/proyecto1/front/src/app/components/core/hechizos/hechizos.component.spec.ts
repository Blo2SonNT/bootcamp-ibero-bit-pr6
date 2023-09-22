import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HechizosComponent } from './hechizos.component';

describe('HechizosComponent', () => {
  let component: HechizosComponent;
  let fixture: ComponentFixture<HechizosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HechizosComponent]
    });
    fixture = TestBed.createComponent(HechizosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
