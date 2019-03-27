import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import authReducer from './../reducers/auth';
import roomReducer from './../reducers/room';
import activeRoom from './../reducers/activeRoom';
import {loadState,saveState} from './localstore';

const persistState = loadState();

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            rooms: roomReducer,
            activeRoom:activeRoom
        }),
        persistState
    );
    store.subscribe(() => {
        saveState(store.getState());
    });
    return store;
};