import app from "./app";
import aside from "./aside";
import clients from "./clients";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import raport from "./raport";


const { createStore, combineReducers, applyMiddleware, compose} = require("redux");

let reducers = combineReducers({
    app,
    aside,
    clients,
    raport,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;