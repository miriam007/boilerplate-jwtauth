import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

const initialState = {};

const composeEnhancers =
 typeof window === "object" &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
 applyMiddleware(thunk)
);
const store = createStore(combineReducers,initialState,enhancer);
// const initialState = {};

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(applyMiddleware(thunk),
//         window.__REDUX_DEVTOOLS__EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

export default store;