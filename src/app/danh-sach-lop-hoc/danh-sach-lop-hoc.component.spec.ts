import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachLopHocComponent } from './danh-sach-lop-hoc.component';

describe('DanhSachLopHocComponent', () => {
  let component: DanhSachLopHocComponent;
  let fixture: ComponentFixture<DanhSachLopHocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhSachLopHocComponent]
    });
    fixture = TestBed.createComponent(DanhSachLopHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
