import {combineReducers, createStore} from 'redux';
import {switchReducer} from './reducers';
//import {Pages, switchAction} from "./actionCreators";

const globalReducer = combineReducers({
    switchPage: switchReducer
});

const store = createStore(globalReducer);

// Store test
// console.log(store.getState());
//
// let unsubscribe =  store.subscribe(() => {
//     console.log(store.getState())
// });
//
// store.dispatch(switchAction(Pages.RENDER_SIGN));
//
// unsubscribe();

export default store;