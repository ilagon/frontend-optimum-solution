import React from "react";
import CreditCardIcon from '@material-ui/icons/CreditCard';
import styles from "./css/ConfirmationPage.module.css";

export default function ConfirmationPage() {
  return (
    <div id= "thankyouforapplying">
      <CreditCardIcon className={styles.creditcardSuccessIcon}/>
     <h1 id = "text">Thank you for applying!</h1>
     <p id = "message">Please kindly wait for us to get back to you.</p>
     <p id = "message1">If you need any assitance you may contact us at 1800 1234 5678</p>
    </div>
);
} 





