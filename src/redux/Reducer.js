import * as Action from './Action'

const initialState = {
    isMap: true, 
    isTabOpen: false,
    isSearchTabOpen: false,
    keyword: '',
    // 10: 시/도, 8: 시/군/구, 6: 읍/면/동
    option: 8,
    // in: 내과, out: 외과, baby: 소아과
    searchOpt: {inhos: false, outhos: false, babyhos: false},
    locCenter: { lat: 33.450701, lon: 126.570667 },
    currLoc: { lat: 33.450701, lon: 126.570667 },
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
        case Action.IS_SEARCH_TAB_OPEN: {
            return {
                ...state,
                isSearchTabOpen: !state.isSearchTabOpen,
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
        case Action.TOGGLE_IN: {
            return {
                ...state,
                searchOpt: { ...state.searchOpt, inhos: !state.searchOpt.inhos},
            }
        }
        case Action.TOGGLE_OUT: {
            return {
                ...state,
                searchOpt: { ...state.searchOpt, outhos: !state.searchOpt.outhos },
            }
        }
        case Action.TOGGLE_BABY: {
            return {
                ...state,
                searchOpt: { ...state.searchOpt, babyhos: !state.searchOpt.babyhos },
            }
        }
        case Action.LOC_CENTER: {
            return {
                ...state,
                locCenter: {lat: action.lat, lon: action.lon},
            }
        }
        case Action.CURR_LOC: {
            return {
                ...state,
                currLoc: { lat: action.lat, lon: action.lon },
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;