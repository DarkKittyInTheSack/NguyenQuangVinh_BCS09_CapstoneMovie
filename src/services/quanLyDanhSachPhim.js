import { https } from './configServ';

export const quanLyDanhSachPhim = {
    getMovieByName: (name) => {
        return https.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08&tenPhim=${name}`)
    },

    getMovieByID: (id) =>{
        return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${Number(id)}`)
    }
}