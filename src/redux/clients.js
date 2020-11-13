import { adminUiAPI } from "../api/api";
import { getRndInteger } from "../common/randomNumber";
import * as moment from 'moment';

const inintialState = {
    items: [],
    searchFetching: false,
}
const clients = (state = inintialState, action) => {
    switch(action.type) {
        case SET_SEARCH_FETCHING:
            return {
                ...state,
                searchFetching: !state.searchFetching,
            }
        case SET_CLIENTS:
            return {
                ...state,
                items: action.clients
            }
        default:
            return state;
    }
}
// types
const SET_SEARCH_FETCHING = "SET_SEARCH_FETCHING";
const SET_CLIENTS = "SET_CLIENTS";

// actionCreators
const setSearchFetching = () => {
    return{
        type: SET_SEARCH_FETCHING
    }
}
const setClients = (clients) => {
    return{
        type: SET_CLIENTS,
        clients
    }
}
// async

function formatDate(dateStr){
    const initDate = new Date(dateStr);
    return moment(initDate).format('L')
}

export const search = (params) => async (dispatch) => {
    dispatch(setSearchFetching())
    const response = await adminUiAPI.searchClients({...params, dateAccess: formatDate(params.dateAccess)});
    console.log(response.data.items)
    if(response.data.statusCode === 0){
        setTimeout(function(){
            dispatch(setClients(response.data.items))
            dispatch(setSearchFetching())
        }, getRndInteger(200, 10000))
    }
}

export default clients;