import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const mockedOrders = [
  {id: 1, type: 'local', table: 1, orderDetails: 'espresso, doughnut'},
  {id: 2, type: 'local', table: 3, orderDetails: 'pizza with salami'},
  {id: 3, type: 'online', orderDetails: 'pizza with olives and mushrooms'},
  {id: 4, type: 'local', table: 1, orderDetails: 'salad with cucumber and tomatoes'},
  {id: 5, type: 'online', orderDetails: 'latte, pizza with salami'},
  {id: 6, type: 'local', table: 5, orderDetails: 'pizza with green peppers and olives'},
  {id: 7, type: 'local', table: 2, orderDetails: 'doughnut'},
  {id: 8, type: 'online', orderDetails: 'pizza with fresh bazil and red peppers'},
  {id: 9, type: 'local', table: 1, orderDetails: 'cappuccino'},
  {id: 10, type: 'local', table: 3, orderDetails: 'latte, doughnut'},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order number</TableCell>
          <TableCell>Order type</TableCell>
          <TableCell>Order table</TableCell>
          <TableCell>Order details</TableCell>
          <TableCell>Done</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {mockedOrders.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.type}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.orderDetails}
            </TableCell>
            <TableCell>
              <FormControlLabel
                control={<Checkbox name="checked"/>}
                label="Done"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>

);

export default Kitchen;