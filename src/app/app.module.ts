import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DanhSachLopHocComponent } from './danh-sach-lop-hoc/danh-sach-lop-hoc.component';
import { KhoanVayComponent } from './khoan-vay/khoan-vay.component';
import { SaoKeComponent } from './sao-ke/sao-ke.component';
import { LichDuThuComponent } from './lich-du-thu/lich-du-thu.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhSachLopHocComponent,
    KhoanVayComponent,
    SaoKeComponent,
    LichDuThuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, FormsModule
  ],
  exports: [DanhSachLopHocComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
