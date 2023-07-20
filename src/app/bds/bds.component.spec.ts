import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdsComponent } from './bds.component';

describe('BdsComponent', () => {
  let component: BdsComponent;
  let fixture: ComponentFixture<BdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdsComponent]
    });
    fixture = TestBed.createComponent(BdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
