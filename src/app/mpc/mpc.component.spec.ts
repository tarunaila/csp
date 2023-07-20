import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpcComponent } from './mpc.component';

describe('MpcComponent', () => {
  let component: MpcComponent;
  let fixture: ComponentFixture<MpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MpcComponent]
    });
    fixture = TestBed.createComponent(MpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
