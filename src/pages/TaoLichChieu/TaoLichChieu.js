import { DatePicker } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { quanLyPhimServ } from "../../services/quanLyPhimServ";
import { quanLyRapServ } from "../../services/quanLyRapServ";
import LichChieuCumRap from "../HomePage/LichChieuCumRap";
import "./taoLichChieu.css";

const TaoLichChieu = () => {
  const [rap, setLich] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .getAllRap()
      .then((res) => {
        console.log(res);
        setLich(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const formik = useFormik({
    initialValues: {
      heThongRap: "",
      cumRap: "",
      ngayKhoiChieu: "",
      gioKhoiChieu: "",
      giaVe: "",
    },
    onSubmit: (values, resetForm) => {
      console.log(values);
      // convert dữ liệu ngày giờ

      const formData = new FormData();
      for (let key in values) {
        console.log(key);
        if (key == "ngayKhoiChieu") {
          formData.append(key, moment(values[key].ngayKhoiChieu));
        } else {
          formData.append(key, values[key]);
        }
      }
      formData.append("maNhom", "GP08");
      quanLyPhimServ
        .taolichchieu(formData)
        .then((res) => {
          resetForm();
          // setImage("");
          // thông báo
          // Chuyển hướng người dùng về lại trang quản lí phim
        })
        .catch((err) => {
          console.log(err);
          // thông báo lí do chưa tạo được
        });
    },
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    reset,
  } = formik;

  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">Tạo lịch chiếu</h2>
      <form className="space-y-5">
        <div>
          <label
            htmlFor="heThongRap"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Hệ Thống Rạp
          </label>
          <select>
            {rap.map((item, index) => {
              return (
                <option value={item.maHeThongRap}>{item.maHeThongRap}</option>
              );
            })}
          </select>
        </div>

        <div>
          <label
            htmlFor="cumRap"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Cụm Rạp
          </label>
          <select className="w-1/2 h-1/2">
            {rap.map((item, index) => {
              return (
                <option>
                  {" "}
                  <LichChieuCumRap
                    maHeThongRap={item.maHeThongRap}
                    className="w-10"
                  />
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label
            htmlFor="ngayKhoiChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Ngày khởi chiếu
          </label>
          <DatePicker
            onChange={(date, dateString) => {
              console.log(date);
              setFieldValue("ngayKhoiChieu", date);
              // setFieldValue("ngayKhoiChieu", dateString);
            }}
            format={"DD-MM-YYYY"}
            // changeOnBlur={handleBlur}
            value={values.ngayKhoiChieu}
          />
        </div>

        <div>
          <label
            htmlFor="gioKhoiChieu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Giờ khởi chiếu
          </label>
          <input
            type="text"
            id="gioKhoiChieu"
            name="gioKhoiChieu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập giờ khởi chiếu"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gioKhoiChieu}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
           ) : null} */}
        </div>
        <div>
          <label
            htmlFor="giaVe"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Giá vé
          </label>
          <input
            type="text"
            id="giaVe"
            name="giaVe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Vui lòng nhập giá vé"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.giaVe}
          />
          {/* {errors.taiKhoan && touched.taiKhoan ? (
            <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
           ) : null} */}
        </div>

        <div>
          <h2 className="block mb-2 text-sm font-medium text-gray-900 ">
            Chức năng
          </h2>
          <button
            type="submit"
            className="text-white bg-black py-2 px-5 rounded-md"
          >
            Tạo lịch chiếu
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaoLichChieu;
