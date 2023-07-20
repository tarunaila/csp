import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtechComponent } from './btech.component';

describe('BtechComponent', () => {
  let component: BtechComponent;
  let fixture: ComponentFixture<BtechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtechComponent]
    });
    fixture = TestBed.createComponent(BtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
