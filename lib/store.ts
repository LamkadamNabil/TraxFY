import { createStore ,action } from 'easy-peasy'
export const store =createStore({
    activeSongs :[] ,
    activeSong :null ,
    changeActiveSongs :((state :any ,payload) =>{
        state.activeSongs = payload
    }),
    ChangeActiveSong :((state :any ,payload) =>{
        state.activeSong = payload
    }),
})