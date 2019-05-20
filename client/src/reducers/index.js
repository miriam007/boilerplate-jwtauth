import { combineReducers } from 'redux';
import errorReducer from './errorReducer';

// from article
export default combineReducers({
    errors: errorReducer
});

//from auth project
// const combineReducers=rootReducers({
//     errors: errorReducer
// });

// const rootReducer=combineReducers({
//     currentUserId
// })
// export default combineReducers;