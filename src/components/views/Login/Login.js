import React from 'react';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Login = () => (

  <div>
  <Paper className={styles.component}>
    <form>
      <TextField className={styles.input} id="outlined-basic" variant="outlined" label="Username" />
      <TextField className={styles.input} id="outlined-basic" variant="outlined" label="Password" />
    </form>
    <Button className={styles.button} component={Link} to={`${process.env.PUBLIC_URL}/`} variant="contained" color="secondary">Log in</Button>
  </Paper>
</div>
);

export default Login;