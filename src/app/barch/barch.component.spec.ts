import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchComponent } from './barch.component';

describe('BarchComponent', () => {
  let component: BarchComponent;
  let fixture: ComponentFixture<BarchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarchComponent]
    });
    fixture = TestBed.createComponent(BarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
