// kv-data.service.ts

import { Injectable } from '@angular/core';
import { datakv } from './datakv';

@Injectable({
  providedIn: 'root',
})
export class KvDataService {
  kvData: any = datakv;

  constructor() {}

  getKvData(selectedKV: string) {
    return this.kvData[selectedKV];
  }
}
