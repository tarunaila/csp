import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscnursingComponent } from './bscnursing.component';

describe('BscnursingComponent', () => {
  let component: BscnursingComponent;
  let fixture: ComponentFixture<BscnursingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BscnursingComponent]
    });
    fixture = TestBed.createComponent(BscnursingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
