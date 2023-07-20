import { Component, OnInit } from '@angular/core';
import { objectWithData } from '../data';

interface LopHoc {
  ten_lop: string;
  danh_sach_sinh_vien: string[];
  giao_vien_chu_nhiem: string;
  loai_hoc_luc: string;
}
@Component({
  selector: 'app-danh-sach-lop-hoc',
  templateUrl: './danh-sach-lop-hoc.component.html',
  styleUrls: ['./danh-sach-lop-hoc.component.scss'],
})
export class DanhSachLopHocComponent implements OnInit {
  ngOnInit() {
 
    this.hienThiDuLieu();
  }
  objectWithData: LopHoc[] = objectWithData;
  selectedLop: string = 'Lớp 0';; // Xác định kiểu dữ liệu của biến selectedLop là string
  lopHocData: LopHoc | undefined;
  sinhVienData: string | undefined;
  hienThiDuLieu() {
    this.lopHocData = this.objectWithData.find((lop) => lop.ten_lop === this.selectedLop);
    this.sinhVienData = undefined;
  }

  hienThiSinhVien(event: any) {
    this.sinhVienData = event.target.value;
  }
}
