import { combineReducers } from 'redux'
import store from '../store'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  faces: require('./faces').default,
  cart: require('./cartItems').default,
  sessionId: require('./guestSess').default,
  order: require('./order').default
})

export default rootReducer
