import { https } from "./configServ";
export const quanLyNguoiDung = {
  getAllUser: () => {
    return https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },
  timNguoiDung: () => {
    return https.get(
      "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=tukhoa"
    );
  },
};
