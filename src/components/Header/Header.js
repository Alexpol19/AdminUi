import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ReactComponent as chartIcon } from '../../common/pie-chart.svg';
import { SvgIcon } from '@material-ui/core';
import { greenTheme } from '../../common/ThemeVars';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: greenTheme.Header.backgroundColor,
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    width: '2rem',
    height: '2rem',
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <SvgIcon className={classes.logo} component={chartIcon} viewBox="0 0 600 600"/>
          <Typography variant="h6" className={classes.title}>
            Admin UI
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}