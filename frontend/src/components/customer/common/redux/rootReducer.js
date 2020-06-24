import { combineReducers } from 'redux'
import mobilePaymentReducer from "./reducers/mobilePaymentReducer"
import taxPaymentReducer from "./reducers/taxPaymentReducer"


const rootReducer = combineReducers({
    mobilePayment: mobilePaymentReducer,
    taxPayment: taxPaymentReducer,

  })
  
  export default rootReducer