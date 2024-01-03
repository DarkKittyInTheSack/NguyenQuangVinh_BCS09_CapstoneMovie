
export const seatSetting = {
    addSeatListToStorage: (data) =>{
        localStorage.setItem('seatList',JSON.stringify(data))
    },

    getItemFromStorage: () =>{
        return JSON.parse(localStorage.getItem('seatList'))
    },

    getItemFromStorageByNameAndTime: (name,time) =>{
        const arr = []
        const currentArr = JSON.parse(localStorage.getItem('seatList'))
        
    },

    removeSeatList: () =>{
        localStorage.removeItem('seatList')
    }
}