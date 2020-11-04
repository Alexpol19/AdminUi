const inintialState = {
    pages: [
        {
            id: 0,
            name: 'Dashboard'
        },
        {
            id: 1,
            name: 'Suport'
        }
    ],
    current: 0
}

const aside = (state = inintialState, action) => {
    switch(action.type) {
        case SET_CURRENT_PAGE:
            localStorage.setItem('current', action.current)
            return {
                ...state,
                current: Number(action.current),
            }
        default:
            return state;
    }
}

// types
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

// actionCreators
export const setCurrentPage = (current) => {
    return{
        type: SET_CURRENT_PAGE,
        current
    }
}

export default aside;