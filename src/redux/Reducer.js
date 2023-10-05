import * as Action from './Action'

const initialState = {
    isMap: true, 
    isTabOpen: false,
    keyword: '',
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
        case Action.INPUT_KEYWORD: {
            return {
                ...state,
                keyword: action.keyword,

            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;