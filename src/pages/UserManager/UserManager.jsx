import React, { useEffect, useState } from "react";
import { quanLyNguoiDung } from "../../services/quanLyNguoiDung";
import { Space, Table } from "antd";

const columns = [
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Họ tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDT",
    key: "soDT",
  },
  {
    title: "Mật khẩu",
    dataIndex: "matKhau",
    key: "matKhau",
  },
  {
    title: "Mã Loại Người Dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
  },
  {
    title: "Hành động",
    key: "hanhDong",
    render: (_, record) => (
      <div className="space-x-3">
        <button className="text-white bg-red-600 py-2 px-4 rounded-md">
          Sửa
        </button>
        <button className="text-white bg-yellow-600 py-2 px-4 rounded-md">
          Xóa
        </button>
      </div>
    ),
  },
];

const UserManager = () => {
  const [listUser, setListUser] = useState([]);
  // const [listSearchUser, setSearchUser] = useState([]);

  console.log(listUser);
  useEffect(() => {
    quanLyNguoiDung
      .getAllUser()
      .then((res) => {
        console.log(res);
        setListUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
    // quanLyNguoiDung
    //   .timNguoiDung()
    //   .then((res) => {
    //     console.log(res);
    //     setSearchUser(res.data.content);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <div>
      <h2 className="font-bold text-2xl">Thêm Người Dùng</h2>
      {/* <div>
        <h2 className="font-bold text-1xl">Tìm kiếm người dùng</h2>
        <input
          oninput="searchInfoUser(event)"
          type="text"
          class="form-control"
          id="timKiemSinhVien"
        />
      </div> */}
      <div>
        <label for="timKiemSinhVien">Tìm kiếm sinh viên</label>
        <input
          oninput="searchInfoUser(event)"
          type="text"
          class="form-control"
          id="timKiemNguoiDung"
          placeholder="Tìm kiếm theo tên"
        />
        <button className="text-white bg-yellow-600 py-1 px-2 rounded-md ">
          tìm
        </button>
      </div>
      {/* <input type="text" /> */}
      {/* <Table
        columns={columns}
        dataSource={listUser}
        // dataSource={listMovie}
        // pagination={{
        //   // pageSize giúp giới hạn số phần tử trên mỗi trang
        //   // pageSize: 7,
        //   // current giúp đưa người dùng tới trang mà người dùng muốn
        //   // current: 8,
        //   // total
        // }}
      /> */}
      <Table
        columns={columns}
        dataSource={listUser}
        pagination={{
          pageSize: 6,
          // current: 3,
        }}
      />
    </div>
  );
};
export default UserManager;
