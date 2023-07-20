import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpharmComponent } from './bpharm.component';

describe('BpharmComponent', () => {
  let component: BpharmComponent;
  let fixture: ComponentFixture<BpharmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BpharmComponent]
    });
    fixture = TestBed.createComponent(BpharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
