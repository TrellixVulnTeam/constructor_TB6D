import {createStore} from 'redux';
import {sectionReducer} from "./reducers";

// const globalReducer = combineReducers({
//     sectionReducer
// });

const store = createStore(sectionReducer);

export default store;