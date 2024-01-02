// import { DatePicker } from "antd";
// import React from "react";

// export const TaoLichChieu = () => {
//   return (
//     <div>
//       <h2>Tạo lịch chiếu</h2>
//       <div>
//         <label
//           htmlFor="heThongRap"
//           className="block mb-2 text-sm font-medium text-gray-900 "
//         >
//           Hệ thống rạp
//         </label>
//         <input
//           type="text"
//           id="heThongRap"
//           name="theThongRap"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
//           placeholder="Vui lòng nhập hệ thống rạp"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.tenPhim}
//         />
//         {/* {errors.taiKhoan && touched.taiKhoan ? (
//             <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
//           ) : null} */}
//       </div>

//       <div>
//         <label
//           htmlFor="cumrap"
//           className="block mb-2 text-sm font-medium text-gray-900 "
//         >
//           Cụm rạp
//         </label>
//         <input
//           type="text"
//           id="cumrap"
//           name="cumrap"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
//           placeholder="Vui lòng nhập cụm rạp"
//           onChange={handleChange}
//           onBlur={handleBlur}
//           value={values.tenPhim}
//         />
//         {/* {errors.taiKhoan && touched.taiKhoan ? (
//             <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
//           ) : null} */}
//       </div>

//       <div>
//         <label
//           htmlFor="ngayKhoiChieu"
//           className="block mb-2 text-sm font-medium text-gray-900 "
//         >
//           Ngày chiều giờ chiếu
//         </label>
//         <DatePicker
//           onChange={(date, dateString) => {
//             console.log(date);
//             setFieldValue("ngayKhoiChieu", date);
//             // setFieldValue('ngayKhoiChieu', dateString);
//           }}
//           format={"DD-MM-YYYY"}
//           // changeOnBlur={handleBlur}
//           value={values.ngayKhoiChieu}
//         />
//         {/* {errors.taiKhoan && touched.taiKhoan ? (
//             <p className="text-red-500 text-xs mt-1">{errors.taiKhoan}</p>
//           ) : null} */}
//       </div>
//     </div>
//   );
// };
import React from "react";

const TaoLichChieu = () => {
  return <div>TaoLichChieu</div>;
};

export default TaoLichChieu;
