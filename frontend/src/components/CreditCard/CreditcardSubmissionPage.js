import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles,  } from '@material-ui/core/styles';
import { List } from 'semantic-ui-react';
import styles from "./css/ApplyCreditcard.module.css";

const useStyles = makeStyles((theme)=>({
  root: {
    width: '80%',
  },
  container: {
    maxHeight: 640,
  },
  '& > *': {
    margin: theme.spacing(1),
    width: '25ch',
  },
  
  
}));


class Apply_CC_Confirm extends React.Component {

  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
}

back  = (e) => {
    e.preventDefault();
    this.props.prevStep();
}

  
  render() {
    
    return (
      <div >
        <header>
          Credit Card Application
        </header>
      
          <form action='#' >
            
          <div>
                <List>
                    <List.Item>
                        <List.Content>Reference No.:12345 </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Content>Hannah</List.Content>
                    </List.Item>
                    
                    <List.Item>
                        <List.Content>123 pasir ris</List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>hannah@gmail.com</a>
                        </List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Content>91234567</List.Content>
                    </List.Item>
                </List>

        </div>
            <div >
              <Button type='submit' className={styles.btnApply}>
                  Apply   
                </Button >
            <br></br>
                 <Button type='submit' className={styles.btnCancel} >
                Cancel
                </Button >
            
            </div>
            </form>
      
      </div>
    );
  }
}

export default Apply_CC_Confirm;
// pushing again