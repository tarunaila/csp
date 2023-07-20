import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbbsComponent } from './mbbs.component';

describe('MbbsComponent', () => {
  let component: MbbsComponent;
  let fixture: ComponentFixture<MbbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MbbsComponent]
    });
    fixture = TestBed.createComponent(MbbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
