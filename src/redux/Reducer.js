import * as Action from './Action'

const initialState = {
    tabOptions: { tabOpened: false, tabType: 'info' },
}

const reducers = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case Action.TAB_TOGGLE: {
            return {
                ...state,
                tabOptions: { tabOpened: !state.tabOptions.tabOpened, tabType: state.tabOptions.tabopt }
            }
        }
        case Action.TAB_OPENED: {
            return {
                ...state,
                tabOptions: { tabOpened: true, tabType: state.tabOptions.tabopt }
            }
        }
        case Action.TAB_CLOSED: {
            return {
                ...state,
                tabOptions: { tabOpened: false, tabType: state.tabOptions.tabopt }
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;