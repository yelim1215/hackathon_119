// Action types
export const TAB_TOGGLE = 'TAB_TOGGLE';
export const TAB_OPENED = 'TAB_OPENED';
export const TAB_CLOSED = 'TAB_CLOSED';

// Action creators
export const tabToggle = () => {
    return {
        type: TAB_TOGGLE,
    }
}

export const tabOpened = () => {
    return {
        type: TAB_OPENED,
    }
}

export const tabClosed = () => {
    return {
        type: TAB_CLOSED,
    }
}