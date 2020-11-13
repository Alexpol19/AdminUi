import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from './Dashboard/Dashboard';
import Suport from './Suport/Suport';
import { greenTheme } from '../../common/ThemeVars';
import { Redirect, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  main: {
      marginLeft: greenTheme.drawerWidth,
      width: `calc(100% - ${greenTheme.drawerWidth}px)`,
  }
}));

export default function Content() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/dashboard" render={ () => <Dashboard/>} />
        <Route exact path="/suport" render={ () => <Suport/>} />
        <Redirect to="/dashboard" />
      </Switch>
    </main>
  );
}