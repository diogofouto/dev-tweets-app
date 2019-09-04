import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const configureStore = (initialState) => {
    const enhancer = compose(applyMiddleware(thunkMiddleware));
    return createStore(reducer, initialState, enhancer);
};

export default configureStore({});