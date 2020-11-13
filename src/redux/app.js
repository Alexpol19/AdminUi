import { adminUiAPI } from "../api/api"
import { getRndInteger } from "../common/randomNumber";

const inintialState = {
    initialized: false,
}

const app = (state = inintialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

// types
const SET_INITIALIZED = "SET_INITIALIZED";

// actionCreators
const setInitialized = () => {
    return{
        type: SET_INITIALIZED
    }
}

// async
export const initializeApp = () => async (dispatch) => {
    const response = await adminUiAPI.getResponse();
    if(response.data.statusCode === 0){
        setTimeout(function(){
            dispatch(setInitialized())
        }, getRndInteger(500, 1000))
    }
}

export default app;