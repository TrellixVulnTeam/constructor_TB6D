import {ADD_SECTION} from './actionCreators';

const initialState = 'FIRST_SECTION';

export function sectionReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_SECTION:
            return [
                ...state,
                action.sectionType
            ]
    }
}

