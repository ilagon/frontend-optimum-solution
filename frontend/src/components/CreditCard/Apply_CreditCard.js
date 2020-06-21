import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./css/CreditCard.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import image from "../../images/creditcard-01.png";
import image1 from "../../images/creditcard-02.png";
import image2 from "../../images/creditcard-03.png";
import image3 from "../../images/creditcard-04.png";
import image4 from "../../images/creditcard-05.png";

export default function ApplyCreditCardPage() {
  const [creditcards, setcreditcards] = useState([]);
  const [creditCardType, setCreditCardType] = useState('');
  const customerId = "5ee9cb4de3fc6f4de8012484";

  useEffect(() => {
    axios.get("http://localhost:9002/creditcards/" + customerId)
    .then(res => {
      setcreditcards(res.data.creditcard);
      console.log(res.data.creditcard);
    })
    .catch(error => console.log(error))
  }, [])


const handlecard_type = e => {
  setCreditCardType(e.target.value);

  creditcards.map((creditcard) => {
    creditcard.creditcard_type === creditCardType ? 
    console.log('Display error message, User already has this card type.') : console.log('Send creditCardType as prop');
    
  })
}
  return (
      <div className={styles.container}>
      <p className={styles.FormTitle}>CreditCardApplication</p>

        <h2 className={styles.PBVisaSilverCreditCard}>PBVisaSilverCreditCard</h2>
        <Button className={styles.Button1}variant="contained" value="Silver" onClick={handlecard_type}>select</Button><br></br>
<p className={styles.TitleContainer1}>5% interest rate<br></br>
        Eligibility Criteria :$35k Per Anum<br></br>
        Credit Limit:$1000.00:</p><br></br>
        <img className={styles.images}id= "img" src= {image} /><br></br>

        <h2 className={styles.PBVisaGoldCreditCard}>PBVisaGoldCreditCard</h2>
        <Button className={styles.Button2}variant="contained" value="Gold" onClick={handlecard_type}>select</Button><br></br>
<p className={styles.TitleContainer2}>The Premium Gold Credit Card <br></br>
        is here for you.<br></br>
        With 2.5% interest rate and <br></br>
        $7000.00 Credit Card<br></br> Limit,
        your purchases are swift and easy<br></br>
        Eligibility Criteria:$45k Per Anum</p><br></br><br></br>
        <img className={styles.images1}id= "img" src= {image1} /><br></br>

        <h2 className={styles.PBVisaPlatinumCreditCard}>PBVisaPlatinumCreditCard</h2>
        <Button className={styles.Button3}variant="contained" value="Platinum" onClick={handlecard_type}>select</Button><br></br>
<p className={styles.TitleContainer3}>1.2% interest rate<br></br>
          Eigibility Criteria:$70k Per Anum<br></br>
          Credit Limit:$10000.00<br></br>
          Enjoy greater rebate and rewards<br></br>
          with the Platinum Card</p><br></br><br></br>
          <img className={styles.images2}id= "img" src= {image2} /><br></br>

        <h2 className={styles.PBVisaWomenCreditCard}>PBVisaWomenCreditCard</h2>
        <Button className={styles.Button4}variant="contained" value="Women" onClick={handlecard_type}>select</Button><br></br>
<p className={styles.TitleContainer4}>We appreciate you,and <br></br>
            we honour you.<br></br>
            The Women Credit Card<br></br>
            is for every Woman.</p><br></br><br></br>
            <img className={styles.images3}id= "img" src= {image3} /><br></br>

          <h2 className={styles.PBVisaStudentCreditCard}>PBVisaStudentCreditCard</h2>
          <Button className={styles.Button5}variant="contained" value="Student" onClick={handlecard_type}>select</Button><br></br>
<p className={styles.TitleContainer5}>With 2.5% low interest rate<br></br>
          and an Eligibility Criteria of<br></br>
          $22k Per Anum<br></br>
          Enjoy rewarding rebates<br></br>
          with every tap</p><br></br><br></br>
          <img className={styles.images4}id= "img" src= {image4} /></div>
          
  );
} 


