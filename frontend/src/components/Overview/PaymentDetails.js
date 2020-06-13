import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(paymentId, paymentType, paymentAmount, dateTime, customerID, transferId) {
  return { paymentId, paymentType, paymentAmount, dateTime, customerID, transferId };
}

const rows = [
  createData(1, 'Phone Bill', 20, '05-05-2020 13:43', 12345, 1),
  createData(2, 'Tax', 100, '06-05-2020 14:43', 13456, 2),
  createData(3, 'Transfer Money', 500, '07-05-2020 15:43', 14567, 3),
  createData(4, 'Tax', 300, '08-05-2020 16:43', 88888, 4),
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function PaymentDetails() {
  return (
    <React.Fragment>
      <Title>Payment History</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Payment ID</TableCell>
            <TableCell>Payment Type</TableCell>
            <TableCell>Payment Amount</TableCell>
            <TableCell>Date & Time</TableCell>
            <TableCell>Customer ID</TableCell>
            <TableCell align="right">Transfer ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.paymentId}>
            <TableCell>{row.paymentId}</TableCell>
              <TableCell>{row.paymentType}</TableCell>
              <TableCell>${row.paymentAmount}</TableCell>
              <TableCell>{row.dateTime}</TableCell>
              <TableCell>{row.customerID}</TableCell>
              <TableCell align="right">{row.transferId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}