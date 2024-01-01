import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { seatSetting } from '../../services/seatSetting'
import { getTicketAsyncThunk } from '../../redux/slice/ticketSlice'

const Screen = () => {
    const {listSeat} = useSelector((state) => state.ticketSlice)
    const dispatch = useDispatch()
    let seatPickData = {}
    let arrSeatChoose = [],arrPrice = []

    useEffect(() =>{
        dispatch(getTicketAsyncThunk({}))
    },[])
  return (
    <div>
        <div className="mx-auto my-3">
        <div className="screen mx-auto w-full mb-3"></div>
        <div className="flex justify-between items-center">
          <p className="rowNumber font-bold text-xl text-center"></p>
          {listSeat
            .filter((item, index) => item.hang == "A")
            .map((item, index) => {
              const { danhSachGhe } = item;
              return danhSachGhe.map((item, index) => {
                let seat = index + 1;
                return (
                  <p className="rowNumber font-bold text-xl text-center">
                    {seat}
                  </p>
                );
              });
            })}
        </div>
        <div className="">
          {listSeat.map((item, index) => {
            const { hang, danhSachGhe } = item;
            return (
              <div>
                <div className="flex justify-between items-center" key={index}>
                  <p className="rowNumber font-bold text-xl text-center">
                    {hang}
                  </p>
                  <div className="flex justify-between items-center">
                    {danhSachGhe.map((item, index) => {
                      const { soGhe, gia } = item;
                      return (
                        <input
                          id="check"
                          value={soGhe}
                          type="checkbox"
                          onChange={(event) => {
                            if(event.target.checked){
                              arrSeatChoose.push(soGhe)
                              arrPrice.push(gia)
                            }else{
                              if(arrSeatChoose.includes(soGhe)){
                                arrSeatChoose.splice(arrSeatChoose.indexOf(soGhe),1)
                                arrPrice.splice(arrSeatChoose.indexOf(gia),1)
                              }
                            }

                            console.log(arrSeatChoose)
                          }}
                          className="ghe mx-1 my-1 w-10 h-10 accent-green-500  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-transparent"

                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            seatPickData.customer = ''
            seatPickData.arrSeat = arrSeatChoose
            seatPickData.price = arrPrice

            seatSetting.addSeatListToStorage(seatPickData)
          }}
          type="button"
          className="text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3 my-3 mx-auto"
        >
          Xác nhận chỗ đặt
        </button>
      </div>
    </div>
  )
}

export default Screen