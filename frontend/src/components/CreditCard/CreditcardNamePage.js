import React from 'react';
import styles from "./css/ApplyCreditcard.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles,  } from '@material-ui/core/styles';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#AA3A21'),
    backgroundColor:  '#AA3A21',
    '&:hover': {
      backgroundColor: '#e8ce76',
    },
    padding: '12px 140px',
    fontSize: 16,
  },
}))(Button);

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

function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}

class ApplyCC extends React.Component {
  state = {
    username: '', usernameValid: false,
    formValid: false,
    errorMsg: {}
  }

  validateForm = () => {
    const {usernameValid,} = this.state;
    this.setState({
      formValid: usernameValid 
    })
  }

  updateUsername = (username) => {
    this.setState({username}, this.validateUsername)
  }

  validateUsername = () => {
    const {username} = this.state;
    let usernameValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = 'Must be at least 3 characters long'
    }

    this.setState({usernameValid, errorMsg}, this.validateForm)
  }


  render() {
    return (
      <div className={styles.CCApp}>
        <header>
          Credit Card Application
        </header>
        <main role='main'>
          <form action='#' className={useStyles.root}>
            <hr></hr>
            <div className={styles.form-group}>
              < TextField id="standard-basic" label="Name to appear on card "valid={this.state.usernameValid} message={this.state.errorMsg.username} 
              value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)} />
            </div>
            <div className={styles.form-controls}>
              <ColorButton  className='button' type='submit' disabled={!this.state.formValid}>
                Next
                </ColorButton >
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default ApplyCC;