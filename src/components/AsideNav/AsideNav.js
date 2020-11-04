import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SpeedIcon from '@material-ui/icons/Speed';
import { ReactComponent as lifebuoyIcon } from '../../common/lifebuoy.svg';
import { SvgIcon } from '@material-ui/core';
import clsx from 'clsx';
import { greenTheme } from '../../common/ThemeVars';

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
  },
  listItemActive: {
      color: aside.listItemActive.color
  },
  listItemIcon: {
    fontSize: '1.7rem'
  },
  listItemText: {
    color: 'inherit',
    fontWeight: '600'
  }
}));

const AsideNav = ({nav, setCurrentPage}) => {
    const classes = useStyles();
    const setActive = (current) => {
      setCurrentPage(current);
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
          <List>
            {nav.pages.map((page) => (
              <ListItem button key={page.name} className={clsx(classes.listItem, page.id === nav.current ? classes.listItemActive : '')} onClick={() => setActive(page.id)}>
                <ListItemIcon color="inherit">{page.id % 2 === 0 ? <SpeedIcon className={classes.listItemIcon} style={ page.id === nav.current ? { color: aside.listItemActive.color } : { color: aside.listItem.color}} /> : <SvgIcon className={classes.listItemIcon} style={ page.id === nav.current ? { color: aside.listItemActive.color } : { color: aside.listItem.color}} component={lifebuoyIcon} viewBox="0 0 600 600"/>}</ListItemIcon>
                <ListItemText primary={page.name}/>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    )
}

export default AsideNav;