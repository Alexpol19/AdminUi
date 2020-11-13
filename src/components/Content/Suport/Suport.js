import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Search from './Search';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import { search } from '../../../redux/clients';
import { Backdrop, CircularProgress } from '@material-ui/core';
import PageHead from '../PageHead';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh'
  },
  box: {
    paddingLeft: theme.spacing(7),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Suport = ({clients, search, fetching}) => {
  const classes = useStyles();
  return (
    <>
      <PageHead pageName={'Suport'} />
      <div className={classes.root}>
          <Box p={3} className={classes.box}>
            <Search onSubmit={search} />
            <SearchResult clients={clients} />
          </Box>
          <Backdrop className={classes.backdrop} open={fetching}>
            <CircularProgress color="inherit" />
          </Backdrop>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.clients.searchFetching,
    clients: state.clients.items
  }
}

export default connect(mapStateToProps, {search})(Suport)