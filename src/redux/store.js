import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import masterReducer from './masterReducer';

const configureStore = (initialState) => {
    const enhancer = compose(applyMiddleware(thunkMiddleware));
    return createStore(masterReducer, initialState, enhancer);
};

export default configureStore({});