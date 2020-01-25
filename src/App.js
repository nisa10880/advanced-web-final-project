import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import {
  Switch, Route, BrowserRouter as Router,
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { store } from "./state/store";

import { AddStudent } from './pages/AddStudent';
import { AddProfessor } from './pages/AddProfessor';
import { Home } from './pages/Home';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(4),
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add-student" component={AddStudent} />
              <Route path="/add-professor" component={AddProfessor} />
            </Switch>
          </Router>
        </Provider>
      </Container>
    </>
  );
}

App.propTypes = {};


export default App;
