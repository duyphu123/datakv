// datakv.ts
export interface KhoanVay {
  ten:string;
  trang_thai_vay: string;
  so_tien_vay: number;
  ngay_bat_dau: string;
  ngay_ket_thuc: string;
  lai_suat: number;
}

export interface DataKV {
  KV1: KhoanVay;
  KV2: KhoanVay;
  KV3: KhoanVay;
  KV4: KhoanVay;
}
export const datakv: Record<string, any> = {
  KV1: {
    ten:"KV1",
    so_tien_vay: 10000000, // Số tiền vay của KV1
    thoi_gian_vay: 12, // Thời gian vay (tháng) của KV1
    lai_suat: 0.08, // Lãi suất của KV1
    du_no_con_lai: 10000000, // Dư nợ còn lại của KV1
    so_tien_thu_trong_ky: 1000000, // Số tiền thu trong kỳ của KV1
    trang_thai_thu_no: "Đã thu", // Trạng thái thu nợ của KV1
    so_du_vi: 0, // Số dư ví của KV1
    trang_thai_vay: "Chưa duyệt", // Trạng thái hiện tại của khoản vay của KV1
    ngay_bat_dau: "01/01/2023", // Ngày bắt đầu vay của KV1
    ngay_ket_thuc: "01/01/2024", // Ngày kết thúc vay của KV1
  },
  KV2: {
    ten:"KV2",
    so_tien_vay: 15000000, // Số tiền vay của KV2
    thoi_gian_vay: 24, // Thời gian vay (tháng) của KV2
    lai_suat: 0.07, // Lãi suất của KV2
    du_no_con_lai: 15000000, // Dư nợ còn lại của KV2
    so_tien_thu_trong_ky: 2000000, // Số tiền thu trong kỳ của KV2
    trang_thai_thu_no: "Chưa thu", // Trạng thái thu nợ của KV2
    so_du_vi: 0, // Số dư ví của KV2
    trang_thai_vay: "Đã duyệt", // Trạng thái hiện tại của khoản vay của KV2
    ngay_bat_dau: "02/01/2023", // Ngày bắt đầu vay của KV2
    ngay_ket_thuc: "02/01/2025", // Ngày kết thúc vay của KV2
  },
  KV3: {
    ten:"KV3",
    so_tien_vay: 20000000, // Số tiền vay của KV3
    thoi_gian_vay: 36, // Thời gian vay (tháng) của KV3
    lai_suat: 0.06, // Lãi suất của KV3
    du_no_con_lai: 20000000, // Dư nợ còn lại của KV3
    so_tien_thu_trong_ky: 3000000, // Số tiền thu trong kỳ của KV3
    trang_thai_thu_no: "Đã thu", // Trạng thái thu nợ của KV3
    so_du_vi: 0, // Số dư ví của KV3
    trang_thai_vay: "Chưa duyệt", // Trạng thái hiện tại của khoản vay của KV3
    ngay_bat_dau: "03/01/2023", // Ngày bắt đầu vay của KV3
    ngay_ket_thuc: "03/01/2026", // Ngày kết thúc vay của KV3
  },
  KV4: {
    ten:"KV4",
    so_tien_vay: 25000000, // Số tiền vay của KV4
    thoi_gian_vay: 48, // Thời gian vay (tháng) của KV4
    lai_suat: 0.05, // Lãi suất của KV4
    du_no_con_lai: 25000000, // Dư nợ còn lại của KV4
    so_tien_thu_trong_ky: 4000000, // Số tiền thu trong kỳ của KV4
    trang_thai_thu_no: "Chưa thu", // Trạng thái thu nợ của KV4
    so_du_vi: 0, // Số dư ví của KV4
    trang_thai_vay: "Đã duyệt", // Trạng thái hiện tại của khoản vay của KV4
    ngay_bat_dau: "04/01/2023", // Ngày bắt đầu vay của KV4
    ngay_ket_thuc: "04/01/2028", // Ngày kết thúc vay của KV4
  },
};
