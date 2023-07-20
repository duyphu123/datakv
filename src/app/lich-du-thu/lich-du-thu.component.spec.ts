import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichDuThuComponent } from './lich-du-thu.component';

describe('LichDuThuComponent', () => {
  let component: LichDuThuComponent;
  let fixture: ComponentFixture<LichDuThuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LichDuThuComponent]
    });
    fixture = TestBed.createComponent(LichDuThuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
