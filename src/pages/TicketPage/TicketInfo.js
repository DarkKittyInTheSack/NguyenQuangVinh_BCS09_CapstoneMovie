import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Note from "./Note";
import { seatSetting } from "../../services/seatSetting";
import { render } from "@testing-library/react";

const TicketInfo = ({ tenPhim, gioChieu }) => {
  const dataForTable = (name,time) =>{
    const arr = []
        const currentArr = seatSetting.getItemFromStorage()
        if(currentArr!= null){
            currentArr.map((item,index) =>{
                const {film,time} = item
                if(film.includes(name) && time.includes(time)){
                    arr.push(item)
                }
            })
        }
        return arr
  }

  const columns = [
    {
      title: "Khách hàng",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Số ghế",
      dataIndex: "arrSeat",
      key: "arrSeat",
    },
    {
      title: "Giá tiền",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div>
      <h2 className="text-white font-bold text-2xl uppercase text-center mb-3">
        Đặt vé
      </h2>
      <div className="flex text-white border-t-2 py-3">
        <p>Tên phim:</p>
        <span className="ml-3">{tenPhim}</span>
      </div>

      <div className="flex text-white border-t-2 py-3">
        <p>Cụm rạp:</p>
        <span className="ml-3">CGV</span>
      </div>

      <div className="flex text-white border-t-2 border-b-2 py-3">
        <p>Giờ chiếu:</p>
        <span className="ml-3">{gioChieu}</span>
      </div>

      <div className=" text-white border-b-2 py-3">
        <p className="uppercase mb-3 font-bold text-xl text-center">
          Danh sách đặt vé
        </p>
        <Table
          dataSource={dataForTable(tenPhim,gioChieu)}
          columns={columns}
          className="bg-transparent text-white"
        />
      </div>

      <Note />
    </div>
  );
};

export default TicketInfo;
