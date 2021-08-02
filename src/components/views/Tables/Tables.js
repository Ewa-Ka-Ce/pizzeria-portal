import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (

  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/:id'} activeClassName='active'>Booking id</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/booking/new'} activeClassName='active'>Booking new</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/:id'} activeClassName='active'>Events id</Link>
    <Link to={process.env.PUBLIC_URL + '/tables/events/new'} activeClassName='active'>Events new</Link>
  </div>
);

export default Tables;