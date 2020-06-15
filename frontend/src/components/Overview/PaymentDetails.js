import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import './Overview.css';

const columns = [
  { id: 'paymentId', label: 'Payment Id'},
  { id: 'paymentType', label: 'Payment Type'},
  {
    id: 'paymentAmount',
    label: 'Payment Amount',
    format: (value) => "$" + value.toFixed(2)
  },
  {
    id: 'dateTime',
    label: 'Date & Time',
  },
  {
    id: 'customerID',
    label: 'Customer ID',
  },
  {
    id: 'transferId',
    label: 'Transfer ID',
  },
];

// Generate Payment History Data
function createData(paymentId, paymentType, paymentAmount, dateTime, customerID, transferId) {
  return { paymentId, paymentType, paymentAmount, dateTime, customerID, transferId };
}

/* Data Example for Table Pagination */
const rows = [
  createData(1, 'Phone Bill', 20, '05-05-2020 13:43', 12345, 1),
  createData(2, 'Tax', 100, '06-05-2020 14:43', 13456, 2),
  createData(3, 'Transfer Money', 500, '07-05-2020 15:43', 14567, 3),
  createData(4, 'Tax', 300, '08-05-2020 16:43', 88888, 4),  
  createData(5, 'Phone Bill', 20, '05-05-2020 13:43', 12345, 5),
  createData(6, 'Tax', 100, '06-05-2020 14:43', 13456, 6),
  createData(7, 'Transfer Money', 500, '07-05-2020 15:43', 14567, 7),
  createData(8, 'Tax', 300, '08-05-2020 16:43', 88888, 8),
  createData(9, 'Transfer Money', 500, '07-05-2020 15:43', 14567, 9),
  createData(10, 'Tax', 300, '08-05-2020 16:43', 88888, 10),  
  createData(11, 'Phone Bill', 20, '05-05-2020 13:43', 12345, 11),
  createData(12, 'Tax', 100, '06-05-2020 14:43', 13456, 12),
  createData(13, 'Transfer Money', 500, '07-05-2020 15:43', 14567, 13),
  createData(14, 'Tax', 300, '08-05-2020 16:43', 88888, 14),  
  createData(15, 'Phone Bill', 20, '05-05-2020 13:43', 12345, 15),
  createData(16, 'Tax', 100, '06-05-2020 14:43', 13456, 16),
  createData(17, 'Transfer Money', 500, '07-05-2020 15:43', 14567, 17),
  createData(18, 'Tax', 300, '08-05-2020 16:43', 88888, 18),
  createData(19, 'Transfer Money', 500, '07-05-2020 15:43', 14567,19),
  createData(20, 'Tax', 300, '08-05-2020 16:43', 88888, 20),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function PaymentDetails() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
      <div >
        <h2 className="paymentHistoryTitle">Payment History</h2>
      </div>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="paymentTableHead">
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} className="paymentTableCell">
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}