import React, { useEffect, useState } from 'react'
import Screen from './Screen'
import TicketInfo from './TicketInfo'
import { useLocation } from 'react-router-dom'
import './TicketPage.scss'
import { quanLyDanhSachPhim } from '../../services/quanLyDanhSachPhim'

const TicketPage = () => {
  const location = useLocation()
  const [movieInfo,setMovieInfo] = useState([])
    useEffect(() =>{
        quanLyDanhSachPhim.getMovieByName(location.pathname.split('/')[2])
        .then((result) => {
            console.log(result.data.content);
            setMovieInfo(result.data.content)
        }).catch((err) => {
            console.log(err);
        });
    },[])

  return (
    <div className='ticketPage'>
      {
        movieInfo.map((item,index) =>{
          const {tenPhim} = item
          return <div className="flex items-center justify-center md:flex-row sm:flex-col">
          <div className="left p-3">
            <Screen/>
          </div>
          <div className="right w-5/12 mx-3">
            <TicketInfo tenPhim={tenPhim} gioChieu={location.pathname.split('/')[3]}/>
          </div>
          
        </div>
        })
      }
        
    </div>
  )
}

export default TicketPage
