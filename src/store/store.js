import {combineReducers} from "redux";
import SectionsReducer from "./reducer";
import activeSection from "./activeSection";

const allReducers = combineReducers({
    sections: SectionsReducer,
    active: activeSection
});

export default allReducers;