import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoKeComponent } from './sao-ke.component';

describe('SaoKeComponent', () => {
  let component: SaoKeComponent;
  let fixture: ComponentFixture<SaoKeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaoKeComponent]
    });
    fixture = TestBed.createComponent(SaoKeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
