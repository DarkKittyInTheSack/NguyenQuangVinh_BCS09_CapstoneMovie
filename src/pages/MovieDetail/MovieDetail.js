import React from 'react'
import ThongTinPhim from './ThongTinPhim'
import { Link, useLocation } from 'react-router-dom'
import ThongTinCumRap from './ThongTinCumRap'
import RelativeMovies from './RelativeMovies'
import './MovieDetail.scss'

const MovieDetail = () => {
    const location = useLocation()
    console.log(location.pathname.split('/')[2]);
  return (
    <div>
        <ThongTinPhim movieId = {location.pathname.split('/')[2]}/>
        <ThongTinCumRap movieId = {location.pathname.split('/')[2]}/>
        <RelativeMovies/>
    </div>
  )
}

export default MovieDetail