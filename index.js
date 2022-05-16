const { configureStore } = require('@reduxjs/toolkit')

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake(){
  return {
    type: CAKE_ORDERED,
    quantity: 1
  }
}                           // action is a type property

const initialState = {
  numOfCakes: 10,
}

// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes:state.numOfCakes - 1,
            }
        default:
            return state    
    }
}

const store = configureStore({reducer})
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => console.log('update state', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()