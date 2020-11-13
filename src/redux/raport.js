import { adminUiAPI } from "../api/api";
import { getRndInteger } from "../common/randomNumber";
import store from "./store";

const inintialState = {
    installations: 0,
    increasePercent: 0,
    dates: [],
    chartPages: [],
    dateRange: {},
    raportFetching: false,
    interval: null
}

const raport = (state = inintialState, action) => {
    switch(action.type) {
        case SET_RAPORT_FETCHING:
            return {
                ...state,
                raportFetching: action.fetching,
            }
        case SET_RANGE:
            return {
                ...state,
                dateRange: {...action.range}
            }
        case SET_DATA:
            return {
                ...state,
                dates: [...action.data.dates],
                installations: action.data.installations,
                increasePercent: action.data.increasePercent,
                chartPages: [...action.data.chartPages]
            }
        case SET_INTERVAL_ID:
            return {
                ...state,
                interval: action.interval
            }
        default:
            return state;
    }
}

// types
const SET_RAPORT_FETCHING = "SET_RAPORT_FETCHING";
const SET_RANGE = "SET_RANGE";
const SET_DATA = "SET_USEA";
const SET_INTERVAL_ID = "SET_INTERVAL_ID";

// actionCreators
const setRaportFetching = (fetching) => {
    return{
        type: SET_RAPORT_FETCHING,
        fetching
    }
}
const setRange = (range) => {
    return{
        type: SET_RANGE,
        range
    }
}
const setData = (data) => {
    return{
        type: SET_DATA,
        data
    }
}
const setIntervalId = (interval) => {
    return{
        type: SET_INTERVAL_ID,
        interval
    }
}

// async
const getResponse = async (range, dispatch) => {
    const response = await adminUiAPI.getRaport(range);
    if(response.data.statusCode === 0){
        dispatch(setRange(range))
        dispatch(setRaportFetching(false))
        dispatch(setData(response.data.data))
    }
}

export const getRaport = (range) => async (dispatch) => {
    const delay = getRndInteger(200, 10000);
    dispatch(setRaportFetching(true));
    clearInterval(store.getState().raport.interval);
    setTimeout(function(){
        getResponse(range, dispatch);// first call with delay random
        const interval = setInterval(function(){
            getResponse(range, dispatch); // autoCall with delay 10000
        }, 10000)
        dispatch(setIntervalId(interval))
    }, delay)
}

export default raport;