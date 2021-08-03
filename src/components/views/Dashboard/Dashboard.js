import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mockedLocalOrders = [
  {id: '1', status: 'done', cost: '$16'},
  {id: '2', status: 'done', cost: '$10'},
  {id: '4', status: 'done', cost: '$13'},
  {id: '7', status: 'delivered', cost: '$25'},
  {id: '9', status: 'ordered', cost: '$50'},
];

const mockedOnlineOrders = [
  {id: '3', status: 'done', cost: '$12'},
  {id: '5', status: 'done', cost: '$18'},
  {id: '6', status: 'in delivery', cost: '$10'},
  {id: '8', status: 'ready', cost: '$20'},
];
const mockedEventsAndBookings = [
  {id: '1', table: '1', startHour: '12', duration: '3'},
  {id: '2', table: '3', startHour: '10', duration: '5'},
  {id: '3', table: '5', startHour: '15', duration: '1'},
  {id: '4', table: '2', startHour: '13', duration: '2'},
  {id: '5', table: '1', startHour: '18', duration: '3'},
];

const Dashboard = () => (
  <Paper className={styles.component}>
    <h1 className={styles.header}>Local orders</h1>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order number</TableCell>
          <TableCell>Order status</TableCell>
          <TableCell>Order cost</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {mockedLocalOrders.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.cost}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <h1 className={styles.header}>Online orders</h1>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order number</TableCell>
          <TableCell>Order status</TableCell>
          <TableCell>Order cost</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {mockedOnlineOrders.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {row.cost}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <h1 className={styles.header}>Events and bookings</h1>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Number</TableCell>
          <TableCell>Table</TableCell>
          <TableCell>Start hour</TableCell>
          <TableCell>Duration</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {mockedEventsAndBookings.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.startHour}
            </TableCell>
            <TableCell>
              {row.duration}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Dashboard;