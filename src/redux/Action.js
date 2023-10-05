// Action types
export const IS_MAP =  'IS_MAP'
export const IS_TAB_OPEN = 'IS_TAB_OPEN'

export const INPUT_KEYWORD = 'INPUT_KEYWORD'

export const CHOOSE_RADIUS = 'CHOOSE_RADIUS'

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

export const chooseRadius = (r) => {
    return {
        type: CHOOSE_RADIUS,
        radius: r,
    }
}

