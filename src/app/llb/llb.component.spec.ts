import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlbComponent } from './llb.component';

describe('LlbComponent', () => {
  let component: LlbComponent;
  let fixture: ComponentFixture<LlbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlbComponent]
    });
    fixture = TestBed.createComponent(LlbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
