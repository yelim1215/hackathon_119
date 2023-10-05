// Action types
export const IS_MAP =  'IS_MAP'
export const IS_TAB_OPEN = 'IS_TAB_OPEN'
export const IS_SEARCH_TAB_OPEN = 'IS_SEARCH_TAB_OPEN'
export const INPUT_KEYWORD = 'INPUT_KEYWORD'

export const CHOOSE_MAP_SCALE = 'CHOOSE_MAP_SCALE'

// 검색옵션 선택
export const TOGGLE_IN = 'TOGGLE_IN'
export const TOGGLE_OUT = 'TOGGLE_OUT'
export const TOGGLE_BABY = 'TOGGLE_BABY'

// 지도 위치 관련 상태
export const LOC_CENTER = 'LOC_CENTER'
export const CURR_LOC = 'CURR_LOC'

// Action creators
export const isMap = () => {
    return {
        type: IS_MAP,
    }
}

export const isTabOpen = () => {
    return {
        type: IS_TAB_OPEN,
    }
}

export const isSearchTabOpen = () => {
    return {
        type: IS_SEARCH_TAB_OPEN,
    }
}

export const inputKeyword = (kw) => {
    return {
        type: INPUT_KEYWORD,
        keyword: kw,
    }
}

export const chooseMapScale = (r) => {
    return {
        type: CHOOSE_MAP_SCALE,
        option: r,
    }
}

export const toggleIn = () => {
    return {
        type: TOGGLE_IN,
    }
}

export const toggleOut = () => {
    return {
        type: TOGGLE_OUT,
    }
}

export const toggleBaby = () => {
    return {
        type: TOGGLE_BABY,
    }
}

export const locCenter = (lat, lon) => {
    return {
        type: LOC_CENTER,
        lat: lat,
        lon: lon,
    }
}

export const currLoc = (lat, lon) => {
    return {
        type: CURR_LOC,
        lat: lat,
        lon: lon,
    }
}

