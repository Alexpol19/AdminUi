import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import SpeedIcon from '@material-ui/icons/Speed';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import { ReactComponent as lifebuoyIcon } from '../../common/lifebuoy.svg';
import { SvgIcon, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { greenTheme } from '../../common/ThemeVars';
import { NavLink, withRouter } from 'react-router-dom';

const aside = greenTheme.AsideNav;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: greenTheme.drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: greenTheme.drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItem: {
    color: aside.listItem.color,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  listItemActive: {
    color: aside.listItemActive.color
  },
  listItemIcon: {
    fontSize: '1.7rem',
  },
  listItemText: {
    paddingLeft: theme.spacing(3.5)
  }
}));

const AsideNav = (props) => {
    const classes = useStyles();
   
    const getNavIcon = (pageName) => {
      switch (pageName) {
        case 'dashboard':
          return <SpeedIcon className={classes.listItemIcon}  />
        case 'suport':
          return <SvgIcon className={classes.listItemIcon}  component={lifebuoyIcon} viewBox="0 0 600 600"/>
        default:
          return <TurnedInIcon className={classes.listItemIcon}  />
      }
    }
    const isActive = (pageName) => {
      if('/'+pageName === props.location.pathname){
        return true
      }
    }
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
        <Toolbar />
        <div className={classes.drawerContainer}>
          {props.nav.pages.map((page) => (
            <NavLink to={'/' + page.name.toLowerCase()} key={page.id} className={clsx(classes.listItem, isActive(page.name.toLowerCase()) ? classes.listItemActive : '')}>
                {getNavIcon(page.name.toLowerCase())}
                <Typography className={classes.listItemText} component="span">{page.name}</Typography>
            </NavLink>
          ))}
        </div>
      </Drawer>
    )
}

export default withRouter(AsideNav);
