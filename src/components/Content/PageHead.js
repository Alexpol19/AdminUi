import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { greenTheme } from '../../common/ThemeVars';

const headerHeight = 64;

const useStyles = makeStyles((theme) => ({
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

export default function PageHead({pageName}) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <Typography variant="h5" className={classes.title}>
                {pageName}
            </Typography>
        </Toolbar>
    </AppBar>
  );
}