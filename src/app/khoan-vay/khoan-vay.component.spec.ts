import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoanVayComponent } from './khoan-vay.component';

describe('KhoanVayComponent', () => {
  let component: KhoanVayComponent;
  let fixture: ComponentFixture<KhoanVayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhoanVayComponent]
    });
    fixture = TestBed.createComponent(KhoanVayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
