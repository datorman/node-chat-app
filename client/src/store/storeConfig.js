import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './../reducers/auth';
import {loadState,saveState} from './localstore';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistState = loadState();

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }),
        persistState
    );
    store.subscribe(() => {
        saveState(store.getState());
    });
    return store;
};