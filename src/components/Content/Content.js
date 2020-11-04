import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dashboard from './Dashboard/Dashboard';
import Suport from './Suport/Suport';
import { greenTheme } from '../../common/ThemeVars';

const headerHeight = 64;

const useStyles = makeStyles((theme) => ({
  main: {
      marginLeft: greenTheme.drawerWidth,
      width: `calc(100% - ${greenTheme.drawerWidth}px)`,
  },
  appBar: {
    backgroundColor: greenTheme.color,
    zIndex: theme.zIndex.drawer + 1,
    marginTop: `${headerHeight}px`,
    paddingLeft: theme.spacing(4)
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Content({currentPage}) {
  const classes = useStyles();
  return (
      <main className={classes.main}>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h5" className={classes.title}>
                    {currentPage.name}
                </Typography>
            </Toolbar>
        </AppBar>
        {currentPage.id === 0 ? <Dashboard /> : <Suport /> }
    </main>
  );
}