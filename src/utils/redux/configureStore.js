
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer';
import { apiMiddleware } from 'redux-api-middleware';
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(apiMiddleware, thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
export default store;