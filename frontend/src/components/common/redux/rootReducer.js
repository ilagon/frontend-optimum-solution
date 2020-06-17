import { combineReducers } from 'redux'
import mobilePaymentReducer from "./reducers/mobilePaymentReducer"

const rootReducer = combineReducers({
    mobilePayment: mobilePaymentReducer,
  })
  
  export default rootReducer