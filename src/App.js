import React from 'react';
import { connect, Provider } from 'react-redux';
import './assets/App.sass';
import store from './redux/store';
import { BrowserRouter} from "react-router-dom";
import Main from './components/Main';
import { initializeApp } from './redux/app';
import { CircularProgress, Grid } from '@material-ui/core';

class MainApp extends React.Component{
  componentDidMount(){
    this.props.initializeApp()
  }
  render(){
    if(!this.props.initialized){
      return <Grid container justify="center" style={{ paddingTop: 100 }}><CircularProgress color="secondary" /></Grid>
    }
    return(
      <Main />
    )
  }
}

const mapStateToProps = (state) => {
  return{
    initialized: state.app.initialized,
  }
}

const AppContainer = connect(mapStateToProps, { initializeApp })(MainApp);

const App = () => {
  return (
      <BrowserRouter>
          <Provider store={store}>
              <AppContainer />
          </Provider>
      </BrowserRouter>
  )
}

export default App;