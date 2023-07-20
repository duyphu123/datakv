import { Component, OnInit } from '@angular/core';
import { datakv, KhoanVay } from '../datakv';
import { Router } from '@angular/router';

import { KvDataService } from '../kv-data.service';

@Component({
  selector: 'app-khoan-vay',
  templateUrl: './khoan-vay.component.html',
  styleUrls: ['./khoan-vay.component.scss']
})
export class KhoanVayComponent implements OnInit {
  khoanVayData: any| null = null;
  selectedKV: string = 'Lựa chọn';

  constructor(private router: Router, private kvDataService: KvDataService){}
  ngOnInit(){

  }

  handleSelectChange() {
    if (this.selectedKV !== 'Lựa chọn') {
      this.khoanVayData = this.kvDataService.getKvData(this.selectedKV);
    } else {
      this.resetKhoanVayData();
    }
  }

  resetKhoanVayData() {
    this.khoanVayData = null;
  }

  saoKe() {
    if (this.selectedKV !== 'Lựa chọn') {
      // Chuyển router đến trang sao kê và truyền tham số KV1, KV2, KV3, hoặc KV4
      this.router.navigate(['/sao-ke']);
    }
  }
  lichDuThu() {
    // Xử lý khi nhấn nút Lịch dự thu
    console.log('Lịch dự thu');
    // Chuyển router đến trang lịch dự thu
    this.router.navigate(['/lich-du-thu']);
  }
}
