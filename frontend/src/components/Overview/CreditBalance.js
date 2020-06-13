import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import './Overview.css';

// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

export default function CreditBalance() {
  return (
    <React.Fragment>
      <div className="textCenter">
        <Title>Credit Balance Amount</Title>
        <Typography component="p" variant="h4">
          $1000.00
        </Typography>
      </div>
    </React.Fragment>
  );
}