import { createStore } from 'redux'

const defaultState = { 
    
}

const counterReducer = (state = defaultState, action)=>{
    switch(action.type){    
        case "set_user":
            return localStorage.setItem('user',JSON.stringify(action.payload));
        default:
          return state
      }
}
let store = createStore(counterReducer)
export default store;