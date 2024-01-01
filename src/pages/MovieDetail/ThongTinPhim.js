import React, { useEffect, useState } from 'react'
import { quanLyRapServ } from '../../services/quanLyRapServ'
import { Link } from 'react-router-dom'
import { quanLyDanhSachPhim } from '../../services/quanLyDanhSachPhim'

const ThongTinPhim = ({movieId}) => {
    const [movieInfo,setMovieInfo] = useState([])
    useEffect(() =>{
        quanLyDanhSachPhim.getMovieByName(movieId)
        .then((result) => {
            console.log(result.data.content);
            setMovieInfo(result.data.content)
        }).catch((err) => {
            console.log(err);
        });
    },[])
  return (
    <div className='container my-4 bg-slate-600 sm:w-full'>
        <Link to={'/'} className='block font-medium text-sm text-white my-3 mx-3'>Trang chủ</Link>
        {
            movieInfo.map((item,index) =>{
                const {hinhAnh,tenPhim,moTa,danhGia,ngayKhoiChieu} = item
                return <div className="movie_info flex sm:flex-col md:flex-row md:text-left mt-5 justify-center" key={index}> 
                <div className="left md:w-5/12 sm:w-full mb-5">
                    <img src={hinhAnh} alt="" className='block w-full'/>
                </div>
                <div className="right md:w-6/12 sm:w-full mx-5">
                    <h2 className='font-bold text-white text-base uppercase mb-2'>{tenPhim}</h2>
                    <p className='text-white font-medium text-base'>{moTa}</p>
                    <div className="my-2 flex text-white text-base font-medium">
                        <p>Thể loại: </p>
                        <span className='ml-2'>Hành động</span>
                    </div>
    
                    <div className="my-2 flex text-white text-base font-medium">
                        <p>Đạo diễn: </p>
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
                        <span className='ml-2'>{ngayKhoiChieu}</span>
                    </div>

                    <div className="my-2 flex text-white text-base font-medium">
                        <p>Đánh giá: </p>
                        <span className='ml-2'>{danhGia}</span>
                    </div>
    
                    <div className="sub-btn my-4">
                        <Link to={'https://youtu.be/7cx9nCHsemc?si=nuE-yQCQwg5EBtIQ'} className='btn font-medium text-white text-base bg-green-500 px-3 py-2 rounded uppercase mr-4'>Xem trailer</Link>
                        <Link to={`/ticket/${tenPhim}/12h`} className='btn font-medium text-white text-base bg-green-500 px-3 py-2 rounded uppercase mr-4'>Đặt vé ngay</Link>
                    </div>
                </div>
            </div>
            })
        }
        
    </div>
  )
}

export default ThongTinPhim