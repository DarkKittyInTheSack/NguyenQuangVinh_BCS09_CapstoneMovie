import { https } from './configServ';

export const quanLyDanhSachPhim = {
    getMovieByName: (name) => {
        return https.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${name}`)
    }
}