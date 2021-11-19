import { createStore,applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga.js';
const sagaMiddleware = createSagaMiddleware()

const defaultState = { 
    user: JSON.parse(localStorage.getItem("user")) || {},
    posts:[]
}

const reducer = (state = defaultState, action)=>{
    switch(action.type){    
        case "SET_USER":
            return {...state, user: localStorage.setItem('user',JSON.stringify(action.payload))};
        case 'SET_POSTS':
            return {...state, posts: [...state.posts, ...action.payload]}
        default:
          return state
      }
}

let store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;