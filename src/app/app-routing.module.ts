import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KhoanVayComponent } from './khoan-vay/khoan-vay.component';
import { SaoKeComponent } from './sao-ke/sao-ke.component';
import { LichDuThuComponent } from './lich-du-thu/lich-du-thu.component'; // Thêm dòng này
const routes: Routes = [

  { path: '', component: KhoanVayComponent },
  { path: 'sao-ke', component: SaoKeComponent },
  { path: 'lich-du-thu', component: LichDuThuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
