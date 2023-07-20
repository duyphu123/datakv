import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { datakv } from '../datakv';
import { KvDataService } from '../kv-data.service';
@Component({
  selector: 'app-sao-ke',
  templateUrl: './sao-ke.component.html',
  styleUrls: ['./sao-ke.component.scss'],
})
export class SaoKeComponent implements OnInit {
  selectedKV: string = 'Lựa chọn';
  kvData: any | null = null;
  kvValue: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kvDataService: KvDataService
  ) {}
  ngOnInit() {
    // Lấy tham số selectedKV từ URL
    this.route.queryParams.subscribe((params) => {
      this.selectedKV = params['selectedKV'] || 'Lựa chọn';
      this.getKvData();
    });
  }
  stringifyKvValue(): string {
    return JSON.stringify(this.kvValue.ten_lop);
  }
  getKvData() {
    if (this.selectedKV !== 'Lựa chọn') {
      this.kvValue = this.kvDataService.getKvData(this.selectedKV);
      this.kvData = this.kvDataService.getKvData(this.selectedKV);
      console.log(this.kvData); // Kiểm tra dữ liệu đang được trả về từ service
    } else {
      this.kvData = null;
    }
  }

  quayVeKhoanVay() {
    this.router.navigate(['/']);
  }
}
