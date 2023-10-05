// Action types
export const IS_MAP =  'IS_MAP'
export const IS_TAB_OPEN = 'IS_TAB_OPEN'

export const INPUT_KEYWORD = 'INPUT_KEYWORD'

export const CHOOSE_MAP_SCALE = 'CHOOSE_MAP_SCALE'

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

export const inputKeyword = (kw) => {
    return {
        type: INPUT_KEYWORD,
        keyword: kw,
    }
}

export const chooseMapScale = (opt) => {
    return {
        type: CHOOSE_MAP_SCALE,
        option: opt,
    }
}

