import React from 'react';

import "./EmailSent.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function EmailSent() {
    return(
        <div className="EmailSent">
            <nav id= "email-icons" />
                <MailOutlineIcon />
            <h1>Email Sent!</h1>
            <p>We've sent you an email with a link to reset your password</p>
            <p>Didn't get the email or not your email address? <a href=" ">Try again.</a></p>
        </div>
    );
}

export default EmailSent;