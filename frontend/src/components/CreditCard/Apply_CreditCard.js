import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./css/CreditCard.module.css";
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

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

export default function ApplyCreditCardPage() {
  const classes = useStyles();
  const [creditcards, setcreditcards] = useState([]);
  const [creditCardType, setCreditCardType] = useState("");
  const customerId = "5ee9cb4de3fc6f4de8012484";

  useEffect(() => {
    axios
      .get("http://localhost:9002/creditcards/" + customerId)
      .then((res) => {
        setcreditcards(res.data.creditcard);
        console.log(res.data.creditcard);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlecard_type = (e) => {
    setCreditCardType(e.target.value);

    creditcards.map((creditcard) => {
      creditcard.creditcard_type === creditCardType
        ? console.log("Display error message, User already has this card type.")
        : console.log("Send creditCardType as prop");
    });
  };
  return (
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
            <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Silver"
              onClick={handlecard_type}
            >
              Select
            </Button>
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
            <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Gold"
              onClick={handlecard_type}
            >
              Select
            </Button>
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
            <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Platinum"
              onClick={handlecard_type}
            >
              Select
            </Button>
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
            <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Women"
              onClick={handlecard_type}
            >
              Select
            </Button>
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
            With 2.5% low interest rate and an Eligibility Criteria of $22k Per Annum<br></br>
          Enjoy rewarding rebates with every tap.
            </p>
          </Grid>
          {/* Select Button */}
          <Grid item xs={12} md={4} lg={4} className={styles.ccSelectDiv}>
            <Button
              className={styles.ccSelectBtn}
              variant="contained"
              value="Student"
              onClick={handlecard_type}
            >
              Select
            </Button>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
