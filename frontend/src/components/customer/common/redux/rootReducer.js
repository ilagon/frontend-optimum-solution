import { combineReducers } from 'redux'
import mobilePaymentReducer from "./reducers/mobilePaymentReducer"
import taxPaymentReducer from "./reducers/taxPaymentReducer"
import applyCreditcardReducer from "./reducers/applyCreditcardReducer";


const rootReducer = combineReducers({
    mobilePayment: mobilePaymentReducer,
    taxPayment: taxPaymentReducer,
    applyCreditcard: applyCreditcardReducer
  })
  
  export default rootReducer