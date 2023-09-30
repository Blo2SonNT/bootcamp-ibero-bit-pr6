import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisLikesComponent } from './mis-likes.component';

describe('MisLikesComponent', () => {
  let component: MisLikesComponent;
  let fixture: ComponentFixture<MisLikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisLikesComponent]
    });
    fixture = TestBed.createComponent(MisLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
