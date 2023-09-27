import { createStore } from 'redux';

const store = (reducers) => {
    return createStore(reducers);
}

export default store;