import { adminUiAPI } from "../api/api";
import { getRndInteger } from "../common/randomNumber";

const inintialState = {
    installations: 0,
    increasePercent: 0,
    dates: [],
    chartPages: [],
    dateRange: {},
    raportFetching: false,
}

const raport = (state = inintialState, action) => {
    switch(action.type) {
        case SET_RAPORT_FETCHING:
            return {
                ...state,
                raportFetching: !state.raportFetching,
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
        default:
            return state;
    }
}

// types
const SET_RAPORT_FETCHING = "SET_RAPORT_FETCHING";
const SET_RANGE = "SET_RANGE";
const SET_DATA = "SET_USEA";

// actionCreators
const setRaportFetching = () => {
    return{
        type: SET_RAPORT_FETCHING
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

// async
export const getRaport = (range, auto = 0) => async (dispatch) => {
    const response = await adminUiAPI.getRaport(range);
    const delay = auto ? 10000 : getRndInteger(200, 10000);
    if (!auto) dispatch(setRaportFetching())
    
    if(response.data.statusCode === 0){
        setTimeout(function(){
            if (!auto) dispatch(setRange(range))
            if (!auto) dispatch(setRaportFetching())

            dispatch(setData(response.data.data))
            dispatch(getRaport(range, 1));
        }, delay)
    }
}


export default raport;