import { Button, TextField, makeStyles } from '@material-ui/core';
import React from 'react';
import './App.css';
import { getRecipes } from './redux/api';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      maxWidth: '400px',
    },
  },
  styleButton: {
    height: '56px',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <h2>Repice App</h2>
      <form className={classes.root}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained" color="primary" className={classes.styleButton}>
          Search
        </Button>
      </form>
    </div>
  );
};

export default App;
