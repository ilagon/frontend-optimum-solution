import { combineReducers } from 'redux'
import mobilePaymentReducer from "./reducers/mobilePaymentReducer"
import taxPaymentReducer from "./reducers/taxPaymentReducer"
import applyCreditcardReducer from './reducers/applyCreditcardReducer';
import {userInfo} from './reducers/userInfoReducer';


const rootReducer = combineReducers({
    mobilePayment: mobilePaymentReducer,
    taxPayment: taxPaymentReducer,
    applyCreditcard: applyCreditcardReducer,
    userInfo: userInfo
  })
  
  export default rootReducer