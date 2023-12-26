import React, { useEffect, useState } from 'react'
import { quanLyRapServ } from '../../services/quanLyRapServ';
import {Tabs} from 'antd'

const ThongTinCumRap = () => {
    const [rap, setRap] = useState([]);
    useEffect(() =>{
        quanLyRapServ
      .getAllRap()
      .then((res) => {
        console.log(res);
        setRap(res.data.content);
        // setMaHeThongRap(res.data.content[0]?.maHeThongRap);
      })
      .catch((err) => {
        console.log(err);
      });
    },[])
  return (
    <div className='container'>
        <Tabs
          defaultActiveKey="1"
          tabPosition={'left'}
          // style={{
          //   height: 220,
          // }}
          // 4 key =" abc", key="xyz"
          style={{
            border: '1px solid #8080806e',
          }}
          items={rap.map((item, index) => {
            return {
              // thuộc tính label tạo nội dung cho các nút tab
              label: <img className="w-10" src={item.logo} alt="" />,
              // key là khoá của tab, giúp cho một số chức năng sau này cần biết đang đứng ở tab nào
              key: item.maHeThongRap,
              // disabled giúp ngăn chặn người dùng bấm mở tab nếu giá trị là true
              // disabled: true,
              // children giúp hiển thị nội dung của tab mà chúng ta muốn
              children: <div className="grid grid-cols-10 items-center">
                <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 2</button>
                <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 3</button>
                <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 4</button>
                <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 5</button>
                <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 6</button>
                <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 7</button>
                <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Chủ Nhật</button>
              </div>,
            };
          })}
        />
    </div>
  )
}

export default ThongTinCumRap