import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import './Overview.css';

export default function CreditLimit() {
  return (
    <React.Fragment>
      <div className="textCenter"> 
        <Title>Credit Limit</Title>
        <Typography component="p" variant="h4">
          $2000.00
        </Typography>
      </div>
    </React.Fragment>
  );
}