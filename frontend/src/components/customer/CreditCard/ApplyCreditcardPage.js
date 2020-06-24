import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./css/ApplyCreditcard.module.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import image from "../../images/creditcard-01.png";
import image1 from "../../images/creditcard-02.png";
import image2 from "../../images/creditcard-03.png";
import image3 from "../../images/creditcard-04.png";
import image4 from "../../images/creditcard-05.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CreditcardNamePage from './CreditcardNamePage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
  Prompt
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function ApplyCreditCardPage() {
  const classes = useStyles();
  const [creditcards, setcreditcards] = useState([]);
  const [test, setTest] = useState("Student"); //Test state for conditional rendering of select buttons
  // const [cardExists, setCardExists] = useState(0);
  const customerId = "5ee86a90e62e0a29d8c0a003";

  useEffect(() => {
    axios
      .get("http://localhost:9002/creditcards/" + customerId)
      .then((res) => {
        setcreditcards(res.data.creditcard);
        console.log(res.data.creditcard);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlecard_Silver = () => {
    const cardType = 'Silver';
    applyCC(cardType);
  };

  const handlecard_Gold = () => {
    const cardType = 'Gold';
    applyCC(cardType);
  };

  const handlecard_Platinum = () => {
    const cardType = 'Platinum';
    applyCC(cardType);
  };

  const handlecard_Women = () => {
    const cardType = 'Women';
    applyCC(cardType);
  };

  const handlecard_Student = () => {
    const cardType = 'Student';
    applyCC(cardType);
  };

  const applyCC = (input) => {
    let flag = 0;
    creditcards.map((creditcard) => {
      if (creditcard.creditcard_type === input) {
        window.alert("Sorry! You already have an existing credit card of type " + input);
        window.location.reload(); 
        // setCardExists(1);
        flag = 1;
      }
    })

    
    //if select creditcard button type is not in DB (Apply new CC)
    if(flag === 0) {
      axios.post("http://localhost:9002/creditcards/creditcardApplication", {
        creditcard_type: input,
        userId: customerId,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));

    }

  }

  return (
    <React.Fragment>
      
    <main className="content">
      <div className={classes.appBarSpacer} />
      <Container maxWidth="md" className="container">

        <p className={styles.FormTitle}>Credit Card Application</p>

        <Grid container spacing={3}>
          {/* Creditcard Image */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <img className={styles.ccImage} src={image} />
          </Grid>
          {/* Creditcard Description */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <h3 className={styles.PBVisaSilverCreditCard}>
              PB Visa Silver CreditCard
            </h3>
            <p className={styles.TitleContainer1}>
              5% interest rate<br></br>
              Eligibility Criteria: $35k Per Annum<br></br>
              Credit Limit: $1000.00<br></br>
              Enjoy great rebate and rewards with the Silver Creditcard
            </p>
          </Grid>
          {/* Select Button */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccSelectDiv}>
            {test /* Replace test with creditCards.creditcard_type */ != "Silver" ? 
            <Link to="/apply-creditcard/creditcard-name" className={styles.ccLink}>
            <Button
                className={styles.ccSelectBtn}
                variant="contained"
                value="Silver"
               onClick={handlecard_Silver}
              >
                Select
              </Button> 
              </Link>
              :
              <Button
                className={styles.ccSelectBtn}
                variant="contained"
                value="Silver"
               onClick={handlecard_Silver}
               disabled
              >Select</Button>
              }
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Creditcard Image */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <img className={styles.ccImage} src={image1} />
          </Grid>
          {/* Creditcard Description */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <h3 className={styles.PBVisaSilverCreditCard}>
              PB Visa Gold CreditCard
            </h3>
            <p className={styles.TitleContainer1}>
              The Premium Gold Creditcard is here for you<br></br>
              With 2.5% interest rate and $7000.00 Credit Limit your purchases
              are swift and easy.
              <br></br>
              Eligibility Criteria:$45k Per Anum
            </p>
          </Grid>
          {/* Select Button */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccSelectDiv}>
          {test /* Replace test with creditCards.creditcard_type */ != "Gold" ? 
            <Link to="/apply-creditcard/creditcard-name"  className={styles.ccLink}>
            <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Gold"
              onClick={handlecard_Gold}
            >
              Select
            </Button>
            </Link>
              :
              <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Gold"
              onClick={handlecard_Gold}
              disabled
            >
              Select
            </Button>
              }
          
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Creditcard Image */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <img className={styles.ccImage} src={image2} />
          </Grid>
          {/* Creditcard Description */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <h3 className={styles.PBVisaSilverCreditCard}>
              PB Visa Platinum CreditCard
            </h3>
            <p className={styles.TitleContainer1}>
              1.2% interest rate<br></br>
              Eigibility Criteria: $70k Per Annum<br></br>
              Credit Limit: $10000.00<br></br>
              Enjoy greater rebate and rewards with the Platinum Card
            </p>
          </Grid>
          {/* Select Button */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccSelectDiv}>
          {test /* Replace test with creditCards.creditcard_type */ != "Platinum" ? 
             <Link to="/apply-creditcard/creditcard-name"  className={styles.ccLink}>
             <Button
               className={styles.ccSelectBtn}
               variant="contained"
               value="Platinum"
               onClick={handlecard_Platinum}
             >
               Select
             </Button>
             </Link>
              :
              <Button
               className={styles.ccSelectBtn}
               variant="contained"
               value="Platinum"
               onClick={handlecard_Platinum}
               disabled
             >
               Select
             </Button>
              }
         
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Creditcard Image */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <img className={styles.ccImage} src={image3} />
          </Grid>
          {/* Creditcard Description */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <h3 className={styles.PBVisaSilverCreditCard}>
              PB Visa Women CreditCard
            </h3>
            <p className={styles.TitleContainer1}>
              We appreciate you, and we honour you.<br></br>
              The Women Credit Card is for every Woman.
            </p>
          </Grid>
          {/* Select Button */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccSelectDiv}>
          {test /* Replace test with creditCards.creditcard_type */ != "Women" ? 
            <Link to="/apply-creditcard/creditcard-name" className={styles.ccLink}>
            <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Women"
              onClick={handlecard_Women}
            >
              Select
            </Button>
            </Link>
              :
              <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Women"
              onClick={handlecard_Women}
              disabled
            >
              Select
            </Button>
              }
          
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* Creditcard Image */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <img className={styles.ccImage} src={image4} />
          </Grid>
          {/* Creditcard Description */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccDescription}>
            <h3 className={styles.PBVisaSilverCreditCard}>
              PB Visa Student CreditCard
            </h3>
            <p className={styles.TitleContainer1}>
              With 2.5% low interest rate and an Eligibility Criteria of $22k
              Per Annum<br></br>
              Enjoy rewarding rebates with every tap.
            </p>
          </Grid>
          {/* Select Button */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccSelectDiv}>
          {test /* Replace test with creditCards.creditcard_type */ != "Student" ? 
            <Link to="/apply-creditcard/creditcard-name" className={styles.ccLink}>
            <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Student"
              onClick={handlecard_Student}
            >
              Select
            </Button>
            </Link>
              :
              <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Student"
              onClick={handlecard_Student}
              disabled
            >
              Select
            </Button>
              }
          
          </Grid>
        </Grid>
      </Container>
    </main>

    </React.Fragment>
  );
}
