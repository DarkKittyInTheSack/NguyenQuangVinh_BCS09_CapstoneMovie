
export const seatSetting = {
    addSeatListToStorage: (data) =>{
        localStorage.setItem('seatList',JSON.stringify(data))
    },

    getItemFromStorage: () =>{
        return JSON.parse(localStorage.getItem('seatList'))
    }
}