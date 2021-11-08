import { createStore } from 'redux'

const defaultState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
}

const counterReducer = (state = defaultState, action)=>{
    switch(action.type){    
        case "set_user":
            return {...state, user: localStorage.setItem('user',JSON.stringify(action.payload))};
        default:
          return state
      }
}
let store = createStore(counterReducer)
export default store;