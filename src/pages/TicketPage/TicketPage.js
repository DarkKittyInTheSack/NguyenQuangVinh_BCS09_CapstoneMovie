import React from 'react'
import Screen from './Screen'
import TicketInfo from './TicketInfo'
import './TicketPage.scss'

const TicketPage = () => {
  return (
    <div className='ticketPage'>
        <div className="flex items-center justify-center">
          <div className="left p-3">
            <Screen/>
          </div>
          <div className="right w-5/12 mx-3">
            <TicketInfo/>
          </div>
          
        </div>
    </div>
  )
}

export default TicketPage
