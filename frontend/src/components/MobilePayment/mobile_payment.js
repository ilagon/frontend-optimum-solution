import React from "react";
import styles from "./css/MobilePayment.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function MobilePaymentPage() {
  return (
    <div className={styles.container}>
      <div className={styles.TitleContainer}>
        <span className={styles.OneTimePayment}>One Time Payment</span>
        <span className={styles.OtherRecipients}>Other Recipients</span>
      </div>
      <div className={styles.formBody}>
        <p className={styles.FormTitle}>Bill Payment</p>
          <form className="MobilePaymentForm">
            <p style={{marginTop: "50px", fontWeight: "bold", color: "#173a77", fontSize: "1.25em"}}>To</p>
            <TextField required id="enter-bill-input" label="Required" placeholder="Enter Bill" />< br />
            <TextField style={{marginTop: "50px"}} required id="enter-amount-input" label="Required" placeholder="Amount" />
          </form>
      </div>
        <div className={styles.formFromBody}>
          <p style={{marginTop: "150px", fontWeight: "bold", color: "#173a77", fontSize: "1.25em"}}>From</p><br />
          <p>Display Bank Acc Number Here</p>< br/>
          <p>Current Balance</p>< br/>
          <p>Display balance amount here $$</p><br />
          <Button variant="contained">Add Bill</Button><br />
          <Button variant="contained">Next</Button>
        </div>
    </div>
  );
} 
