import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
//import { withRouter } from 'react-router';
//import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const mockedEventsAndBookings = [
  {hour: '10:00', table1: 'new', table2: 'new', table3: 2, table4: 'new', table5: 'new'},
  {hour: '10:30', table1: 'new', table2: 'new', table3: 2, table4: 'new', table5: 'new'},
  {hour: '11:00', table1: 'new', table2: 'new', table3: 2, table4: 'new', table5: 'new'},
  {hour: '11:30', table1: 'new', table2: 'new', table3: 2, table4: 'new', table5: 'new'},
  {hour: '12:00', table1: 1, table2: 'new', table3: 2, table4: 'new', table5: 'new'},
  {hour: '12:30', table1: 1, table2: 'new', table3: 2, table4: 'new', table5: 'new'},
  {hour: '13:00', table1: 1, table2: 4, table3: 2, table4: 'new', table5: 'new'},
  {hour: '13:30', table1: 1, table2: 4, table3: 2, table4: 'new', table5: 'new'},
  {hour: '14:00', table1: 1, table2: 4, table3: 2, table4: 'new', table5: 'new'},
  {hour: '14:30', table1: 1, table2: 4, table3: 2, table4: 'new', table5: 'new'},
  {hour: '15:00', table1: 'new', table2: 'new', table3: 'new', table4: 'new', table5: 3},
  {hour: '15:30', table1: 'new', table2: 'new', table3: 'new', table4: 'new', table5: 3},
  {hour: '16:00', table1: 'new', table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '16:30', table1: 'new', table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '17:00', table1: 'new', table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '17:30', table1: 'new', table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '18:00', table1: 4, table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '18:30', table1: 6, table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '19:00', table1: 5, table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '19:30', table1: 2, table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '20:00', table1: 5, table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
  {hour: '20:30', table1: 5, table2: 'new', table3: 'new', table4: 'new', table5: 'new'},
];


const Tables = props => (

  <div className={styles.component}>
   <Paper className={styles.component}>
      <form noValidate>
        <TextField
          id="datetime-local"
          label="Pick date and hour"
          type="datetime-local"
          defaultValue="2021-08-01T12:00"
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockedEventsAndBookings.map(row => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row">
                {row.hour}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.table1 && (
                  <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}>
                    {row.table1}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table2 && (
                  <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table2}`}>
                    {row.table2}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table3 && (
                  <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table3}`}>
                    {row.table3}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table4 && (
                  <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table4}`}>
                    {row.table4}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {row.table5 && (
                  <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table5}`}>
                    {row.table5}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <Button className={styles.button} component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/tables/booking/new`}>NEW BOOKING</Button>
        <Button className={styles.button} component={Link} variant="contained" color="secondary" to={`${process.env.PUBLIC_URL}/tables/events/new`}>NEW EVENT</Button>
      </div>
    </Paper>
  </div>
);



export default Tables;