import * as Action from './Action'

const initialState = {
    isMap: true, 
    isTabOpen: false,
    keyword: '',
    // 10: 시/도, 8: 시/군/구, 6: 읍/면/동
    option: 8,
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
        case Action.CHOOSE_MAP_SCALE: {
            return {
                ...state,
                option: action.option,

            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;