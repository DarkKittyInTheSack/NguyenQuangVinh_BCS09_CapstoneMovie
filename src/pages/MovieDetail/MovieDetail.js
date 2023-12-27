import React from 'react'
import ThongTinPhim from './ThongTinPhim'
import { Link, useLocation } from 'react-router-dom'
import ThongTinCumRap from './ThongTinCumRap'
import RelativeMovies from './RelativeMovies'

const MovieDetail = () => {
    const location = useLocation()
  return (
    <div>
        <ThongTinPhim movieId = {location.pathname.split('/')[2]}/>
        <ThongTinCumRap/>
        <RelativeMovies/>
    </div>
  )
}

export default MovieDetail