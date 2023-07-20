import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BipcComponent } from './bipc.component';

describe('BipcComponent', () => {
  let component: BipcComponent;
  let fixture: ComponentFixture<BipcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BipcComponent]
    });
    fixture = TestBed.createComponent(BipcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
