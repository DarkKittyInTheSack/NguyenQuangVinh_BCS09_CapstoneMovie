import React, { useEffect, useState } from 'react'
import { quanLyRapServ } from '../../services/quanLyRapServ';
import {Tabs} from 'antd'
import { Link } from 'react-router-dom';

const ThongTinCumRap = ({movieId}) => {
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
              children:
              <div>
                <div className="grid grid-cols-10 items-center">
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 2</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 3</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 4</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 5</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 6</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Thứ 7</button>
                  <button className='btn text-base font-medium text-gray-500 my-3 hover:text-orange-400 transition'>Chủ Nhật</button>
                </div>

                <div className="flex my-3 mx-4">
                  <div className="logo">
                    <img src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt="" className='w-16'/>
                  </div>
                  <div className="info mx-4">
                    <h3 className='font-medium text-base text-lg text-red-500'>BHD Ha Noi</h3>
                    <p className='font-medium text-thin text-sm text-blue-500'>124/11 Nam Tu Liem</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 w-1/3 ml-10">
                  <Link to={`/ticket/${movieId}/12h30`} className='font-medium text-thin text-sm border-t-2 border-b-2 border-l-2 border-r-2 rounded mr-3 text-center py-1 border-green-700 text-gray-700'> 12h30 - 14h00</Link>
                  <Link to={`/ticket/${movieId}/14h30`} className='font-medium text-thin text-sm border-t-2 border-b-2 border-l-2 border-r-2 rounded mr-3 text-center py-1 border-green-700 text-gray-700'> 14h30 - 16h00</Link>
                  <Link to={`/ticket/${movieId}/19h00`} className='font-medium text-thin text-sm border-t-2 border-b-2 border-l-2 border-r-2 rounded mr-3 text-center py-1 border-green-700 text-gray-700'> 19h00 - 21h00</Link>
                </div>
              </div>
              ,
            };
          })}
        />
    </div>
  )
}

export default ThongTinCumRap