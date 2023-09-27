import * as Action from './Action'

const initialState = {
    isMap: true, 
    isTabOpen: false,
}

const reducers = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.IS_MAP: {
            return {
                ...state,
                isMap: !state.isMap,
            }
        }
        case Action.IS_TAB_OPEN: {
            return {
                ...state,
                isTabOpen: !state.isTabOpen,
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;