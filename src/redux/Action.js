// Action types
export const IS_MAP =  'IS_MAP'
export const IS_TAB_OPEN = 'IS_TAB_OPEN'

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

