import React, { useEffect, useState } from 'react'
import { quanLyRapServ } from '../../services/quanLyRapServ'
import { Link } from 'react-router-dom'

const ThongTinPhim = ({movieId}) => {
    const [movieInfo,setMovieInfo] = useState({})

  return (
    <div className='container my-4 bg-slate-600'>
        <Link to={'/'} className='block font-medium text-sm text-white my-3 mx-3'>Trang chủ</Link>
        <div className="flex mt-5 justify-center"> 
            <div className="left">
                <img src="https://movienew.cybersoft.edu.vn/hinhanh/ke-an-hon_gp01.png" alt="" />
            </div>
            <div className="right w-6/12 mx-5">
                <h2 className='font-bold text-white text-base uppercase mb-2'>Killer of the full moon</h2>
                <p className='text-white font-medium text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem, hic accusamus eum deleniti perspiciatis aspernatur adipisci dignissimos fugiat libero?</p>
                <div className="my-2 flex text-white text-base font-medium">
                    <p>Thể loại: </p>
                    <span className='ml-2'>Hành động</span>
                </div>

                <div className="my-2 flex text-white text-base font-medium">
                    <p>Đạo diễn: </p>
                    <span className='ml-2'>Unknown</span>
                </div>
                
                <div className="my-2 flex text-white text-base font-medium">
                    <p>Diễn viên: </p>
                    <span className='ml-2'>Unknown</span>
                </div>

                <div className="my-2 flex text-white text-base font-medium">
                    <p>Thời lượng: </p>
                    <span className='ml-2'>1h 37p</span>
                </div>

                <div className="my-2 flex text-white text-base font-medium">
                    <p>Chất lượng: </p>
                    <span className='ml-2'>HD, 3D MAX</span>
                </div>
                
                <div className="my-2 flex text-white text-base font-medium">
                    <p>Ngày khởi chiếu: </p>
                    <span className='ml-2'>12-1-2023</span>
                </div>

                <div className="sub-btn my-4">
                    <Link to={'https://youtu.be/7cx9nCHsemc?si=nuE-yQCQwg5EBtIQ'} className='btn font-medium text-white text-base bg-green-500 px-3 py-2 rounded uppercase mr-4'>Xem trailer</Link>
                    <Link className='btn font-medium text-white text-base bg-green-500 px-3 py-2 rounded uppercase mr-4'>Đặt vé ngay</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThongTinPhim