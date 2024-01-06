import React, { useEffect, useState } from 'react'
import ThongTinPhim from './ThongTinPhim'
import { Link, useLocation } from 'react-router-dom'
import ThongTinCumRap from './ThongTinCumRap'
import RelativeMovies from './RelativeMovies'
import './MovieDetail.scss'
import { quanLyDanhSachPhim } from '../../services/quanLyDanhSachPhim'

const MovieDetail = () => {
    const location = useLocation()
    const [movie,setMovie] = useState({})

    useEffect(() =>{
      quanLyDanhSachPhim.getMovieByID(location.pathname.split('/')[2])
      .then((result) => {
        console.log(result.data.content)
        setMovie(result.data.content)
      }).catch((err) => {
        console.log(err)
      });
    },{})
  return (
    <div className='container '>
      <Link to={'/'} className='block font-medium text-sm text-blue-800 my-3'>Trang chủ / {movie.tenPhim}</Link>
        <ThongTinPhim movieId = {movie.maPhim}
        hinhAnh = {movie.hinhAnh}
        tenPhim = {movie.tenPhim} 
        moTa = {movie.moTa} 
        ngayKhoiChieu = {movie.ngayKhoiChieu} 
        danhGia = {movie.danhGia} 
        trailer = {movie.trailer}/>

        <ThongTinCumRap movieId = {movie.maPhim}/>
        <RelativeMovies/>
    </div>
  )
}

export default MovieDetail