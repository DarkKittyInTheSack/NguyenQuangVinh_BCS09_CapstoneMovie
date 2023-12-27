import React from 'react'
import {Table} from 'antd'
import Note from './Note';

const TicketInfo = () => {

  const dataSource = [

  ];
  
  const columns = [
    {
      title: 'Khách hàng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số ghế',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Giá',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tùy chọn',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div>
      <h2 className='text-white font-bold text-2xl uppercase text-center mb-3'>Đặt vé</h2>
      <div className="flex text-white border-t-2 py-3">
        <p>Tên phim:</p>
        <span className='ml-3'>Killer of the full moon</span>
      </div>

      <div className="flex text-white border-t-2 py-3">
        <p>Cụm rạp:</p>
        <span className='ml-3'>CGV Hà Nội</span>
      </div>

      <div className="flex text-white border-t-2 border-b-2 py-3">
        <p>Giờ chiếu:</p>
        <span className='ml-3'>12 giờ 30 phút</span>
      </div>

      <div className=" text-white border-b-2 py-3">
        <p className='uppercase mb-3'>Danh sách đặt vé</p>
        <Table dataSource={dataSource} columns={columns} className='bg-transparent text-white'/>
      </div>

      <Note/>
      
    </div>
  )
}

export default TicketInfo